export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da6e43d16855bf2d7788223',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5mj2khbw',
                  apiId: '3558b484-57ed-4482-87b6-c08fab982e47'
                },
                {
                  buildHookId: '5da6e43df4ee6003682b7da0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zptraz1v',
                  apiId: 'f705622e-d4bc-4cfd-8d69-65387c750043'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariusgrondahl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zptraz1v.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
