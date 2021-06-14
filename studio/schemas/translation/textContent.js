import supportedLanguages from './supportedLanguages';

export default {
  name: 'trlTextContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Traduções',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'textContent',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
