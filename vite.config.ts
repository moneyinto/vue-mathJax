import { defineConfig, Plugin, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig(({ mode, command }) => {
    // 开发服务器端口
    const port: number = parseInt(process.env.APP_PORT || "8000");

    // 插件
    const plugins: (Plugin | Plugin[])[] = [
        vue(),
        eslintPlugin({
            include: [
                "src/**/*.ts",
                "src/**/**/*.ts",
                "src/**/**/**/*.ts",
                "src/**/**/**/**/*.ts",
                "src/*.d.ts",
                "src/**/*.d.ts",
                "src/**/*.tsx",
                "src/*.vue",
                "src/**/*.vue",
                "src/**/**/*.vue",
                "src/**/**/**/*.vue",
                "src/**/**/**/**/*.vue"
            ]
        })
    ];

    const env = loadEnv(mode, process.cwd());

    return {
        base: "/",
        // define: {
        //     global: {},
        //     process: process
        // },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src")
            }
        },
        plugins,
        server: {
            host: true,
            port
        }
    };
});
