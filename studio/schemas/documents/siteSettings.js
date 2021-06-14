export default {
  name: "siteSettings",
  type: "document",
  title: "Informações do Site",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
      validation: (Rule) => [Rule.error("O título é obrigatório.").required()],
    },
    {
      name: "description",
      type: "text",
      title: "Descrição",
      description:
        "Descrição do site para ser exibida em mecanismos de busca e redes sociais",
      validation: (Rule) => [
        Rule.error("A descrição é obrigatória.").required(),
      ],
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Palavras-chave que descrevem o conteúdo do site",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "phone",
      type: "string",
      title: "Telefone para o contato",
    },
    {
      name: "phone2",
      type: "string",
      title: "Segundo telefone (opcional)",
    },
    {
      name: "email",
      type: "string",
      title: "Email para o contato",
    },
    {
      name: "address",
      type: "string",
      title: "Endereço",
    },
    {
      name: "linkedin",
      type: "string",
      title: "Link do Linkedin",
    },
  ],
};
