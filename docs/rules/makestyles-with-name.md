# This rule ensures that a name is used inside material-ui makeStyles function. (makestyles-with-name)

This rule helps to ensure the developer does not forget to add a `name` option to [Material-UI makeStyles][makeStyles] function. 

## Rule Details

Examples of **incorrect** code for this rule:

```js

var useStyles = makeStyles({
  root: {
    color: "red"
  }
})

```

Examples of **correct** code for this rule:

```js

var useStyles = makeStyles({
  root: {
    color: "red"
  }
}, {
  name: "MyComponent"
})

```

## Links

- [Material-UI]
- [makeStyles hook][makeStyles]
- [github project][github]


[Material-UI]: https://material-ui.com/
[makeStyles]: https://material-ui.com/styles/api/#makestyles-styles-options-hook
[github]: https://github.com/madflanderz/eslint-plugin-makestyles
