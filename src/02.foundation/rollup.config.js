import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: 'index.ts',
  output: {
    file: '../../public/bundle/foundation.js',
    format: 'umd',
    name: 'foundation',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [
        {
          find: '@primitive_types',
          replacement: path.resolve(__dirname, '../01.primitive_types'),
        },
      ],
    }),
    typescript({ tsconfig: './tsconfig.rollup.json' }),
  ],
};
