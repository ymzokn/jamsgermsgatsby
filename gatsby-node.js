const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "ContentfulBlogPost") {
        const regexp = /\s/g;
        const slug = node.title.replace(regexp, "-").toLowerCase();

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
    query getBlogPostSlug{
        allContentfulBlogPost {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }`
    )

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

}