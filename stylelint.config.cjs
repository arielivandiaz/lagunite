module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['src/lagunite.css', 'dist/**', 'web/**', 'lagunite-web/**'],
  rules: {
    'declaration-block-single-line-max-declarations': null,
    'no-descending-specificity': null,
    'number-max-precision': null,
    'selector-class-pattern': null,
    'comment-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'media-feature-range-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'property-no-vendor-prefix': [true, { ignoreProperties: ['backdrop-filter'] }]
  }
};
