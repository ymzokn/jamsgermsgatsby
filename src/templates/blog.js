import React from "react"
import { Provider as SubscriptionProvider } from "../context/SubscriptionContext"
import { graphql, useStaticQuery } from "gatsby"
import Page from "./../layouts/page.layout"
import Head from "./../components/head"
import SubscriptionPrompt from "../components/SubscriptionPrompt"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GoCalendar } from "react-icons/go"
import { navigate } from "@reach/router"
import postStyles from "./post.module.scss"
import { IoIosArrowBack } from "react-icons/io"
import DonationPrompt from "../components/donationPrompt"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(fields: { slug: { eq: $slug } }) {
      title
      header {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
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
    <SubscriptionProvider>
      <SubscriptionPrompt />
      <div className={postStyles.pageWrapper}>
        <DonationPrompt className={postStyles.donationPromptWrapper} />
      <div className={postStyles.postWrapper}>
        <p className={postStyles.backButton} onClick={() => navigate(-1)}>
          <IoIosArrowBack />
          Back
        </p>
        <div className={postStyles.post}>
          <Head title={props.data.contentfulBlogPost.title}></Head>
          <Img
            className={postStyles.postHeader}
            fluid={
              props.data.contentfulBlogPost.header.localFile.childImageSharp
                .fluid
            }
          />
          <div className={postStyles.postBody}>
            <h1 className={postStyles.postTitle}>
              {props.data.contentfulBlogPost.title}
            </h1>
            <div className={postStyles.postDetails}>
              <GoCalendar
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  color: "gray",
                  marginRight: ".25rem",
                }}
              />
              <p>
                {new Date(
                  props.data.contentfulBlogPost.createdAt
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
          <article className={postStyles.postText}>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
          </article>
        </div>
        </div>
      </div>
    </SubscriptionProvider>
    </Page>
  )
}

export default Blog
