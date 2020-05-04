import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import Page from "../layouts/page.layout"
import Head from './../components/head';

const Blog = () => {

  const data = useStaticQuery(graphql`
  query BlogPostTitles {
    allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          description
          fields {
            slug
          }
          title
        }
      }
    }
  }
  `)

  return (
    <Page>
      <Head title="Blog"></Head>
      <div style={{ margin: "-5rem 25%" }}>{data.allContentfulBlogPost.edges.map(post => {
        return <div style={{ padding: "2.5rem 1rem", marginBottom: "2.5rem", boxShadow: "0 1px 2px lightgray" }}><Link style={{ textDecoration: "none" }} to={`blog/${post.node.fields.slug}`}><h2 style={{ color: "#3a3a3a" }}>{post.node.title}</h2><p style={{ color: "darkgray" }}>{post.node.description}</p></Link></div>
      })}</div>
    </Page>
  )
}

export default Blog
