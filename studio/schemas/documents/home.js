export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'pageTitle',
      type: 'trlString',
      title: 'Título da página',
    },
    {
      name: 'heroText',
      type: 'hero',
      title: 'Cabeçalho',
    },
    {
      name: 'aboutText',
      type: 'trlTextContent',
      title: 'Texto sobre a Coccamp',
      validation: (Rule) => Rule.error('O texto é obrigatório.').required(),
    },
    {
      name: 'aboutCTA',
      type: 'trlString',
      title: `Texto do Link para página Sobre - Call to Action`,
    },
    {
      name: 'productsWatermark',
      type: 'trlString',
      title: `Marca d'água na seção sobre os produtos`,
    },
    {
      name: 'productsTitle',
      type: 'trlString',
      title: 'Título da seção sobre os produtos',
      validation: (Rule) => Rule.error('O título é obrigatório.').required(),
    },
    {
      name: 'productsText',
      type: 'trlTextContent',
      title: 'Texto sobre os produto',
      validation: (Rule) => [Rule.error('O texto é obrigatório.').required()],
    },
    {
      name: 'productsCTA',
      type: 'trlString',
      title: `Texto do Link para página Cafés - Call to Action`,
    },
  ],
};
