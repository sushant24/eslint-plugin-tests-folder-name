# eslint-plugin-tests-folder-name

Tests should be written inside __tests__ folder

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tests-folder-name`:

```
$ npm install eslint-plugin-tests-folder-name --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-tests-folder-name` globally.

## Usage

Add `tests-folder-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tests-folder-name"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tests-folder-name/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





