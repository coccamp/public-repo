export default {
  type: 'object',
  title: 'Cabeçalho',
  name: 'hero',
  fields: [
    {
      name: 'title',
      type: 'trlString',
      title: 'Título do Cabeçalho',
      validation: (Rule) => Rule.error('O título é obrigatório.').required(),
    },
    {
      name: 'subtitle',
      type: 'trlText',
      title: 'Subtítulo do Cabeçalho',
      validation: (Rule) => Rule.error('O subtítulo é obrigatório.').required(),
    },
  ],
};
