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
        className={latestBlogPostStyles.latestLink}
        to={`/blog/${data.allContentfulBlogPost.edges[0].node.fields.slug}`}
      >
        <div
          className={latestBlogPostStyles.clipText}
          style={{
            backgroundImage:
              "url('http://images.ctfassets.net/4wmk22qd16cj/25y5HJoqvN7guzOyoAfKu8/d07cc361cbb307fa7113f28d6461bf18/Flamentous_Cyanobacteria_and_Algae-min.jpg')",
          }}
        >
          LATEST BLOG POST
        </div>
        {/* <img
          className={latestBlogPostStyles.latestImg}
          src={
            "http://images.ctfassets.net/4wmk22qd16cj/25y5HJoqvN7guzOyoAfKu8/d07cc361cbb307fa7113f28d6461bf18/Flamentous_Cyanobacteria_and_Algae-min.jpg"
          }
        ></img> */}

        {/* <Img
          style={{ height: "100%" }}
          fluid={
            data.allContentfulBlogPost.edges[0].node.header.localFile
              .childImageSharp.fluid
          }
        ></Img> */}
        {/* <div className={latestBlogPostStyles.latestTitle}></div> */}
      </Link>
    </section>
  )
}

export default LatestBlogPost
