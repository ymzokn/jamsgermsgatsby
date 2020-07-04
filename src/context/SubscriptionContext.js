import createDataContext from "./createDataContext"
import addToMailchimp from "gatsby-plugin-mailchimp"

const subscriptionReducer = (state, action) => {
  switch (action.type) {
    case "HIDE_PROMPT":
      return { ...state, promptHidden: true }
    case "SHOW_PROMPT":
      return { ...state, promptHidden: false }
    case "CHECK_PROMPT_STATUS":
      return { ...state, promptHidden: action.payload }
    case "SET_MC_RESPONSE":
      return { ...state, mcResponse: action.payload }
    case "CLEAR_MC_RESPONSE":
      return { ...state, mcResponse: null }
    default:
      return state
  }
}

const checkPromptStatus = dispatch => {
  return () => {
    const promptStatus = localStorage.getItem("promptHidden") ?? false
    dispatch({ type: "CHECK_PROMPT_STATUS", payload: promptStatus })
  }
}

const hidePrompt = dispatch => {
  return () => {
    localStorage.setItem("promptHidden", true)
    dispatch({ type: "HIDE_PROMPT" })
  }
}

const showPrompt = dispatch => {
  return () => {
    localStorage.setItem("promptHidden", false)
    dispatch({ type: "SHOW_PROMPT" })
  }
}

const subscribe = dispatch => {
  return async email => {
    const response = await addToMailchimp(email)
    if (response.result === "success") {
      dispatch({
        type: "SET_MC_RESPONSE",
        payload: "Thank you for subscribing!",
      })
      localStorage.setItem("promptHidden", true)
      dispatch({ type: "HIDE_PROMPT" })
    } else {
      dispatch({
        type: "SET_MC_RESPONSE",
        payload: "Error subscribing, please check your e-mail",
      })
    }
  }
}

const clearMCResponse = dispatch => {
  return () => {
    dispatch({ type: "CLEAR_MC_RESPONSE" })
  }
}

export const { Context, Provider } = createDataContext(
  subscriptionReducer,
  { hidePrompt, showPrompt, subscribe, checkPromptStatus, clearMCResponse },
  [{}]
)
