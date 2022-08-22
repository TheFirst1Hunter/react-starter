import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig({
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
    ],
    build: {
        outDir: 'build',
    },
    resolve: {
        alias: [
            {
                find: '@components/*',
                replacement: path.resolve(__dirname, './src/components/*'),
            },
            {
                find: '@components',
                replacement: path.resolve(__dirname, './src/components'),
            },
            {
                find: '@utils',
                replacement: path.resolve(__dirname, './src/utils'),
            },
            {
                find: '@types',
                replacement: path.resolve(__dirname, './src/types'),
            },
            // C{
            //  C   find: '@pages',
            //   C  replacement: path.resolve(__dirname, './src/pages'),
            // },
            {
                find: '@atoms',
                replacement: path.resolve(__dirname, './src/atoms'),
            },
            {
                find: '@API',
                replacement: path.resolve(__dirname, './src/API'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, './src/assets'),
            },
            {
                find: '@context',
                replacement: path.resolve(__dirname, './src/context'),
            },
            // {
            // C    find: '@forms',
            //  C   replacement: path.resolve(__dirname, './src/forms'),
            // },
            // C{
            //  C   find: '@layout',
            //   C  replacement: path.resolve(__dirname, './src/layout'),
            // },
            {
                find: '@lib',
                replacement: path.resolve(__dirname, './src/lib'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, './src/hooks'),
            },
        ],
    },
});
