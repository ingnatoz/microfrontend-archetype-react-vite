import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const PORT = 8081;

// Public URL of mfe-appshell. In another environment it is set at build time, for example
// HOST_URL=https://app.example.com npm run build (a build arg in Docker).
const hostUrl = process.env.HOST_URL || 'http://localhost:8080';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      // What this microfrontend publishes for the App Shell.
      exposes: {
        './RemoteApp': './src/RemoteApp.tsx',
      },
      // The remote also consumes the host: that is where it gets the shared state.
      remotes: {
        host: `${hostUrl}/assets/remoteEntry.js`,
      },
      // Must match the host to use a single React instance.
      shared: ['react', 'react-dom'],
    }),
  ],
  css: {
    modules: {
      // Per-project prefix: classes do not clash with the App Shell or other remotes.
      generateScopedName: 'mfe-remote_[local]_[hash:base64:5]',
    },
  },
  server: { port: PORT, strictPort: true },
  preview: { port: PORT, strictPort: true },
  build: {
    // Module Federation uses top-level await.
    target: 'esnext',
    modulePreload: false,
    // ./RemoteApp injects only its own CSS into the host. With `false`, standalone.css
    // (body styles) would travel too and override the host's.
    cssCodeSplit: true,
  },
});
