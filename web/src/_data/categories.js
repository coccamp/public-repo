const groq = require('groq');
const client = require('../utils/sanityClient');

const { removeNbsp } = require('../utils/functions');

function generateHtml(data) {
  return {
    ...data,
    description: {
      en: removeNbsp(data.description.en),
      pt: removeNbsp(data.description.pt),
    },
  };
}

const query = groq`
  *[_type == 'category'] {
    'id': _id,
    name_pt,
    name_en,
    description,
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  data.map((item) => {
    return generateHtml(item);
  });

  return data;
};
