import React from "react"
import Layout from "../components/layout"
import Test from "./test"

export default function Tests(props) {
  return (
    <Layout>
      <Test
        thelink={
          "https://3zt5mymsjf.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Volume Adjustment, Headphone Check and Mic Check"}
      />{" "}
      <Test
        thelink={
          "https://au4pk88wid.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Nonword reading"}
      />{" "}
    </Layout>
  )
}
