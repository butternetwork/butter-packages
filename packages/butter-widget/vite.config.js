import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import commonjs from 'vite-plugin-commonjs';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import dts from 'vite-plugin-dts';
import { visualizer } from "rollup-plugin-visualizer";
import { peerDependencies } from './package.json';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), commonjs(), nodePolyfills(), dts({ tsconfigPath: './tsconfig.app.json' }), visualizer({
            template: "treemap", // or sunburst
            open: false,
            gzipSize: true,
            brotliSize: true,
            filename: "analyse.html", // will be saved in project's root
        }),],
    build: {
        sourcemap: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ButterWidget',
            formats: ['es', "cjs"],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react/jsx-runtime', ...Object.keys(peerDependencies)],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    "react-router": "ReactRouter",
                    "react-remove-scroll": "ReactRemoveScroll",
                },
            },
        },
        outDir: 'dist', // 输出目录
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', "**/*.webp"],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            'process': 'process/browser',
        },
    },
    define: {
        global: 'window',
        "process.env": {}
    },
    optimizeDeps: {
        include: ['rpc-websockets'],
        exclude: ["@coinbase/wallet-sdk"],
    },
});
