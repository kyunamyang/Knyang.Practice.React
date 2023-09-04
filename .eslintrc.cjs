module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'react-refresh', 'react-hooks'],
  rules: {
    quotes: ['error', 'single'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js']
    },
    'import/resolver': {
      typescript: './tsconfig.json'
    }
  }
};
