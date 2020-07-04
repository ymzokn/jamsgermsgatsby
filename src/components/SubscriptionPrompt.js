import React, { useState, useContext, useEffect } from "react"
import { Context as SubscriptionContext } from "../context/subscriptionContext"
import promptStyles from "../components/prompt.module.scss"
import { IoMdClose } from "react-icons/io"
import Button from "./button"

const SubscriptionPrompt = () => {
  const {
    state: { promptHidden, mcResponse },
    hidePrompt,
    subscribe,
    checkPromptStatus,
    clearMCResponse,
  } = useContext(SubscriptionContext)
  const [email, setEmail] = useState("")

  useEffect(() => {
    checkPromptStatus()
  }, [])

  return (
    <>
      {mcResponse ? (
        <div className={promptStyles.actionResult} onClick={clearMCResponse}>
          <div className={promptStyles.resultText}>
            <p>{mcResponse}</p>
            {/* <Button
              variant="secondary"
              text="Return"
              onClick={clearMCResponse}
            /> */}
          </div>
        </div>
      ) : null}
      {promptHidden ? null : (
        <div className={promptStyles.promptWrapper}>
          <div className={promptStyles.promptHeader}>
            <p className={promptStyles.promptText}>
              Subscribe to receive news about me!
            </p>
            <IoMdClose
              className={promptStyles.promptClose}
              onClick={hidePrompt}
            />
          </div>
          <div className={promptStyles.promptForm}>
            <input
              className={promptStyles.emailInput}
              type="text"
              value={email}
              placeholder="Enter your E-mail here"
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              variant="primary"
              text="Subscribe"
              onClick={() => subscribe(email)}
            ></Button>
          </div>
        </div>
      )}
    </>
  )
}

export default SubscriptionPrompt
