import React from "react"
import Page from "./../layouts/page.layout"
import Hero from "../components/hero"
import Head from "../components/head"
import "../main.scss"

export default () => (
  <div>
    <Page>
      <Head title="Home" />
      <Hero></Hero>
    </Page>
  </div>
)
