
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  i18n: {
    locales: ['en', 'pt', 'de', 'es', 'fr', 'nl'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
