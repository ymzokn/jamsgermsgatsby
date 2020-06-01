import React from "react"
import Header from "./../components/header"
import Footer from "./../components/footer"

import layoutStyles from "../components/layout.module.scss"

const Page = props => {
  return (
    <div className={layoutStyles.pageLayout}>
      {typeof window !== "undefined" && <Header />}
      <div className={layoutStyles.content}>{props.children}</div>
      {/* <Footer className={layoutStyles.footer} /> */}
    </div>
  )
}

export default Page
