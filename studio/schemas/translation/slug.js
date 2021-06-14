import supportedLanguages from './supportedLanguages';

export default {
  name: 'trlSlug',
  type: 'object',
  fieldsets: [
    {
      title: 'Traduções',
      name: 'translations',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'slug',
    fieldset: lang.isDefault ? null : 'translations',
    options: {
      source: `name.${lang.id}`,
      maxLength: 200,
      slugify: (val) =>
        val
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, '')
          .replace(/\s+/g, '-'),
    },
  })),
};
