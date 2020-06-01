import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import latestBlogPostStyles from "./latest.module.scss"

// import latestPostStyles from "./latest.module.scss"

const LatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPost {
      allContentfulBlogPost(
        sort: { order: DESC, fields: createdAt }
        limit: 1
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
    <section className={latestBlogPostStyles.latestWrapper}>
      <Link
        to={`/blog/${data.allContentfulBlogPost.edges[0].node.fields.slug}`}
      >
        <Img
          style={{ height: "100%" }}
          fluid={
            data.allContentfulBlogPost.edges[0].node.header.localFile
              .childImageSharp.fluid
          }
        ></Img>
        <div className={latestBlogPostStyles.latestTitle}></div>
        {/* <div>
          <p>{`${data.allContentfulBlogPost.edges[0].node.title}`}</p>
        </div> */}
      </Link>
    </section>
  )
}

export default LatestBlogPost
