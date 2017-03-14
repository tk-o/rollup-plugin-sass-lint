import path from 'path';
import { createFilter } from 'rollup-pluginutils';
import { lintFileText, outputResults, failOnError } from 'sass-lint';

function normalizePath(id) {
	return path.relative(process.cwd(), id).split(path.sep).join('/');
}

export default function sassLint(options = {}) {
	const filter = createFilter(
		options.include,
		options.ignore || ['node_modules/**', '**/*.js']
	);

	return {
		name: 'sass-lint',

		transform(code, id) {
			const isFileExcluded = !filter(id);

			if(isFileExcluded) {
				return;
			}

			const file = {
        text: code,
        format: path.extname(id).replace('.', ''),
        filename: path.relative(process.cwd(), id)
      };

			const result = [...lintFileText(file, options)];

			outputResults(result, options);

			if(options.failOnError) {
				failOnError(result, options);
			}
		}
	};
}
