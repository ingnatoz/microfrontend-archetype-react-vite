import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const PORT = 8080;

// Public URL of mfe-remote. In another environment it is set at build time, for example
// MFE_REMOTE_URL=https://mfe-remote.example.com npm run build (a build arg in Docker).
const remoteUrl = process.env.MFE_REMOTE_URL || 'http://localhost:8081';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      // What the App Shell shares with the microfrontends.
      exposes: {
        './GlobalContext': './src/context/GlobalContext.ts',
      },
      // Microfrontends that the App Shell downloads at runtime.
      remotes: {
        remote: `${remoteUrl}/assets/remoteEntry.js`,
      },
      // A single React instance for the host and the remotes.
      shared: ['react', 'react-dom'],
    }),
  ],
  css: {
    modules: {
      // Per-project prefix: classes do not clash with the ones the remotes inject.
      generateScopedName: 'mfe-appshell_[local]_[hash:base64:5]',
    },
  },
  server: { port: PORT, strictPort: true },
  preview: { port: PORT, strictPort: true },
  build: {
    // Module Federation uses top-level await.
    target: 'esnext',
    modulePreload: false,
    // Each exposed module injects only its own CSS. With `false`, the plugin would inject
    // all the project CSS into whoever consumes it.
    cssCodeSplit: true,
  },
});
