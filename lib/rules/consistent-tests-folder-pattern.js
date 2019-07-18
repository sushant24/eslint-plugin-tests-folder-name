/**
 * @fileoverview Tests file should be placed under __tests__ folder
 * @author Sushant Bhatia
 */
"use strict";
var path = require("path");
var testFileRegex = /.*\.spec\.js$/;
var testFolderRegex = /__tests__/;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Tests file should be placed under __tests__ folder",
            category: "Best Practices",
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

            // give me methods
            "Program": function(node) {
                var filename = context.getFilename(),
                    absoluteFilename = path.resolve(filename),
                    baseName = path.basename(filename);
                    
                if (testFileRegex.test(filename) && !testFolderRegex.test(absoluteFilename)) {
                    context.report(node, "File '{{name}}' must be put under the __tests__ folder", {
                        name: baseName,
                    });
                }

            }
        };
    }
};
