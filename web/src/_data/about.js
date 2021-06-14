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
    aboutTextOne: {
      en: blocksToHtml({
        blocks: data.aboutTextOne.en,
        serializers: aboutSerializer,
      }),
      pt: blocksToHtml({
        blocks: data.aboutTextOne.pt,
        serializers: aboutSerializer,
      }),
    },
    aboutTextTwo: {
      en: blocksToHtml({
        blocks: data.aboutTextTwo.en,
        serializers: aboutSerializer,
      }),
      pt: blocksToHtml({
        blocks: data.aboutTextTwo.pt,
        serializers: aboutSerializer,
      }),
    },
  };
}

const h = blocksToHtml.h;

const aboutSerializer = {
  types: {
    block: (props) => h('p.body-text', removeNbsp(props.children[0])),
  },
};

const query = groq`
  *[_type == 'about'] {
    pageTitle,
    heroText,
    aboutTextOne,
    aboutTextTwo,
    textPartner
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  if (data[0]) {
    return generateHtml(data[0]);
  }
  return data;
};
