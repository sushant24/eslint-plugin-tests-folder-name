/**
 * @fileoverview Tests file should be placed under __tests__ folder
 * @author Sprinklr
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/consistent-tests-folder-pattern"),

    RuleTester = require("eslint").RuleTester;

var  testCode = "var foo = 'bar';";


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("consistent-tests-folder-pattern", rule, {

    valid: [
        {
            code: testCode,
            filename: '/Dev/MyProject/src/Component/__tests__/testFile.spec.js',
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/src/Component.js',
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/src/Component/__tests__/submodule/Component.js',
        }
    ],

    invalid: [
        {
            code: testCode,
            filename: '/Dev/MyProject/tests/testFile.spec.js',
            errors: [{
                message: "File '/Dev/MyProject/tests/testFile.spec.js' must be put under the __tests__ folder"
            }]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/specs/testFile.spec.js',
            errors: [{
                message: "File '/Dev/MyProject/specs/testFile.spec.js' must be put under the __tests__ folder"
            }]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/__specs__/testFile.spec.js',
            errors: [{
                message: "File '/Dev/MyProject/__specs__/testFile.spec.js' must be put under the __tests__ folder"
            }]
        }
    ]
});
