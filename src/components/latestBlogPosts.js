import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";


const LatestBlogPosts = () => {

    const data = useStaticQuery(graphql`
    query LatestBlogPosts {
        allContentfulBlogPost(sort: {order: DESC, fields: createdAt}, limit: 5) {
          edges {
            node {
              title
              fields {
                slug
              }
            }
          }
        }
      }`);

    return (<div style={{ margin: "5rem", display: "flex", justifyContent: "space-evenly" }}>{data.allContentfulBlogPost.edges.map(post => {
        return <Link to={`blog/${post.node.fields.slug}`} style={{ padding: "2rem", border: "1px solid firebrick" }}>{post.node.title}</Link>
    })}</div>);
}

export default LatestBlogPosts;