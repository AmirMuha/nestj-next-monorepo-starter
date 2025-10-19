import { FlatCompat } from "@eslint/eslintrc";
import eslintJs from "@eslint/js";
import onlyWarnPlugin from "eslint-plugin-only-warn";
import globals from "globals";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const project = resolve(process.cwd(), "tsconfig.json");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    ignores: [
      ".*.js",
      "node_modules/",
      "dist/",
    ],
  },
  ...compat.extends("prettier"),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "only-warn": onlyWarnPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        React: "readonly",
        JSX: "readonly",
      },
      parser: tsParser,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
];

export default config;
