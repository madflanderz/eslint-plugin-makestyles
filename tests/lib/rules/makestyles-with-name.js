/**
 * @fileoverview This rule  ensures that a name is used inside makeStyles.
 * @author Martin Anders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/makestyles-with-name"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("makestyles-with-name", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "var useStyles = makeStyles( { root: { color: 'red'} }, { name: 'MyComponent' })"
  ],

  invalid: [
    {
      code: "var useStyles = makeStyles({})",
      errors: [
        {
          message:
            'No name for style defined. Please add {name: "ComponentName"} as second argument.',
          type: "VariableDeclaration"
        }
      ]
    }
  ]
});
