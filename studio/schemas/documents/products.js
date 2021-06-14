export default {
  name: 'products',
  type: 'document',
  title: 'Produtos',
  fields: [
    {
      name: 'name_pt',
      type: 'string',
      title: 'Nome (português)',
      validation: (Rule) =>
        Rule.error('O nome do produto é obrigatório.').required(),
    },
    {
      name: 'name_en',
      type: 'string',
      title: 'Name (english)',
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'trlSlug',
    //   description: 'Um identificador para constar no link do produto',
    //   options: {
    //     source: 'name',
    //     slugify: (val) =>
    //       val
    //         .toLowerCase()
    //         .normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, '')
    //         .replace(/\s+/g, '-'),
    //   },
    // },
    {
      name: 'description',
      type: 'trlTextContent',
      title: 'Descrição do produto',
      validation: (Rule) => Rule.error('A descrição é obrigatória.').required(),
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (Rule) =>
        Rule.error('A imagem do produto é obrigatória.').required(),
    },
  ],
};
