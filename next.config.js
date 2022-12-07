module.exports = {
  reactStrictMode: true,
  trailingSlash: true,

  env: {
    BASE_URL: process.env.BASE_URL,
    STRAPI_GRAPHQL_BASE_URL: process.env.STRAPI_GRAPHQL_BASE_URL,
    STRAPI_RESTAPI_BASE_URL: process.env.STRAPI_RESTAPI_BASE_URL,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en-US', 'en_GB'],
    defaultLocale: 'en-US',
  },

  images: {
    domains: [
      'coinbureau.s3.amazonaws.com',
      'coinbureau.s3.us-east-2.amazonaws.com',
      's3.coinbureau.dev',
    ],
  },
};
