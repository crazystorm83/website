import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: '../../public/bundle/primitive_types.js',
    format: 'umd',
    name: 'primitive_types',
    sourcemap: true,
  },
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
