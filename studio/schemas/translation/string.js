import supportedLanguages from './supportedLanguages';

export default {
  name: 'trlString',
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
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
