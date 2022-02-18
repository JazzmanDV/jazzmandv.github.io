import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    plugins: [
        legacy({
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
    ],
    base: "./",
    build: {
        outDir: "./build",
    },
    css: {
        postcss: {
            plugins: [postcssPresetEnv()],
        },
    },
});
