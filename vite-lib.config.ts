import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts()
    ],
    build: {
        target: 'esnext',
        lib: {
            entry: 'src/index.tsx',
            fileName: () => 'index.js',
            formats: ['es'],
        },
        rollupOptions: {
            plugins: [visualizer()],
            external: ['react', 'lodash-es', 'clsx'],
        },
    },
});
