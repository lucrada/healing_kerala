import React from 'react'
import "../../sass/components/Button.scss"
const Button = (props) => {
  return (
    <div>
      <button className="button">{props.text}</button>
    </div>
  )
}

export default Button
