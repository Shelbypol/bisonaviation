import React from "react";
import {Nav, Navbar, Row, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import WishListTab from "./Wishlist/WishListTab";
import '../style/SocialIcons.css'
import '../style/animations.css'


const SocialIcons = ({socialClassName, socialClass, cartClassName, contactClassName, facebookClassName, instaClassName, twitterClassName}) => {

    return (
        <>
            <Nav className={socialClassName}>


                <Row xs={12} className='SocialIcons_row ml-2 d-flex justify-content-center align-content-center'>
                    <Col xs={4} className=''>
                        {/*  FACEBOOK  */}
                        <LinkContainer to='/' className=' SocialIcons_col-bg'>
                            <Nav.Link className='flip-container'>
                                <div className='flipper'>
                            <span className='SocialIcons_socialIcons front pl-1 pt-1'>
                                <i className="fab fa-facebook"> </i>
                            </span>
                                    <span className='SocialIcons_socialIcons-size back'>
                                <i className="fab fa-facebook "> </i>
                            </span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col xs={4} className=''>
                        {/*  INSTAGRAM */}
                        <LinkContainer className='SocialIcons_col-bg' to='/'>
                            <Nav.Link className='flip-container'>
                                <div className='flipper'>
                            <span className='SocialIcons_socialIcons front pl-1 pt-1'>
                                <i className="m-auto fab fa-instagram"> </i>
                            </span>
                                    <span className='SocialIcons_socialIcons-size back'>
                                <i className="m-auto fab fa-instagram "> </i>
                            </span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col xs={4} className=''>
                        {/*  TWITTER */}
                        <LinkContainer className='SocialIcons_col-bg' to='/'>
                            <Nav.Link className='flip-container'>
                                <div className='flipper'>
                            <span className='SocialIcons_socialIcons front pl-1 pt-1'>
                                <i className="m-auto fab fa-twitter"> </i>
                            </span>
                                    <span className='SocialIcons_socialIcons-size back'>
                                <i className="m-auto fab fa-twitter "> </i>
                            </span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    {/*<WishListTab/>*/}
                </Row>
            </Nav>
        </>
    )
};

export default SocialIcons