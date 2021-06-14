import supportedLanguages from './supportedLanguages';

export default {
  name: 'trlText',
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
    type: 'text',
    rows: 2,
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
