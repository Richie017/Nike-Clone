import React, { Component } from 'react';
import { Pane, UnorderedList, ListItem } from 'evergreen-ui';

import jordanLogo from '../../assets/images/jordan_logo_sm.png';
import converseLogo from '../../assets/images/converse_logo_sm.png';

import '../../assets/css/header/preheader.css';
import PopUp from './SignInPopUp.jsx';


class PreHeader extends Component {
    state = {
        helpMenuLinks: [
            {id:"0.1", title: "Order Status", link: "/#"},
            {id:"0.2", title: "Shipping Delivery", link: "/#"},
            {id:"0.3", title: "Returns", link: "/#"},
            {id:"0.4", title: "Size Charts", link: "/#"},
            {id:"0.5", title: "Contact Us", link: "/#"},
            {id:"0.6", title: "Privacy Policy", link: "/#"},
            {id:"0.7", title: "Terms of Sale", link: "/#"},
            {id:"0.8", title: "Terms of Use", link: "/#"},
            {id:"0.9", title: "Send Us Feedback", link: "/#"}
        ],
        seen: false
    }

    togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
    };

    render() { 
        return (
            <Pane className="panePreHeader">
                <UnorderedList className="iconList">
                    <ListItem><a href="/#"><img src={jordanLogo} alt="Jordan Logo"/></a></ListItem>
                    <ListItem><a href="/#"><img src={converseLogo} alt="Converse Logo"/></a></ListItem>
                </UnorderedList>
                <Pane className="desktopMenu">
                    <Pane className="paneHelp">
                        <a href="/#" className="desktopMenuLink">Help</a>
                        <Pane className="helpMenuDropDown">
                            <Pane>
                                <a href="/#">Help</a>
                                <UnorderedList className="helpMenuLinksList">
                                    {this.state.helpMenuLinks.map(link => <ListItem key={link.id}><a href={link.link}>{link.title}</a></ListItem>)}
                                </UnorderedList>
                            </Pane>
                        </Pane>
                    </Pane>
                    <span>|</span>
                    <a href="/#" className="desktopMenuLink">Join Us</a>
                    <span>|</span>
                    <Pane>
                        <Pane onClick={this.togglePop.bind(this)}>
                            <a href="/#" className="desktopMenuLink">Sign In</a>
                        </Pane>
                        {this.state.seen ? <PopUp toggle={this.togglePop.bind(this)} /> : null}
                    </Pane>
                        {/*<Popover placement="right" positionLeft={200} positionTop={50}
                            content={
                                <Pane width={436} height={491} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                                    <TextInput name="text-input-email" placeholder="Email Address" />
                                    <TextInput name="text-input-password" placeholder="Password" />
                                </Pane>
                            }
                            >
                            <a href="/#" className="desktopMenuLink">Sign In</a>
                        </Popover>*/}
                </Pane>
            </Pane>
        );
    }
}
 
export default PreHeader;