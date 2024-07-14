import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {...globals.browser, it: "readonly",
    describe: "readonly",} }},
  pluginJs.configs.recommended,
];