export default {
  name: 'productsPage',
  type: 'document',
  title: 'Nossos cafés',
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
      name: 'textCta',
      type: 'trlString',
      title: 'Chamada para ação antes dos links',
    },
    {
      name: 'textPartner',
      type: 'trlString',
      title: 'Texto do botão para ser parceiro',
    },
    {
      name: 'textClient',
      type: 'trlString',
      title: 'Texto do botão para comprar café',
    },
  ],
};
