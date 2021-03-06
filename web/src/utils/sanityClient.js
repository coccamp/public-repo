require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
const sanityClient = require('@sanity/client');

const { sanity } = require('../client-config');

module.exports = sanityClient({
  ...sanity,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});
