/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: [
    'next',
    'next/core-web-vitals'
  ],
  ignorePatterns: ['node_modules/'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

export default nextConfig;
