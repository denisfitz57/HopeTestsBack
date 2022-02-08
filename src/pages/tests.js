import React from "react"
import Layout from "../components/layout"
import Test from "./test"

export default function Tests(props) {
  return (
    <Layout>
      <Test
        thelink={
          "https://uxidcl8qch.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Headphone adjustment"}
      />{" "}
      <Test
        thelink={
          "https://kcogkmiclf.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Microphone check"}
      />{" "}
      <Test
        thelink={
          "https://4t89jaxmeu.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Syllable repetition"}
      />{" "}
      <Test
        thelink={
          "https://lbluxphiwi.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Real word repetition"}
      />{" "}
      <Test
        thelink={
          "https://yeve4ctho4.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Word definition"}
      />{" "}
      <Test
        thelink={
          "https://abosmecrim.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Nonword repetition"}
      />{" "}
      <Test
        thelink={
          "https://xowkbi9cvw.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Spelling"}
      />{" "}
      <Test
        thelink={
          "https://ff6lv1cmfk.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Nonword reading"}
      />{" "}
      <Test
        thelink={
          "https://sxvmm3w4w6.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Token task"}
      />{" "}
    </Layout>
  )
}
