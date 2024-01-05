import module, {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteSingleFile} from "vite-plugin-singlefile";

// https://vitejs.dev/config/


export default defineConfig({
    base : '/landing/',
    plugins: [
        vue(),
        viteSingleFile()
    ],

})

