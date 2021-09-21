import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      //   使用terser压缩代码
      plugins: [terser()],
    },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
  ],
  plugins: [commonjs(), json(), resolve()],
  // 外部引入vue
  external: ["vue"],
};
