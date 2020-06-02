import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Page from "../layouts/page.layout"
import Head from "./../components/head"
import Img from "gatsby-image"
import blogListStyles from "./blog.module.scss"
import { GoCalendar } from "react-icons/go"

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
                  fixed(width: 200, height: 150) {
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
      <section className={blogListStyles.postListWrapper}>
        <div className={blogListStyles.postList}>
          {data.allContentfulBlogPost.edges.map(post => {
            return (
              <article className={blogListStyles.blogPost}>
                <Link
                  className={blogListStyles.blogPostWrapper}
                  to={`blog/${post.node.fields.slug}`}
                >
                  <div className={blogListStyles.postImg}>
                    <Img
                      fixed={post.node.header.localFile.childImageSharp.fixed}
                    ></Img>
                  </div>
                  <div className={blogListStyles.postText}>
                    <div>
                      <h3>{post.node.title}</h3>
                      <p className={blogListStyles.postDescription}>
                        {post.node.description}
                      </p>
                    </div>
                    <div className={blogListStyles.postDateWrapper}>
                      <GoCalendar
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          color: "gray",
                          marginRight: ".25rem",
                        }}
                      />
                      <p>
                        {new Date(post.node.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </Page>
  )
}

export default Blog
