import viteConfig from './vite.config.ts'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(viteConfig, defineConfig({
 test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ['./src/tests/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}']
  }
}));