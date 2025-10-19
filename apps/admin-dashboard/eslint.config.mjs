import eslintConfig from "@repo/eslint-config/next.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...eslintConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default config;
