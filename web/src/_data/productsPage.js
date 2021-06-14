const groq = require('groq');
const client = require('../utils/sanityClient');

const { removeNbsp } = require('../utils/functions');

function generateHtml(data) {
  return {
    ...data,
    heroText: {
      ...data.heroText,
      subtitle: {
        en: removeNbsp(data.heroText.subtitle.en),
        pt: removeNbsp(data.heroText.subtitle.pt),
      },
    },
  };
}

const query = groq`
  *[_type == 'productsPage'] {
    pageTitle,
    heroText,
    textCta,
    textPartner,
    textClient
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  if (data[0]) {
    return generateHtml(data[0]);
  }
  return data;
};
