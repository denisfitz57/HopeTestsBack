import React from "react"

export default function Test(props) {
  return (
    <p>
      <a href={props.thelink} target="_blank">
        {props.thename}
      </a>
    </p>
  )
}
