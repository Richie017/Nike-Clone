import React, { Component } from 'react';
import { Pane, UnorderedList, ListItem } from 'evergreen-ui';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../assets/css/Footer.css';

class Footer extends Component {
    state = {
        footerFirstCol: [
            {id:"0.1", title: "Gift Card", link: "/#"},
            {id:"0.2", title: "Promotion", link: "/#"},
            {id:"0.3", title: "Find A Store", link: "/#"},
            {id:"0.4", title: "Sign Up for Email", link: "/#"},
            {id:"0.5", title: "Become A Member", link: "/#"},
            {id:"0.6", title: "Nike Journal", link: "/#"},
            {id:"0.7", title: "Send Us Feedback", link: "/#"},
        ],
        footerCols: [
            {
                id: "1",
                head: {title: "Get Help", link: "/#"},
                subLinks: [
                    {id:"1.1", title: "Order Status", link: "/#"}, 
                    {id:"1.2", title: "Shipping and Delivery", link: "/#"}, 
                    {id:"1.3", title: "Returns", link: "/#"}, 
                    {id:"1.4", title: "Payment Options", link: "/#"}, 
                    {id:"1.5", title: "Gift Card Balance", link: "/#"}, 
                    {id:"1.6", title: "Contact Us", link: "/#"}, 
                ]
            }, 
            {
                id: "2",
                head: {title: "About Nike", link: "/#"},
                subLinks: [
                    {id:"2.1", title: "News", link: "/#"}, 
                    {id:"2.2", title: "Careers", link: "/#"}, 
                    {id:"2.3", title: "Investors", link: "/#"}, 
                    {id:"2.4", title: "Purpose", link: "/#"},  
                    {id:"2.5", title: "Sustainability", link: "/#"}, 
                ]
            }, 
        ],
        bottomLinks: [
            {title: "Guides", link: "/#"},
            {title: "Terms of Sales", link: "/#"},
            {title: "Terms of Use", link: "/#"},
            {title: "Nike Privacy Policy", link: "/#"},
            {title: "CA Supply Chains Act", link: "/#"},
        ],
    }

    render() {
        return (
            <Pane className="box"> 
                <Pane className="container"> 
                    <Pane className="row"> 
                        <Pane className="subRow">
                            <Pane className="column"> 
                                {this.state.footerFirstCol.map(col => <p key={col.id}><a className="heading" href={col.link}>{col.title}</a></p>)}
                            </Pane>
                            {this.state.footerCols.map(col =>
                                <Pane key={col.id} className="column">
                                    {<p><a className="heading" href={col.head.link}>{col.head.title}</a></p>}
                                    {col.subLinks.map(subLink => <a key={subLink.id} className="footerLink" href={subLink.link}>{subLink.title}</a>)}
                                </Pane>
                            )}
                        </Pane>
                        <Pane className="socialMenu">
                            {<UnorderedList className="socialLinks">
                                <ListItem className="socialLink"><a href="/#"><FaTwitter className="socialIcon"/></a></ListItem>
                                <ListItem className="socialLink"><a href="/#"><FaFacebookF className="socialIcon"/></a></ListItem>
                                <ListItem className="socialLink"><a href="/#"><FaYoutube className="socialIcon"/></a></ListItem>
                                <ListItem className="socialLink"><a href="/#"><FaInstagram className="socialIcon"/></a></ListItem>
                            </UnorderedList>}
                        </Pane>
                    </Pane>
                    {/*<hr/>
                    <Pane class="row2">
                        <Pane>
                            &copy; {(new Date().getFullYear())} <a href="/#"> Potato Tech, All Rights Reserved. </a>
                        </Pane>
                        <Pane>
                            <UnorderedList>
                                {this.state.bottomLinks.map(bLink => <ListItem className="footerLink"><a href={bLink.link}>{bLink.title}</a></ListItem>)}
                            </UnorderedList>
                        </Pane>
                    </Pane>*/}
                </Pane>
            </Pane>
        );
    }
}
 
export default Footer;