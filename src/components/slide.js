import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Slide = () => {
    const [currentImg, setCurrentImg] = useState(0);

    setInterval(() => {
        setCurrentImg((currentImg + 1) % 4)
    }, 7000)

    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {relativeDirectory: {eq: "homepage-slides"}}) {
          edges {
            node {
              childImageSharp{fixed(width: 400, height: 400, quality: 100) {
                    ...GatsbyImageSharpFixed
              }}
            }
          }
        }
      }
  `)

    return (<Img fixed={data.allFile.edges[currentImg].node.childImageSharp.fixed}></Img >)

}

export default Slide;