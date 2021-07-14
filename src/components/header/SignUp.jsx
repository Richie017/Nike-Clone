import React, { Component } from "react";
import { Pane, TextInput } from 'evergreen-ui';

import '../../assets/css/header/signUp.css';

class SignUp extends Component {

    render() {
        return (
            <Pane className="modal-view">
                <Pane className="modal-content-view">
                    <header>
                        <Pane className="nike-image"></Pane>
                        <Pane className="header-text-bold">BECOME A NIKE MEMBER</Pane>
                        <Pane className="header-text-light">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</Pane>
                    </header>
                    <Pane display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                        <TextInput className="user-input-email" placeholder="Email address" />
                        <TextInput className="user-input-password" placeholder="Password" />
                        <TextInput className="user-first-name" placeholder="First Name" />
                        <TextInput className="user-last-name" placeholder="Last Name" />
                        <TextInput placeholder="MM/DD/YYYY" onfocus="(this.type='date')" />
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}
 
export default SignUp;