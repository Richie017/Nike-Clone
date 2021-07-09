import React, { Component } from "react";
import { Pane, TextInput, Checkbox, Button } from 'evergreen-ui';

import '../../assets/css/header/signInPopUp.css';

class PopUp extends Component {

  state = {
    isChecked: true
  }

  toggleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <Pane className="modal">
        <Pane className="modal_content">
          <Pane>
            <Button className="close" onClick={this.handleClick.bind(this)} appearance="none">
              <span>
                &times;
              </span>
            </Button>
          </Pane>
          <header>
            <Pane className="nikeImage"></Pane>
            <Pane className="header_text">YOUR ACCOUNT FOR EVERYTHING NIKE</Pane>
          </header>
          <Pane display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <TextInput className="input_email" placeholder="Email address" />
            <TextInput className="input_password" placeholder="Password" />
          </Pane>
          <Pane className="signIn_div">
            <Checkbox className="signedIn_checkbox" checked={this.state.isChecked} label="Keep me signed in" onChange={this.toggleCheck.bind(this)} />
          </Pane>
          <Pane className="fgot_pass">
            <a href="/#" className="forgot_pass">Forgot password?</a>
          </Pane>
          <Pane className="policy_text">
            <p>
              By logging in, you agree to Nike's <a href="/#">Privacy Policy</a> and <a href="/#">Terms of Use</a>
              .
            </p>
          </Pane>
          <Pane className="btn">
            <Button className="btn_signin" appearance="none">
              Sign In
            </Button>
          </Pane>
          <Pane className="bottom_text">Not a member? <a href="/#" style={{color: "black"}}>Join Us.</a></Pane>
        </Pane>
      </Pane>
    );
  }
}

export default PopUp;
