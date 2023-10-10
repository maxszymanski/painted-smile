module.exports = {
    // ...
    extends: ['eslint:recommended', 'plugin:astro/recommended'],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs',
        'astro.config.mjs',
        'tailwind.config.cjs',
    ],
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
                'astro/prop-types': 'off',
                'astro-refresh/only-export-components': [
                    'warn',
                    { allowConstantExport: true },
                ],
            },
        },
        // ...
    ],
}
