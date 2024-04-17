import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import { URL } from 'node:url'; 

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = new URL('', import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.node }},
  ...compat.extends("airbnb-base"),
];