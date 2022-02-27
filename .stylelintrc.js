module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx'],
      customSyntax: 'postcss-jsx',
    },
  ],
  rules: {},
}
