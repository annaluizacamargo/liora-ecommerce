import js from '@eslint/js'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  js.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-anonymous-default-export': 'warn',
    },
  },
]
