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
            description: "This rule  ensures that a name is used inside material ui makeStyles function.",
            category: "Material-UI",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

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
                  (!variableDeclarator.init.arguments[1] || !variableDeclarator.init.arguments[1].properties[0] || variableDeclarator.init.arguments[1].properties[0].key.name != "name")
                ) {
                  context.report(node, 'No name for style defined. Please add {name: "ComponentName"} as second argument.');
                }
              });
            }
          };
    }
};
