import {defineConfig} from 'vite';
import {patchCssModules} from 'vite-css-modules'
import postcssNested from "postcss-nested";

export default defineConfig({
    base: '/mntn-longread/',
    root: 'src',
    plugins: [
        patchCssModules()
    ],
    css: {
        postcss: {
            plugins: [postcssNested()],
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        target: 'esnext'
    },
});