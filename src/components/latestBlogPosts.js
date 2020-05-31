import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import latestPostsStyles from "./latest.module.scss"
import Img from "gatsby-image"

const LatestBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPosts {
      allContentfulBlogPost(
        sort: { order: DESC, fields: createdAt }
        limit: 3
      ) {
        edges {
          node {
            title
            description
            fields {
              slug
            }
            header {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
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
    <section className={latestPostsStyles.postsWrapper}>
      <div className={latestPostsStyles.postsText}>
        <h3>Latest Blog Posts</h3>
      </div>
      {data.allContentfulBlogPost.edges.length > 0 && (
        <div className={latestPostsStyles.latestPost}>
          <div className={latestPostsStyles.recentPostWrapper}>
            <Link
              to={`/blog/${data.allContentfulBlogPost.edges[0].node.fields.slug}`}
            >
              <Img
                fluid={
                  data.allContentfulBlogPost.edges[0].node.header.localFile
                    .childImageSharp.fluid
                }
              ></Img>
            </Link>
          </div>
        </div>
      )}
      {data.allContentfulBlogPost.edges.length > 1 && (
        <div className={latestPostsStyles.previousPost}>
          <div className={latestPostsStyles.recentPostWrapper}>
            <Link
              to={`/blog/${data.allContentfulBlogPost.edges[1].node.fields.slug}`}
            >
              <Img
                fluid={
                  data.allContentfulBlogPost.edges[1].node.header.localFile
                    .childImageSharp.fluid
                }
              ></Img>
            </Link>
          </div>
        </div>
      )}
      {data.allContentfulBlogPost.edges.length > 2 && (
        <div className={latestPostsStyles.earliestPost}>
          <div className={latestPostsStyles.recentPostWrapper}>
            <Link
              to={`/blog/${data.allContentfulBlogPost.edges[2].node.fields.slug}`}
            >
              <Img
                fluid={
                  data.allContentfulBlogPost.edges[2].node.header.localFile
                    .childImageSharp.fluid
                }
              ></Img>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default LatestBlogPosts
