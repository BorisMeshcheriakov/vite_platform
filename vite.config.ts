import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    proxy: {
      '/api': 'https://api-relife.nicecode.biz/',
      '/media': 'https://api-relife.nicecode.biz/'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/resources/branding/colors.scss";
          @import './src/resources/mixins/flex.scss';
          @import './src/resources/mixins/elements.scss';
        `
      }
    }
  }
})
