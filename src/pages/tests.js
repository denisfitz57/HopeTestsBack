import React from "react"
import Layout from "../components/layout"
import Test from "./test"

export default function Tests(props) {
  return (
    <Layout>
      <Test
        thelink={
          "https://xznxq9j5vz.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Headphone adjustment"}
      />
      <Test
        thelink={
          "https://xo72pyxwuq.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Microphone check"}
      />
      <Test
        thelink={
          "https://bltuzquyjd.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Syllable repetition"}
      />
      <Test
        thelink={
          "https://skzchrwzvr.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Real word repetition"}
      />
      <Test
        thelink={
          "https://zrj8kifgc3.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Word definition"}
      />
      <Test
        thelink={
          "https://rfpgysawtr.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Nonword repetition"}
      />
      <Test
        thelink={
          "https://dvknkceyfl.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Spelling"}
      />
      <Test
        thelink={
          "https://yczrjnrhho.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Nonword reading"}
      />
      <Test
        thelink={
          "https://hcgoskxrzw.cognition.run/?subjectID=" + props.subjectID
        }
        thename={"Token task"}
      />
    </Layout>
  )
}
