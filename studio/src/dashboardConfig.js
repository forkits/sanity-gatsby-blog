export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e6af914121684770901cfea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vqncc157',
                  apiId: 'fdcb59e3-03f2-4072-bcb3-5d1dfc089fc8'
                },
                {
                  buildHookId: '5e6af914e516126d7c91487b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4yg5it43',
                  apiId: '6c422a5d-df96-4896-b9bc-70dbab929e34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/forkits/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4yg5it43.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
