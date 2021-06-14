export default {
  name: 'category',
  type: 'document',
  title: 'Categoria',
  fields: [
    {
      name: 'name_pt',
      type: 'string',
      title: 'Nome da categoria (português)',
    },
    {
      name: 'name_en',
      type: 'string',
      title: 'Category name (english)',
    },
    {
      name: 'description',
      type: 'trlText',
      title: 'Descrição',
    },
  ],
};
