import esbuild from 'rollup-plugin-esbuild';

const external = (id) => !/^[./]/.test(id);

const createBundleConfig = (input, output) =>
	[
	// Create a bundle.
		{
			input   : input,
			plugins : [ esbuild() ],
			output  : [
				{
					file      : `${output}.mjs`,
					format    : 'es',
					sourcemap : true
				}
			],
			external : external
		}
	];

export default [ ...createBundleConfig('src/index.ts', 'lib/esm/index') ];
