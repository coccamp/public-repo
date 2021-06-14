export default {
  name: 'about',
  type: 'document',
  title: 'Sobre nós',
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
      name: 'aboutTextOne',
      type: 'trlTextContent',
      title: 'Texto sobre a Coccamp - primeiro bloco',
    },
    {
      name: 'aboutTextTwo',
      type: 'trlTextContent',
      title: 'Texto sobre a Coccamp - segundo bloco',
    },
    {
      name: 'textPartner',
      type: 'trlString',
      title: 'Texto do botão para ser parceiro',
    },
  ],
};
