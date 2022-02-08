import React from "react"
import Layout from "../components/layout"
import Tests from "./tests"

export default class IndexPage extends React.Component {
  state = {
    subjectID: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <Layout>
          <p>
            <b> Hope Lancaster </b> <br /> <br />
            <b> General directions </b>
          </p>{" "}
          <p>
            Thank you for being willing to participate in our study about how to
            measure speech, language, and reading online.{" "}
          </p>{" "}
          <p>
            <i> Directions </i>{" "}
          </p>{" "}
          <p>
            You may enter any subject ID you wish.We recommend your email
            address so that we can send you your compensation quickly
            afterwards.We won’ t keep or share your email address after sending
            you payment.If you choose a different subject ID, you will need to
            contact us by email(onlinetool.cobre @boystown.org) and let us know
            your subject ID so we can pay you.{" "}
          </p>{" "}
          <p>
            <b>
              {" "}
              You must complete the headphone adjustment and microphone check
              tasks first.{" "}
            </b>{" "}
          </p>{" "}
          <p>
            {" "}
            These tasks will help to make sure your volume and microphone are
            set to the right levels.After completing the audio calibration task,
            you may do the other tasks in any order.We recommend you do them in
            the order they are listed in .{" "}
            <p>
              You should complete these tasks in a quiet location, without many
              distractions, and use headphones.Your headphones can be over the
              ear or ear buds, which ever you are more comfortable with. Tests
              that record your voice may request permission to access your
              microphone multiple time.{" "}
            </p>{" "}
          </p>{" "}
          <form>
            <label>
              Enter Subject ID:
              <input
                type="text"
                name="subjectID"
                value={this.state.subjectID}
                onChange={this.handleInputChange}
              />{" "}
            </label>{" "}
          </form>{" "}
        </Layout>{" "}
        <Tests subjectID={this.state.subjectID} />{" "}
      </div>
    )
  }
}
