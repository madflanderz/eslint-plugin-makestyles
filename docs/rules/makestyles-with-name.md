# This rule ensures that a name is used inside material uis makeStyles function. (makestyles-with-name)

This rule helps to ensure developer does not forget to add a `name` to `makeStyles` function. 

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

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
