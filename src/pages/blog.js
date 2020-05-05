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
            createdAt
            header {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid_noBase64
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
      <section className={blogListStyles.postListWrapper}>
        <ul className={blogListStyles.postList}>
          {data.allContentfulBlogPost.edges.map(post => {
            return (
              <li className={blogListStyles.blogPost}>
                <Link className={blogListStyles.blogPostWrapper} to={`blog/${post.node.fields.slug}`}>
                  <div className={blogListStyles.postImg}>
                    <Img
                      fluid={post.node.header.localFile.childImageSharp.fluid}
                    ></Img>
                  </div>
                  <div className={blogListStyles.postText}>
                    <p>{new Date(post.node.createdAt).toLocaleDateString()}</p>
                    <h2>{post.node.title}</h2>
                    <p className={blogListStyles.postDescription}>
                      {post.node.description}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Page>
  )
}

export default Blog
