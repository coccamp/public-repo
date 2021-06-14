export default {
  name: 'contact',
  type: 'document',
  title: 'Contato',
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
      name: 'contactText',
      type: 'trlTextContent',
      title: 'Texto da página de contato',
    },
    {
      name: 'formCta',
      type: 'trlString',
      title: 'Chamada para ação em cima do formulário',
    },
  ],
};
