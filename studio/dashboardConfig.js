export default {
  widgets: [
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
                  buildHookId: '61884a5d43db9fdbd695587f',
                  title: 'Sanity Studio',
                  name: 'the-bus-breakdown-studio-mugthbdp',
                  apiId: '090e93cd-e8f6-4662-aa6b-911f12569682'
                },
                {
                  buildHookId: '61884a5dd47e3d9e17fe956d',
                  title: 'Blog Website',
                  name: 'the-bus-breakdown-web-vc2irqmg',
                  apiId: 'dbf262b3-1369-4db8-b4bd-cb61fce66b1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ninarsson/the-bus-breakdown',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://the-bus-breakdown-web-vc2irqmg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
