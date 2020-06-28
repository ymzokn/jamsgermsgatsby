import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MainLogo = () => {
  const data = useStaticQuery(graphql`
    query LogoImageQuery {
      file(relativePath: { eq: "jg-logo-clipped.png" }) {
        publicURL
      }
    }
  `)
  {
    /* <Img fixed={data.file.childImageSharp.fixed} /> */
  }
  return <img style={{ height: "100%" }} src={`${data.file.publicURL}`}></img>
}

export default MainLogo
