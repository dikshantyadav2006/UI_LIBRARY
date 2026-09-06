import nextPlugin from '@next/eslint-plugin-next';
import baseConfig from './base.js';

const nextConfig = [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...(nextPlugin.configs['core-web-vitals']?.rules ?? {}),
    },
  },
];

export default nextConfig;
