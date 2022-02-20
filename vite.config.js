import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

import nunjucks from "vite-plugin-nunjucks";

import postcssPresetEnv from "postcss-preset-env";

import projects from "./src/js/nunjucks/projects.js";

export default defineConfig({
    plugins: [
        legacy({
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        nunjucks({
            variables: {
                "index.html": {
                    projects,
                },
            },
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
