import React from "react"
import buttonStyles from "./button.module.scss"

const Button = props => {
  return (
    <button
      className={buttonStyles[props.variant]}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  )
}

export default Button
