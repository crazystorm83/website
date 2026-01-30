import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import { existsSync, statSync } from 'fs';
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '..');

const PACKAGE_ALIASES = [
  ['@primitive_types', '01.primitive_types'],
  ['@foundation', '02.foundation'],
  ['@browser_foundation', '05.browser_foundation'],
  ['@browser_infra', '10.browser_infra'],
  ['@browser_node', '20.browser_node'],
];
const PACKAGES = PACKAGE_ALIASES.map(([, p]) => p);

/** Resolve @alias and relative imports to absolute .ts/.tsx paths so esbuild transform runs. */
function resolveRelativeFromPackages() {
  return {
    name: 'resolve-relative-from-packages',
    resolveId(id, importer) {
      // 1) @alias 경로 → 절대 경로 + .ts 확장자 (esbuild include에 걸리도록)
      for (const [alias, pkg] of PACKAGE_ALIASES) {
        if (id === alias || id.startsWith(alias + '/')) {
          const sub = id === alias ? '' : id.slice(alias.length + 1);
          const candidate = path.join(srcDir, pkg, sub);
          for (const ext of ['.ts', '.tsx']) {
            const full = candidate.endsWith(ext) ? candidate : candidate + ext;
            if (existsSync(full)) return full;
          }
          if (existsSync(path.join(candidate, 'index.ts'))) return path.join(candidate, 'index.ts');
          return null;
        }
      }
      // 2) 상대 경로
      if (!importer || id === '' || !id.startsWith('.')) return null;
      const importerDir = path.dirname(importer);
      const resolved = path.resolve(importerDir, id);
      for (const ext of ['.ts', '.tsx']) {
        const p = resolved.endsWith(ext) ? resolved : resolved + ext;
        if (existsSync(p) && !statSync(p).isDirectory()) return p;
      }
      const indexTs = path.join(resolved, 'index.ts');
      if (existsSync(resolved) && statSync(resolved).isDirectory() && existsSync(indexTs)) return indexTs;
      if (existsSync(indexTs)) return indexTs;
      for (const pkg of PACKAGES) {
        const pkgDir = path.join(srcDir, pkg);
        const rel = id.replace(/^\.\//, '');
        const candidate = path.join(pkgDir, rel);
        const withTs = candidate.endsWith('.ts') || candidate.endsWith('.tsx') ? candidate : candidate + '.ts';
        const withTsx = candidate.endsWith('.tsx') ? candidate : candidate + '.tsx';
        const withIndex = path.join(candidate, 'index.ts');
        if (existsSync(withTs)) return withTs;
        if (existsSync(withTsx)) return withTsx;
        if (existsSync(withIndex)) return withIndex;
      }
      return null;
    },
  };
}

export default {
  input: 'index.ts',
  output: {
    file: '../../public/bundle/browser.js',
    format: 'umd',
    name: 'browser',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolveRelativeFromPackages(), // @alias·상대 경로 → 절대 .ts 경로 (esbuild가 변환하도록)
    alias({
      entries: [
        { find: '@primitive_types', replacement: path.resolve(__dirname, '../01.primitive_types') },
        { find: '@foundation', replacement: path.resolve(__dirname, '../02.foundation') },
        { find: '@browser_foundation', replacement: path.resolve(__dirname, '../05.browser_foundation') },
        { find: '@browser_infra', replacement: path.resolve(__dirname, '../10.browser_infra') },
        { find: '@browser_node', replacement: path.resolve(__dirname, '../20.browser_node') },
      ],
    }),
    nodeResolve(),
    esbuild({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      sourceMap: true,
      minify: false,
      target: 'esnext',
      jsx: 'transform',
      tsconfig: './tsconfig.rollup.json',
    }),
  ],
};
