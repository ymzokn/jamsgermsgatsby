import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MainLogo = () => {
  const data = useStaticQuery(graphql`
    query LogoImageQuery {
      file(relativePath: { eq: "jg-logo-clipped.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default MainLogo
