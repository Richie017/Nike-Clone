import React, { Component } from 'react';
import { Pane, UnorderedList, ListItem } from 'evergreen-ui';

import jordanLogo from '../../../assets/img/jordan_logo_sm.png';
import converseLogo from '../../../assets/img/converse_logo_sm.png';


class PreHeader extends Component {
    render() { 
        return (
            <Pane>
                <UnorderedList>
                    <ListItem><a href="/#"><img src={jordanLogo} alt="Jordan Logo"/></a></ListItem>
                    <ListItem><a href="/#"><img src={converseLogo} alt="Converse Logo"/></a></ListItem>
                </UnorderedList>
                <Pane>
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