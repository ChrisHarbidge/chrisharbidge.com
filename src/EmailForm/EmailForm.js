import React, { Component } from 'react';
import './EmailForm.css';
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';

export default class EmailForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      buttonTitle: "Submit",
      buttonClass: "submitButton",
      emailInputClass: "emailInput",
      messageInputClass: "emailInput",
      hasSent: false
    };
  }

  handleSubmit(event) {

    event.preventDefault();

    if (this.state.hasSent) return;

    var errored = false;

    var emailValue = this.refs.emailTextInput.value;

    if (emailValue.length === 0) {
      this.setState({emailInputClass: "emailInputError"});
      errored = true;
    }

    var messageValue = this.refs.messageTextArea.textarea.value;

    if (messageValue.length === 0) {
      this.setState({messageInputClass: "emailInputError"});
      errored = true;
    }

    if (errored) return;

    this.setState({
      buttonTitle: "Sending..."
    });

    this.setState({hasSent: true});

    axios.get('http://python-mail-script.appspot.com', {params: {email: emailValue, message: messageValue}}).then(res => {
      this.setState({
        buttonTitle: "Success",
        buttonClass: "successButton"
      })
    });
  }

  render() {
    return (
      <div className="emailform">
        <form onSubmit={this.handleSubmit}>

        <div className="inputWrapper" id="emailAddress">

        <input type="email" name="email" placeholder="Your Email" className={this.state.emailInputClass} id="email" ref="emailTextInput"/>

        </div>


        <div className="inputWrapper">
          <TextareaAutosize maxRows={5} placeholder="Your Message" name="message" className={this.state.messageInputClass} id="message" ref="messageTextArea" />
        </div>

        <div className="inputWrapper">
        <input type="Submit" id="emailsubmit" className={this.state.buttonClass} value={this.state.buttonTitle} readOnly/>
        </div>
        </form>
      </div>
    )
  }
}
