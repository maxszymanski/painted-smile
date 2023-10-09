module.exports = {
    // ...
    extends: [
        // ...
        'plugin:astro/recommended',
    ],
    // ...
    overrides: [
        {
            // Define the configuration for `.astro` file.
            files: ['*.astro'],
            // Allows Astro components to be parsed.
            parser: 'astro-eslint-parser',
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
        // ...
    ],
}

// dodać do setting vsc

// {
//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     "astro", // Enable .astro
//     "typescript", // Enable .ts
//     "typescriptreact" // Enable .tsx
//   ]
// }

// prettier

// {
//   "prettier.documentSelectors": ["**/*.astro"],
//   "[astro]": {
//     "editor.defaultFormatter": "esbenp.prettier-vscode"
//   }
// }
