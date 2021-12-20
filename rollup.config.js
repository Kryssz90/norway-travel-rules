import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    inlineDynamicImports: true
  },
  preserveModules: false,
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    image(),
    babel({
      presets: ['@babel/preset-react']
    }),
    commonjs()
  ]
};
