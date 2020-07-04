import React from "react"
import Page from "./../layouts/page.layout"
import Hero from "../components/hero"
import Head from "../components/head"
import ContactList from "../components/contactList"
import "../main.scss"

export default () => (
  <div>
    <Page>
      <Head title="Home" />
      <Hero></Hero>
      {/* <LatestBlogPosts></LatestBlogPosts> */}
      <ContactList />
    </Page>
  </div>
)
