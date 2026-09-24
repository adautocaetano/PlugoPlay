import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.tsx"],
  format: ["esm"],
  dts: false,
  outDir: "dist",
  noExternal: ["@tiendanube/nube-sdk-jsx"],
});