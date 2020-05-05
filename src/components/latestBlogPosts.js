import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import latestPostsStyles from "./latest.module.scss"
import Img from 'gatsby-image';

const LatestBlogPosts = () => {

  const data = useStaticQuery(graphql`
  query LatestBlogPosts {
    allContentfulBlogPost(sort: {order: DESC, fields: createdAt}, limit: 3) {
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
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@", data.allContentfulBlogPost.edges[0].node);


  return (
    <section className={latestPostsStyles.postsWrapper}>
      <div className={latestPostsStyles.postsText}>
        <h3>Latest Blog Posts</h3>
      </div>
      {data.allContentfulBlogPost.edges.length > 0 && <div className={latestPostsStyles.latestPost}>
        {data.allContentfulBlogPost.edges[0].node.title}
        <div className={latestPostsStyles.recentPostWrapper}>
          {/* <Img fluid={data.allContentfulBlogPost.edges[0].node.header.localFile.childImageSharp.fluid}></Img> */}

        </div>
      </div>}
      {data.allContentfulBlogPost.edges.length > 1 && <div className={latestPostsStyles.previousPost}>
        {data.allContentfulBlogPost.edges[1].node.title}
      </div>}
      {data.allContentfulBlogPost.edges.length > 2 && <div className={latestPostsStyles.earliestPost}>
        {data.allContentfulBlogPost.edges[2].node.title}
      </div>}
    </section>
  )

  // return (<div style={{ margin: "5rem", display: "flex", justifyContent: "space-evenly" }}>{data.allContentfulBlogPost.edges.map(post => {
  //   return <Link to={`blog/${post.node.fields.slug}`} style={{ padding: "2rem", border: "1px solid firebrick" }}>{post.node.title}</Link>
  // })}</div>);
}

export default LatestBlogPosts;