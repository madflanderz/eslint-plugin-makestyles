# eslint-plugin-makestyles

This rule helps to ensure the developer does not forget to add a `name` option to [Material-UI makeStyles][makestyles] function.

## Rule Details

Examples of **incorrect** code for this rule:

```js
var useStyles = makeStyles({
  root: {
    color: "red"
  }
});
```

Examples of **correct** code for this rule:

```js
var useStyles = makeStyles(
  {
    root: {
      color: "red"
    }
  },
  {
    name: "MyComponent"
  }
);
```

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

Add this to your your `.eslintrc` configuration file to get our recommended rule setup (only warnings). 

```
"extends": [
    "plugin:makestyles/recommended",
  ]
```

If you do not use the preset you will need to specify individual rules and add extra configuration.

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
    "makestyles/makestyles-with-name": "error"
  }
}
```

## Links

- [Material-UI]
- [makeStyles hook][makestyles]
- [github project][github]

[material-ui]: https://material-ui.com/
[makestyles]: https://material-ui.com/styles/api/#makestyles-styles-options-hook
[github]: https://github.com/madflanderz/eslint-plugin-makestyles
