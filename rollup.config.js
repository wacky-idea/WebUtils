const typescript = require('rollup-plugin-typescript2')
const packageConfig = require('./package.json')

const copyright = `/*! ${packageConfig.name} v${packageConfig.version} | (c) ${new Date().getFullYear()} ${packageConfig.author} | Released under the ${packageConfig.license} License */`;

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: packageConfig.typings,
  output: [
    {
      file: packageConfig.main,
      format: 'cjs',
      sourcemap: false,
      banner: copyright,
    },
    {
      file: packageConfig.module,
      format: 'esm',
      sourcemap: false,
      banner: copyright,
    },
    {
      file: packageConfig['umd:main'],
      format: 'umd',
      sourcemap: false,
      banner: copyright,
      // umd global attr name
      name: "WebUtils",
      minifyInternalExports: true,
    }
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
};
