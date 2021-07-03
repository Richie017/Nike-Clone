import React, { Component } from 'react';
import { Pane, UnorderedList, ListItem } from 'evergreen-ui';

import jordanLogo from '../../assets/img/jordan_logo_sm.png';
import converseLogo from '../../assets/img/converse_logo_sm.png';

import '../../assets/css/header/preheader.css';


class PreHeader extends Component {
    render() { 
        return (
            <Pane className="panePreHeader">
                <UnorderedList className="iconList">
                    <ListItem><a href="/#"><img src={jordanLogo} alt="Jordan Logo"/></a></ListItem>
                    <ListItem><a href="/#"><img src={converseLogo} alt="Converse Logo"/></a></ListItem>
                </UnorderedList>
                <Pane className="desktopMenu">
                    <a href="/#">Help</a>
                    <span>|</span>
                    <a href="/#">Join Us</a>
                    <span>|</span>
                    <a href="/#">Sign In</a>
                </Pane>
            </Pane>
        );
    }
}
 
export default PreHeader;