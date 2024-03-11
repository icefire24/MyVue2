import { defineConfig } from "vite";

//vite配置
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    //入口
    entry: path.resolve(__dirname, 'src/main.js'), 

})