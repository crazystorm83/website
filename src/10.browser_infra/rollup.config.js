import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: 'index.ts',
  output: {
    file: '../../public/bundle/browser_infra.js',
    format: 'umd',
    name: 'browser_infra',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [
        {
          find: '@primitive_types',
          replacement: path.resolve(__dirname, '../01.primitive_types'),
        },
        {
          find: '@foundation',
          replacement: path.resolve(__dirname, '../02.foundation'),
        },
        {
          find: '@browser_foundation',
          replacement: path.resolve(__dirname, '../05.browser_foundation'),
        },
      ],
    }),
    typescript({ tsconfig: './tsconfig.rollup.json' }),
  ],
};
