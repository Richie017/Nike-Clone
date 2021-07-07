import React, { Component } from "react";
import { Pane, TextInput, Checkbox } from 'evergreen-ui';

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
          {/*<span className="close" onClick={this.handleClick}>
            &times;
          </span>*/}
          <header>
            <Pane className="nikeImage"></Pane>
            <Pane className="header_text">YOUR ACCOUNT FOR EVERYTHING NIKE</Pane>
          </header>
          <Pane display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <TextInput className="input_email" placeholder="Email address" />
            <TextInput className="input_password" placeholder="Password" />
          </Pane>
          <Pane className="test">
            <Checkbox className="signedIn" checked={this.state.isChecked} label="Keep me signed in" onChange={this.toggleCheck.bind(this)} />
          </Pane>
          <Pane className="gg">
            <a href="/#" className="forgot_pass">Forgot password?</a>
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

export default PopUp;
