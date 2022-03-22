import path from 'path'; // rollup默认es 直接使用es6引入node模块
import ts from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';

export default {
    input: path.resolve(__dirname, './src/app.ts'), // 入口
    output: [
        // 输出可以多格式，以数组输入
        {
            // es6
            file: './dist/index.js', // 文件名
            format: 'cjs', // 类型有amd umd es cjs iife system,
            sourcemap: true,
        },
    ],
    external: ['lodash', 'core-decorators'], // 不打包引入的lodash，改为全局引入
    plugins: [
        ts({
            tsconfig: path.resolve(__dirname, './tsconfig.json'),
        }),
        commonjs(),
        terser({
            ecma: 5,
        }),
        visualizer(),
    ],
};
