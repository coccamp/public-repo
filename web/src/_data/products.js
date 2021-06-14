const blocksToHtml = require('@sanity/block-content-to-html');
const groq = require('groq');
const client = require('../utils/sanityClient');

const { removeNbsp } = require('../utils/functions');

function generateHtml(data) {
  return {
    ...data,
    description: {
      en: blocksToHtml({
        blocks: data.description.en || [],
        serializers: serializer,
      }),
      pt: blocksToHtml({
        blocks: data.description.pt,
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
  *[_type == 'products'] {
    name_pt,
    name_en,
    image,
    description,
    'categoryId': category->_id
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  data.map((item) => {
    return generateHtml(item);
  });

  return data;
};
