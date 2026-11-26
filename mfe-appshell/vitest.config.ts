import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Federated modules do not exist in tests: they are replaced by stubs.
      'remote/RemoteApp': fileURLToPath(new URL('./tests/__mocks__/RemoteApp.tsx', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
});
