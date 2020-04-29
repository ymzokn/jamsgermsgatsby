import React from 'react';
import { graphql } from "gatsby"
import Page from './../layouts/page.layout';
import Head from './../components/head';

export const query = graphql`
query($slug:String!)  {
    contentfulBlogPost(fields: {slug: {eq: $slug}}) {
      title
      body {
        json
      }
      createdAt
    }
  }`

const Blog = (props) => {
    return (<Page><Head title={props.data.contentfulBlogPost.title}></Head><div style={{ padding: "0 5rem" }}><p>{new Date(props.data.contentfulBlogPost.createdAt).toLocaleString()}</p><p>{props.data.contentfulBlogPost.title}</p></div></Page>);
}

export default Blog;