import React, { Component } from 'react';
import { Pane, UnorderedList, ListItem } from 'evergreen-ui';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../assets/css/Footer.css';

class Footer extends Component {
    state = {
        footerFirstCol: [
            {title: "Gift Card", link: "/#"},
            {title: "Promotion", link: "/#"},
            {title: "Find A Store", link: "/#"},
            {title: "Sign Up for Email", link: "/#"},
            {title: "Become A Member", link: "/#"},
            {title: "Nike Journal", link: "/#"},
            {title: "Send Us Feedback", link: "/#"},
        ],
        footerCols: [
            {
                head: {title: "Get Help", link: "/#"},
                subLinks: [
                    {title: "Order Status", link: "/#"}, 
                    {title: "Shipping and Delivery", link: "/#"}, 
                    {title: "Returns", link: "/#"}, 
                    {title: "Payment Options", link: "/#"}, 
                    {title: "Gift Card Balance", link: "/#"}, 
                    {title: "Contact Us", link: "/#"}, 
                ]
            }, 
            {
                head: {title: "About Nike", link: "/#"},
                subLinks: [
                    {title: "News", link: "/#"}, 
                    {title: "Careers", link: "/#"}, 
                    {title: "Investors", link: "/#"}, 
                    {title: "Purpose", link: "/#"},  
                    {title: "Sustainability", link: "/#"}, 
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
                                {this.state.footerFirstCol.map(col => <p><a className="heading" href={col.link}>{col.title}</a></p>)}
                            </Pane>
                            {this.state.footerCols.map(col =>
                                <Pane className="column">
                                    {<p><a className="heading" href={col.head.link}>{col.head.title}</a></p>}
                                    {col.subLinks.map(subLink => <a className="footerLink" href={subLink.link}>{subLink.title}</a>)}
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