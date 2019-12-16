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
                  buildHookId: '5df76b65f85a8f0a7c5d652f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uaqw5gb3',
                  apiId: '434e9c6d-fde2-4468-8869-20c6922078e5'
                },
                {
                  buildHookId: '5df76b66b041c72e72f32cd8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2kidpuyz',
                  apiId: '55c05cca-a6cd-4ed5-a074-c98b82270925'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scarabator/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2kidpuyz.netlify.com', category: 'apps'}
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
