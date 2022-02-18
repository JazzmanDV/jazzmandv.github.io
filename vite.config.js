import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

import nunjucks from "vite-plugin-nunjucks";

import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    plugins: [
        legacy({
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        nunjucks(),
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
