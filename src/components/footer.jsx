import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

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
            <MDBFooter color="bg-dark" className="page-footer font-small pt-4 mt-4">
                <MDBContainer className="text-left">
                    <MDBRow>
                        <MDBCol md="2">
                            {this.state.footerFirstCol.map(col => <h6 className="text-uppercase mb-3 mt-3 font-weight-bold"><a href={col.link}>{col.title}</a></h6>)}
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        {this.state.footerCols.map(col =>
                             <MDBCol md="2">
                                <h6 className="text-uppercase mb-3 mt-3 font-weight-bold"><a href={col.head.link}>{col.head.title}</a></h6>
                                <ul className="list-unstyled">
                                    {col.subLinks.map(subLink => <li className="mb-2"><a href={subLink.link}>{subLink.title}</a></li>)}
                                </ul>
                            </MDBCol>
                        )}
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="6">
                            <div className="text-right mt-3">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="/#" className="btn-floating btn-lg btn-tw mx-1"><i className="fab fa-twitter"> </i></a></li>
                                    <li className="list-inline-item"><a href="/#" className="btn-floating btn-lg btn-fb mx-1"><i className="fab fa-facebook"> </i></a></li>
                                    <li className="list-inline-item"><a href="/#" className="btn-floating btn-lg btn-gplus mx-1"><i className="fab fa-youtube"> </i></a></li>
                                    <li className="list-inline-item"><a href="/#" className="btn-floating btn-lg btn-li mx-1"><i className="fab fa-instagram"> </i></a></li>
                                </ul>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <hr className="bg-light"/>
                    <div class="row">
                        <div className="col-md-6 text-left">
                            &copy; {(new Date().getFullYear())} <a href="/#"> Potato Tech, All Rights Reserved. </a>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul className="list-unstyled list-inline">
                                {this.state.bottomLinks.map(bLink => <li className="list-inline-item"><a href={bLink.link} className="btn-floating btn-sm mx-1">{bLink.title}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </MDBContainer>
            </MDBFooter>
        );
    }
}
 
export default Footer;