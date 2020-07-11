import React from "react"
import Page from "./../layouts/page.layout"
import Hero from "../components/hero"
import Head from "../components/head"
import "../main.scss"

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


export default () => (
  <div>
    <Page>
      <Head title="Home" />
      <Hero></Hero>
    </Page>
  </div>
)
