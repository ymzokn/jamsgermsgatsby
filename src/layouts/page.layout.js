import React from "react"
import Header from "./../components/header"
import Footer from "./../components/footer"
import { Provider as SubscriptionProvider } from "../context/subscriptionContext"
import layoutStyles from "../components/layout.module.scss"
import SubscriptionPrompt from "../components/subscriptionPrompt"

const Page = props => {
  return (
    <SubscriptionProvider>
      <SubscriptionPrompt />
      <div className={layoutStyles.pageLayout}>
        {typeof window !== "undefined" && <Header />}
        <div className={layoutStyles.content}>{props.children}</div>
        {/* <Footer className={layoutStyles.footer} /> */}
      </div>
    </SubscriptionProvider>
  )
}

export default Page
