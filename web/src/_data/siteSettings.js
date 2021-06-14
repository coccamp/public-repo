const groq = require('groq');
const client = require('../utils/sanityClient');

const query = groq`
  *[_type == 'siteSettings'] {
    title,
    description,
    keywords,
    phone,
    phone2,
    email,
    address,
    linkedin
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  return data[0];
};
