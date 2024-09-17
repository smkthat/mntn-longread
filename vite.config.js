import {defineConfig} from 'vite';
import {patchCssModules} from 'vite-css-modules';
import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import postcssMixins from "postcss-mixins";
import postcssCustomMedia from 'postcss-custom-media';

export default defineConfig({
    base: '/mntn-longread/',
    root: 'src',
    plugins: [
        patchCssModules()
    ],
    css: {
        postcss: {
            plugins: [
                postcssNested(),
                postcssMixins(),
                postcssCustomMedia(),
                autoprefixer(),
            ],
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        target: 'esnext'
    },
});