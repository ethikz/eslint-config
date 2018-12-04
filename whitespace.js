const assign = require( 'object.assign' );
const entries = require( 'object.entries' );
const CLIEngine = require( 'eslint' ).CLIEngine;

const baseConfig = require( '.' );

function onlyErrorOnRules( rulesToError, config ) {
  const errorsOnly = assign({}, config );
  const cli = new CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });
  const baseRules = cli.getConfigForFile( './' ).rules;

  entries( baseRules ).forEach( ( rule ) => {
    const ruleName = rule[0];
    const ruleConfig = rule[1];

    if ( rulesToError.indexOf( ruleName ) === -1 ) {
      if ( Array.isArray( ruleConfig ) ) {
        errorsOnly.rules[ruleName] = ['warn'].concat( ruleConfig.slice( 1 ) );
      } else if ( typeof ruleConfig === 'number' ) {
        errorsOnly.rules[ruleName] = 1;
      } else {
        errorsOnly.rules[ruleName] = 'warn';
      }
    }
  });

  return errorsOnly;
}

module.exports = onlyErrorOnRules( [
  'array-bracket-newline',
  'array-bracket-spacing',
  'array-callback-return',
  'array-element-newline',
  'arrow-body-style',
  'arrow-parens',
  'arrow-spacing',
  'block-scoped-var',
  'block-spacing',
  'brace-style',
  'camelcase',
  'class-methods-use-this',
  'comma-dangle',
  'comma-spacing',
  'comma-style',
  'computed-property-spacing',
  'consistent-return',
  'constructor-super',
  'curly',
  'default-case',
  'dot-location',
  'dot-notation',
  'eol-last',
  'eqeqeq',
  'for-direction',
  'func-call-spacing',
  'function-paren-newline',
  'generate-star-spacing',
  'generator-star-spacing',
  'getter-return',
  'global-require',
  'guard-for-in',
  'implicit-arrow-linebreak',
  'import/export',
  'import/extensions',
  'import/first',
  'import/named',
  'import/newline-after-import',
  'import/no-absolute-path',
  'import/no-amd',
  'import/no-cycle',
  'import/no-duplicates',
  'import/no-dynamic-require',
  'import/no-extraneous-dependencies',
  'import/no-mutable-exports',
  'import/no-named-as-default',
  'import/no-named-as-default-member',
  'import/no-named-default',
  'import/no-self-import',
  'import/no-unresolved',
  'import/no-useless-path-segments',
  'import/no-webpack-loader-syntax',
  'import/order',
  'import/prefer-default-export',
  'indent',
  'key-spacing',
  'keyword-spacing',
  'line-comment-position',
  'linebreak-style',
  'lines-around-directive',
  'lines-between-class-members',
  'max-len',
  'multiline-ternary',
  'new-cap',
  'new-parens',
  'newlin-after-var',
  'newline-per-chained-call',
  'no-alert',
  'no-array-constructor',
  'no-await-in-loop',
  'no-bitwise',
  'no-buffer-constructor',
  'no-caller',
  'no-case-declarations',
  'no-class-assign',
  'no-compare-neg-zero',
  'no-cond-assign',
  'no-confusing-arrow',
  'no-console',
  'no-const-assign',
  'no-continue',
  'no-control-regex',
  'no-delete-var',
  'no-div-regex',
  'no-dupe-args',
  'no-dupe-class-members',
  'no-dupe-keys',
  'no-duplicate-case',
  'no-else-return',
  'no-empty',
  'no-empty-function',
  'no-empty-pattern',
  'no-emtpy-character-class',
  'no-eq-null',
  'no-eval',
  'no-ex-assign',
  'no-extend-native',
  'no-extra-bind',
  'no-extra-boolean-cast',
  'no-extra-label',
  'no-extra-semi',
  'no-fallthrough',
  'no-floating-decimal',
  'no-func-assign',
  'no-global-assign',
  'no-implicit-globals',
  'no-implied-eval',
  'no-inline-comments',
  'no-inner-declarations',
  'no-invalid-regexp',
  'no-invalid-this',
  'no-irregular-whitespace',
  'no-iterator',
  'no-label-var',
  'no-labels',
  'no-lone-blocks',
  'no-lonely-if',
  'no-loop-func',
  'no-mixed-operators',
  'no-mixed-spaces-and-tabs',
  'no-multi-assign',
  'no-multi-spaces',
  'no-multi-str',
  'no-multiple-empty-lines',
  'no-nested-ternary',
  'no-new',
  'no-new-func',
  'no-new-object',
  'no-new-require',
  'no-new-symbol',
  'no-new-wrappers',
  'no-obj-calls',
  'no-octal',
  'no-octal-escape',
  'no-param-reassign',
  'no-path-concat',
  'no-plusplus',
  'no-proto',
  'no-prototype-builtins',
  'no-redeclare',
  'no-regex-spaces',
  'no-restricted-globals',
  'no-restricted-properties',
  'no-restricted-syntax',
  'no-return-assign',
  'no-return-await',
  'no-script-url',
  'no-self-assign',
  'no-self-compare',
  'no-sequences',
  'no-shadow',
  'no-shadow-restricted-names',
  'no-spaced-func',
  'no-sparse-arrays',
  'no-tabs',
  'no-template-curly-in-string',
  'no-this-before-super',
  'no-throw-literal',
  'no-trailing-spaces',
  'no-undef',
  'no-undef-init',
  'no-underscore-dangle',
  'no-unexpected-multiline',
  'no-unneeded-ternary',
  'no-unreachable',
  'no-unsafe-negation',
  'no-unused-expressions',
  'no-unused-labels',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-computed-key',
  'no-useless-concat',
  'no-useless-constructor',
  'no-useless-escape',
  'no-useless-rename',
  'no-useless-return',
  'no-var',
  'no-void',
  'no-whitespace-before-property',
  'no-with',
  'nonblock-statement-body-position',
  'object-curly-newline',
  'object-curly-spacing',
  'object-property-newline',
  'object-shorthand',
  'one-var',
  'one-var-declaration-per-line',
  'operator-assignment',
  'operator-linebreak',
  'padded-blocks',
  'padding-line-between-statements',
  'prefer-arrow-callback',
  'prefer-const',
  'prefer-destructuring',
  'prefer-numeric-literals',
  'prefer-promise-reject-errors',
  'prefer-rest-params',
  'prefer-spread',
  'prefer-template',
  'quote-props',
  'quotes',
  'radix',
  'require-yield',
  'rest-spread-spacing',
  'semi',
  'semi-spacing',
  'semi-style',
  'space-before-blocks',
  'space-before-function-paren',
  'space-in-parens',
  'space-infix-ops',
  'space-unary-ops',
  'spaced-comment',
  'switch-colon-spacing',
  'symbol-description',
  'template-curly-spacing',
  'template-tag-spacing',
  'unicode-bom',
  'use-isnan',
  'valid-typeof',
  'vars-on-top',
  'wrap-iife',
  'wrap-regex',
  'yield-star-spacing',
  'yoda'
], baseConfig );