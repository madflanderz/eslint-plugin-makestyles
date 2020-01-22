# eslint-plugin-makestyles

This plugin ensures that a name is used inside makeStyles.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-makestyles`:

```
$ npm install eslint-plugin-makestyles --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-makestyles` globally.

## Usage

Add `makestyles` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["makestyles"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "makestyles/makestyles-with-name": 2
  }
}
```

## Developer info

To publish this package to npm you have to increase package number and execute this

```
npm publish
```
