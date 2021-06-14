export default {
  name: "mainImage",
  type: "image",
  title: "Imagem do Produto",
  options: {
    hotspot: true,
  },
  fields: [
    // {
    //   name: 'caption',
    //   type: 'string',
    //   title: 'Caption',
    //   options: {
    //     isHighlighted: true
    //   }
    // },
    {
      name: "alt",
      type: "string",
      title: "Texto alternativo",
      description:
        "Uma descrição textual da imagem, importante para SEO e acessibilidade. Pode repetir o nome do produto.",
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "alt",
    },
  },
};
