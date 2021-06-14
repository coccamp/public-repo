export default {
  widgets: [
    { name: "structure-menu" },

    { name: "project-users", layout: { height: "auto" } },

    {
      name: "netlify",
      options: {
        description:
          "NOTA: Depois de um clique, aguarde, caso contrário o deploy será executado mais de uma vez.",
        sites: [
          {
            buildHookId: '60afcca86cad1a008f1a1f75',
            title: 'Site',
            name: 'coccamp-web',
            apiId: '873536b6-2156-475b-a232-dbbabd88cd7c'
          }
        ],
      },
    },
  ],
};
