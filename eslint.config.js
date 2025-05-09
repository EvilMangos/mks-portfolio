import js from "@eslint/js";
import tsparser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-react";
import globals from "globals";

const sanitizeGlobals = (globalsObj) =>
	Object.fromEntries(
		Object.entries(globalsObj).map(([key, value]) => [key.trim(), value])
	);

export default [
	js.configs.recommended,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	{
		files: ["src/**/*.unit-test.ts"],
		...jestPlugin.configs["flat/recommended"],
		rules: {
			...jestPlugin.configs.flat.recommended.rules,
		},
	},
	prettierPlugin,
	eslintConfigPrettier,
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsparser,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...sanitizeGlobals(globals.browser),
				...sanitizeGlobals(globals.node),
				...sanitizeGlobals(globals.jest),
				React: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
		},
		rules: {
			"array-callback-return": "error",
			"no-await-in-loop": "error",
			"no-constructor-return": "error",
			"no-debugger": "off",
			"no-new-native-nonconstructor": "error",
			"no-self-compare": "error",
			"no-template-curly-in-string": "warn",
			"no-unused-private-class-members": "warn",
			"no-use-before-define": "error",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-empty-function": "off",
			"no-mixed-spaces-and-tabs": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: true,
					caughtErrors: "all",
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
				},
			],
			"sort-imports": [
				"warn",
				{
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
					allowSeparatedGroups: true,
				},
			],
			"react/no-unescaped-entities": "off",
			"react-hooks/exhaustive-deps": "off",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		files: ["server.js", "server-helpers.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: sanitizeGlobals(globals.node),
		},
	},
];
