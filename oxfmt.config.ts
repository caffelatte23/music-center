import { defineConfig } from '@caffelatte23/oxc-config/fmt';

/**
 * @see https://github.com/oxc-project/oxc-vscode/issues/315
 */
const config = defineConfig({
  ignorePatterns: ['**/src-tauri/**', 'src/routeTree.gen.ts'],
});

export default config;
