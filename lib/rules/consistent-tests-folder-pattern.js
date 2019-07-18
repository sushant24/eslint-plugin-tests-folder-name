/**
 * @fileoverview Tests file should be placed under __tests__ folder
 * @author Sushant Bhatia
 */
"use strict";
var path = require("path");

var DEFAULT_OPTION = [{
  filePattern: '.*\.spec\.js$',
  folderPattern: '__tests__',
}]

function createRegexFromPatternOption(matchPatternArray) {
  return matchPatternArray.map(function(item) {
    return {
      fileRegex: new RegExp(item.filePattern),
      folderRegex: new RegExp(item.folderPattern),
    };
  });
}

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
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        type: "array",
        items: {
          type: "object",
          properties: {
            folderPattern: {
              type: "string"
            },
            filePattern: {
              type: "string"
            }
          }
        }
      }
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
      Program: function(node) {
        var filename = context.getFilename(),
          absoluteFilename = path.resolve(filename),
          baseName = path.basename(filename);
        
        const matchPatternOptions = createRegexFromPatternOption(context.options[0] || DEFAULT_OPTION);


        const hasError = matchPatternOptions.some(function(item) {
          return item.fileRegex.test(filename) &&
                !item.folderRegex.test(absoluteFilename);
        });

        if (hasError) {
          context.report(
            node,
            "File '{{name}}' should be placed under the recommended folder pattern.",
            {
              name: baseName
            }
          );
        }

        
      }
    };
  }
};
