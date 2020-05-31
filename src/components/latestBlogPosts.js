import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import latestPostsStyles from "./latest.module.scss"
import Img from "gatsby-image"
import heroStyles from "./hero.module.scss"

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
        <h1 className={heroStyles.heroTitle}>Latest Blog Posts</h1>
      </div>
      {data.allContentfulBlogPost.edges.map(post => {
        return (
          <div className={latestPostsStyles.post}>
            <div className={latestPostsStyles.recentPostWrapper}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <Img
                  style={{ height: "100%" }}
                  fluid={post.node.header.localFile.childImageSharp.fluid}
                ></Img>
                <div className={latestPostsStyles.postText}>
                  <p
                    className={latestPostsStyles.postTitle}
                  >{`${post.node.title}`}</p>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default LatestBlogPosts
