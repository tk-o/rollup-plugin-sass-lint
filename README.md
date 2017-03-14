# rollup-plugin-sass-lint

This plugin allows you to use [`sass-lint`](https://github.com/sasstools/sass-lint) in [`rollup.js`](https://github.com/rollup/rollup) project.

### Installation
To install use:
```
yarn add rollup-plugin-sass-lint --dev
```

### Usage
Then use it in your `rollup.config.js` file as a plugin:

```javascript
import sassLint from 'rollup-plugin-sass-lint';

const sassLintOptions = {}; // please check # Options section below

export default {
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    sassLint(sassLintOptions),
  ],
};
```

### Options
This plugin can take the same set of options like `sass-lint`. You can either provide `.sass-lint.yml` file or simply pass the options in `rollup.config.js` file while calling `sassLint` function.

##### Additional options
- `failOnError` (default: _false_) - if set to _ture_ and some linting errors occured it exits the process with an error (useful when building assets for production environment)
