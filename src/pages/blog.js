import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Provider as SubscriptionProvider } from "../context/SubscriptionContext"
import Page from "../layouts/page.layout"
import Head from "./../components/head"
import Img from "gatsby-image"
import blogListStyles from "./blog.module.scss"
import SubscriptionPrompt from "../components/SubscriptionPrompt"
import DonationPrompt from "../components/donationPrompt"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPostTitles {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            title
            createdAt
            header {
              localFile {
                childImageSharp {
                  fixed(width: 300, height: 200) {
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
    <SubscriptionProvider>
      <SubscriptionPrompt />
      <Head title="Blog"></Head>
      <div className={blogListStyles.pageWrapper}>
      <DonationPrompt className={blogListStyles.donationPromptWrapper} />
      <section className={blogListStyles.postListWrapper}>
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
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </section>
      </div>
    </SubscriptionProvider>
    </Page>
  )
}

export default Blog
