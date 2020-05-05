import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Page from "../layouts/page.layout"
import Head from "./../components/head"
import Img from "gatsby-image"
import blogListStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPostTitles {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            description
            fields {
              slug
            }
            title
            header {
              localFile {
                childImageSharp {
                  fixed(width: 200, height: 200, quality: 100) {
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Page>
      <Head title="Blog"></Head>
      <ul className={blogListStyles.blogList}>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <li>
              <Link to={`blog/${post.node.fields.slug}`}>
                <div className={blogListStyles.blogListImg}>
                  <Img
                    fixed={post.node.header.localFile.childImageSharp.fixed}
                  ></Img>
                </div>
                <div className={blogListStyles.blogListText}>
                  <h2>{post.node.title}</h2>
                  <p style={{ color: "darkgray" }}>{post.node.description}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Page>
  )
}

export default Blog
