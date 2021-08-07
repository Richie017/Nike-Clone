import React, { Component } from "react";
import { Pane, TextInput, Checkbox, Button } from 'evergreen-ui';
import validator from 'validator';

import '../../assets/css/header/signinpopup.css';

class PopUp extends Component {

  state = {
    isKeepMeSignedInChecked: true,
    inputEmailError: '',
    inputEmailErrorDisplay: "none"
  }

  toggleCheck = () => {
    this.setState({
      isKeepMeSignedInChecked: !this.state.isKeepMeSignedInChecked
    });
  };

  handleClick = () => {
    this.props.toggle();
  };

  inputEmailValidation = (e) => {
    var email = e.target.value
    if (!validator.isEmail(email)) {
        this.setState({
          inputEmailError: 'Please enter a valid email address',
          inputEmailErrorDisplay: "block"
        });
    } else {
        this.setState({
          inputEmailError: '',
          inputEmailErrorDisplay: "none"
        });
    }
  }

  render() {
    return (
      <Pane className="modal">
        <Pane className="modal-content">
          <Pane>
            <Button className="btn-close" onClick={this.handleClick.bind(this)} appearance="none">
              <span>
                &times;
              </span>
            </Button>
          </Pane>
          <header>
            <Pane className="nike-image"></Pane>
            <Pane className="header-text">YOUR ACCOUNT FOR EVERYTHING NIKE</Pane>
          </header>
          <Pane className="user-signin" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Pane>
              <TextInput className="input-text login-email" type="email" onChange={(e) => this.inputEmailValidation(e)} placeholder="Email address" />
              <Pane className="input-email-error" display={this.state.inputEmailErrorDisplay}>{this.state.inputEmailError}</Pane>
            </Pane>
            <TextInput className="input-text login-password" type="password" placeholder="Password" />
          </Pane>
          <Pane className="sign-in-div">
            <Checkbox className="signed-in-checkbox" checked={this.state.isKeepMeSignedInChecked} label="Keep me signed in" onChange={this.toggleCheck.bind(this)} />
          </Pane>
          <Pane className="forgot-pass-div">
            <a href="/#" className="forgot-pass-link">Forgot password?</a>
          </Pane>
          <Pane className="policy-text">
            <p>
              By logging in, you agree to Nike's <a href="/#">Privacy Policy</a> and <a href="/#">Terms of Use</a>
              .
            </p>
          </Pane>
          <Pane className="btn">
            <Button className="btn-sign-in" appearance="none">
              Sign In
            </Button>
          </Pane>
          <Pane className="bottom-text">Not a member? <a href="/#" className="bottom-text-link">Join Us.</a></Pane>
        </Pane>
      </Pane>
    );
  }
}

export default PopUp;
