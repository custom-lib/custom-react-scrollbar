import reactRefresh from '@vitejs/plugin-react-refresh';
import ts2 from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        {
            ...ts2({
                check: true,
                tsconfig: './tsconfig.json',
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: false,
                        declaration: true,
                        declarationMap: false,
                    },
                },
            }),
            enforce: 'pre',
        },
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
