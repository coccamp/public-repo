const blocksToHtml = require('@sanity/block-content-to-html');
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
    contactText: {
      en: blocksToHtml({
        blocks: data.contactText.en,
        serializers: serializer,
      }),
      pt: blocksToHtml({
        blocks: data.contactText.pt,
        serializers: serializer,
      }),
    },
  };
}

const h = blocksToHtml.h;

const serializer = {
  types: {
    block: (props) => h('p.body-text', removeNbsp(props.children[0])),
  },
};

const query = groq`
  *[_type == 'contact'] {
    pageTitle,
    heroText,
    contactText,
    formCta
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  if (data[0]) {
    return generateHtml(data[0]);
  }
  return data;
};
