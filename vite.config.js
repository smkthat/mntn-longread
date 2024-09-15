import {defineConfig} from 'vite';

export default defineConfig({
    base: '/mntn-longread/',
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
});