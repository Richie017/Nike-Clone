import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import { Pane, TextInput, Select, Button, Checkbox, TickIcon } from 'evergreen-ui';

import '../../assets/css/header/signUp.css';
import "react-datepicker/dist/react-datepicker.css";

class SignUp extends Component {

    state = {
        countryName: [{id:"1", title: "Bangladesh"},
        {id:"2", title: "United States"},
        {id:"3", title: "Ukraine"}],
        isSignUpForEmail: true,
        date: null,
        imgicon: false
    }

    closeHandleClick = () => {
        this.props.toggle();
    };

    toggleSignUpCheck = () => {
        this.setState({
            isSignUpForEmail: !this.state.isSignUpForEmail
        });
    };

    setStartDate(dateValue){
        this.setState({date: dateValue});
    }

    toggleClick = () => {
        
    }

    render() {
        const icvis = this.state.imgicon === true ? {TickIcon} : "";
        console.log(icvis);
        console.log(this.state.imgicon);
        return (
            <Pane className="modal-view">
                <Pane className="modal-content-view">
                    <Pane className="close-div">
                        <Button className="form-close" onClick={this.closeHandleClick.bind(this)} appearance="none">
                            <span>
                                &times;
                            </span>
                        </Button>
                    </Pane>
                    <header>
                        <Pane className="nike-image"></Pane>
                        <Pane className="header-text-bold">BECOME A NIKE MEMBER</Pane>
                        <Pane className="header-text-light">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</Pane>
                    </header>
                    <Pane className="user-input" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                        <TextInput className="user-input-email" placeholder="Email address" />
                        <TextInput className="user-input-password" placeholder="Password" />
                        <TextInput className="user-first-name" placeholder="First Name" />
                        <TextInput className="user-last-name" placeholder="Last Name" />
                    </Pane>
                    <Pane>
                        <DatePicker className="user-birth-date" selected={this.state.date} onChange={(date) => this.setStartDate(date)} placeholderText="Date of Birth" clearButtonClassName="clear-date" isClearable/>
                    </Pane>
                    <Pane className="user-input" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                        <p className="member-text">Get a Nike Member Reward every year on your Birthday.</p>
                        <Select className="country-select" appearance="none">
                            {this.state.countryName.map(country => 
                                <option className="country-options">{country.title}</option>
                            )}
                        </Select>
                    </Pane>
                    {/*<Pane>
                        <UnorderedList className="gender-list">
                            <ListItem className="gender-items-male">
                                <Button className="gender-male-btn" appearance="none">
                                    <span>Male</span>
                                </Button>
                            </ListItem>
                            <ListItem className="gender-items-female">
                                <Button className="gender-female-btn" appearance="none">
                                    <span>Female</span>
                                </Button>
                            </ListItem>
                        </UnorderedList>
                    </Pane>*/}
                    <Pane className="gender-div-male">
                        <Button className="gender-male-btn" appearance="none" onClick={()=>this.setState({ imgicon: !this.state.imgicon })} iconBefore={icvis}>
                            <span>Male</span>
                        </Button>
                    </Pane>
                    <Pane className="gender-div-female">
                        <Button className="gender-female-btn" appearance="none">
                            <span>Female</span>
                        </Button>
                    </Pane>
                    <Pane className="sign-up-div">
                        <Checkbox className="signed-up-email-checkbox" checked={this.state.isSignUpForEmail} label="Sign up for emails to get updates from Nike on products,
                         offers and your Member benefits" onChange={this.toggleSignUpCheck.bind(this)} />
                    </Pane>
                    <Pane className="policy-terms-text">
                        <p>
                            By creating an account, you agree to Nike's <a href="/#">Privacy Policy</a> and <a href="/#">Terms of Use</a>
                            .
                        </p>
                    </Pane>
                    <Pane className="join-us-div">
                        <Button className="join-us-btn" appearance="none">
                            Join Us
                        </Button>
                    </Pane>
                    <Pane className="bottom-signin-text">Already a member? <a href="/#" className="bottom-text-link">Sign in.</a></Pane>
                </Pane>
            </Pane>
        );
    }
}
 
export default SignUp;