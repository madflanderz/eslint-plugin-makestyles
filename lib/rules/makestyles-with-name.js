/**
 * @fileoverview This rule  ensures that a name is used inside material ui makeStyles function.
 * @author Martin Anders
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "This rule  ensures that a name is used inside material ui makeStyles function.",
      category: "Material-UI",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function checkProps(props) {
      var nameFound = false;
      props.forEach(function(prop) {
        if (prop.key.name == "name") {
          nameFound = true;
        }
      });
      return nameFound;
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      VariableDeclaration: function(node) {
        node.declarations.forEach(function(variableDeclarator) {
          if (
            variableDeclarator.id.name == "useStyles" &&
            variableDeclarator.init.type == "CallExpression" &&
            variableDeclarator.init.callee.name == "makeStyles" &&
            (!variableDeclarator.init.arguments[1] ||
              !checkProps(variableDeclarator.init.arguments[1].properties))
          ) {
            context.report(
              node,
              'No name for style defined. Please add {name: "ComponentName"} as second argument.'
            );
          }
        });
      }
    };
  }
};
