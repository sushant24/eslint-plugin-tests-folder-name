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
            options: [[{ filePattern: '.*\.spec\.js$', folderPattern: '__tests__' }]]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/src/Component.js',
            options: [[{ filePattern: '.*\.spec\.js$', folderPattern: '__tests__' }]]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/src/Component/__tests__/submodule/Component.js',
            options: [[{ filePattern: '.*\.spec\.js$', folderPattern: '__tests__' }]]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/src/Component/__fixtures__/submodule/Component.fixtures.js',
            options: [[{ filePattern: '.*\.fixtures\.js$', folderPattern: '__fixtures__' }]]
        }
    ],

    invalid: [
        {
            code: testCode,
            filename: '/Dev/MyProject/tests/testFile.spec.js',
            options: [[{ filePattern: '.*\.spec\.js$', folderPattern: '__tests__' }]],
            errors: [{
                message: "File 'testFile.spec.js' should be placed under the recommended folder pattern."
            }]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/specs/testFile.spec.js',
            errors: [{
                message: "File 'testFile.spec.js' should be placed under the recommended folder pattern."
            }]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/__specs__/testFile.spec.js',
            errors: [{
                message: "File 'testFile.spec.js' should be placed under the recommended folder pattern."
            }]
        },
        {
            code: testCode,
            filename: '/Dev/MyProject/__specs__/testFile.fixtures.js',
            options: [[{ filePattern: '.*\.fixtures\.js$', folderPattern: '__fixtures__' }]],
            errors: [{
                message: "File 'testFile.fixtures.js' should be placed under the recommended folder pattern."
            }]
        }
    ]
});
