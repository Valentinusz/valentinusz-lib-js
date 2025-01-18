import {UserConfig} from "vite";
import dtsPlugin from "vite-plugin-dts";

export default {
    plugins: [
        dtsPlugin({
            tsconfigPath: './tsconfig.build.json',
        })
    ],
    build: {
        lib: {
            entry: "./src/index.ts",
            fileName: "index",
            formats: ["es"]
        }
    }
} satisfies UserConfig;
