import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Page from "./../layouts/page.layout"
import Head from "./../components/head"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GoCalendar } from "react-icons/go";
import { navigate } from "@reach/router"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(fields: { slug: { eq: $slug } }) {
      title
      description
      header {
        localFile {
          childImageSharp {
            fixed(width: 1000, height: 300, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
      body {
        json
      }
      createdAt
    }
  }
`

const Blog = props => {
  return (
    <Page>
      <div style={{ marginTop: "-5rem" }}>
        <Head title={props.data.contentfulBlogPost.title}></Head>
        <div style={{ padding: "0 25vw" }}>
          <p style={{ display: "inline-block", color: "teal", textDecoration: "underline", cursor: "pointer", padding: "1rem 0" }} onClick={() => navigate(-1)}>Back</p>
          <Img fixed={props.data.contentfulBlogPost.header.localFile.childImageSharp.fixed} />
          {/* <Link style={{ textDecoration: "none", color: "gray" }} to="/blog">Back</Link> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              justifyContent: "space-between"
            }}
          >
            <h1 style={{ letterSpacing: "1.5px" }}>
              {props.data.contentfulBlogPost.title}
            </h1>
            <h4 style={{ margin: "1rem 0", color: "darkgray" }}>
              {props.data.contentfulBlogPost.description}
            </h4>
            <div style={{ display: "flex", alignItems: "center" }}>
              <GoCalendar
                style={{ width: "1.2rem", height: "1.2rem", color: "gray", marginRight: ".25rem" }}
              />
              <p style={{ fontStyle: "italic", color: "gray" }}>
                {new Date(
                  props.data.contentfulBlogPost.createdAt
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
          <section style={{ marginTop: "2.5rem" }}>{documentToReactComponents(props.data.contentfulBlogPost.body.json)}</section>
        </div>
      </div>
    </Page>
  )
}

export default Blog
