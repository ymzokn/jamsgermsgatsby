import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'

const Slide = () => {
  // const [currentImg, setCurrentImg] = useState(0);

  // setInterval(() => {
  //   setCurrentImg((currentImg + 1) % 4)
  // }, 7000)

  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //       allFile(filter: {relativeDirectory: {eq: "homepage-slides"}}) {
  //         edges {
  //           node {
  //             childImageSharp{fixed(width: 1920, height: 1080) {
  //                   ...GatsbyImageSharpFixed
  //             }}
  //           }
  //         }
  //       }
  //     }
  // `)

  return <BackgroundSlider
    query={useStaticQuery(graphql`
    query {
      backgrounds: allFile(filter: {relativeDirectory: {eq: "homepage-slides"}}) {
        nodes {
          relativePath
          childImageSharp {
            fluid (maxWidth: 4000, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)}
  />
  // return (<Img fixed={data.allFile.edges[currentImg].node.childImageSharp.fixed}></Img >)

}

export default Slide;