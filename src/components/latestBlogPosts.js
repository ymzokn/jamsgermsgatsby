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
              publicURL
            }
          }
        }
      }
    }
  }
  `);


  return (
    <section className={latestPostsStyles.postsWrapper}>
      <div className={latestPostsStyles.postsText}>
        <h3>Latest Blog Posts</h3>
      </div>
      {data.allContentfulBlogPost.edges.length > 0 && <div className={latestPostsStyles.latestPost}>

        <div className={latestPostsStyles.recentPostWrapper}>
          <div className={latestPostsStyles.recentPostWrapper} style={{ background: `url(${data.allContentfulBlogPost.edges[0].node.header.localFile.publicURL}) no-repeat center center fixed`, backgroundSize: "cover" }}>
          </div>
        </div>
      </div>}
      {data.allContentfulBlogPost.edges.length > 1 && <div className={latestPostsStyles.previousPost}>

        <div className={latestPostsStyles.recentPostWrapper}>
          <div className={latestPostsStyles.recentPostWrapper} style={{ background: `url(${data.allContentfulBlogPost.edges[1].node.header.localFile.publicURL}) no-repeat center center fixed`, backgroundSize: "cover" }}>
          </div>
        </div>
      </div>}
      {data.allContentfulBlogPost.edges.length > 2 && <div className={latestPostsStyles.earliestPost}>

        <div className={latestPostsStyles.recentPostWrapper} style={{ background: `url(${data.allContentfulBlogPost.edges[2].node.header.localFile.publicURL}) no-repeat center center fixed`, backgroundSize: "cover" }}>
          {/* {data.allContentfulBlogPost.edges[2].node.header.localFile && <Img fluid={data.allContentfulBlogPost.edges[2].node.header.localFile.childImageSharp.fluid}>{data.allContentfulBlogPost.edges[2].node.title}</Img>} */}
        </div>
      </div>}
    </section>
  )

  // return (<div style={{ margin: "5rem", display: "flex", justifyContent: "space-evenly" }}>{data.allContentfulBlogPost.edges.map(post => {
  //   return <Link to={`blog/${post.node.fields.slug}`} style={{ padding: "2rem", border: "1px solid firebrick" }}>{post.node.title}</Link>
  // })}</div>);
}

export default LatestBlogPosts;