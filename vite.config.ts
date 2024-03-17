import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/remix-spa/' : '/',
  plugins: [
    remix({
      basename: process.env.NODE_ENV === 'production' ? '/remix-spa/' : '/',
      ssr: false,
    }),
    tsconfigPaths(),
    svgr(),
  ],
});
