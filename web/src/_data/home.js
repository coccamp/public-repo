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
    aboutText: {
      en: blocksToHtml({
        blocks: data.aboutText.en,
        serializers: aboutSerializer,
      }),
      pt: blocksToHtml({
        blocks: data.aboutText.pt,
        serializers: aboutSerializer,
      }),
    },
    productsText: {
      en: blocksToHtml({
        blocks: data.productsText.en,
        serializers: productsSerializer,
      }),
      pt: blocksToHtml({
        blocks: data.productsText.pt,
        serializers: productsSerializer,
      }),
    },
  };
}

const h = blocksToHtml.h;

const aboutSerializer = {
  types: {
    block: (props) =>
      h('p.what__text.body-text', removeNbsp(props.children[0])),
  },
};

const productsSerializer = {
  types: {
    block: (props) =>
      h('p.products__text.body-text', removeNbsp(props.children[0])),
  },
};

const query = groq`
  *[_type == 'home'] {
    pageTitle,
    heroText,
    aboutText,
    aboutCTA,
    productsTitle,
    productsText,
    productsCTA,
    productsWatermark
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  if (data[0]) {
    return generateHtml(data[0]);
  }
  return data;
};
