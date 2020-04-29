import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import Page from "../layouts/page.layout"
import Head from './../components/head';

const Blog = () => {

  const data = useStaticQuery(graphql`
  query BlogPostTitles{
    allContentfulBlogPost {
      edges {
        node {
          description {
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <Page>
      <Head title="Blog"></Head>
      <div>{data.allContentfulBlogPost.edges.map(post => {
        return <div style={{ padding: "0 5rem" }}><Link to={`blog/${post.node.fields.slug}`}>{post.node.description.description}</Link></div>
      })}</div>
    </Page>
  )
}

export default Blog
