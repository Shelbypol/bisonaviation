import React from "react";
import {Nav, Navbar, Row, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import WishListTab from "./Wishlist/WishListTab";
import '../style/SocialIcons.css'
import '../style/animations.css'


const SocialIcons = ({socialClassName, cartClassName, contactClassName, facebookClassName, instaClassName, twitterClassName}) => {

    return (
        <>
            <Nav className={socialClassName}>

                {/*  WISH LIST  */}
                {/*<LinkContainer className={cartClassName} to='/cart'>*/}
                {/*    <Nav.Link>*/}
                {/*        <span className={'SocialIcons_socialIcons'}>*/}
                {/*            <i className="m-auto fal fa-heart animations_icon-spin"> </i>*/}
                {/*        </span>*/}
                {/*    </Nav.Link>*/}
                {/*</LinkContainer>*/}

                {/*  CONTACT */}
                {/*<LinkContainer className={contactClassName} to='/'>*/}
                {/*    <Nav.Link className='flip-container vertical'>*/}
                {/*        <div className='flipper'>*/}
                {/*            <span className='SocialIcons_socialIcons-size front'>*/}
                {/*                <i className="m-auto fab fa-facebook "> </i>*/}
                {/*            </span>*/}
                {/*            <span className='SocialIcons_socialIcons-size back'>*/}
                {/*                <i className="m-auto fab fa-facebook "> </i>*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    </Nav.Link>*/}
                {/*</LinkContainer>*/}
                <Row xs={12}>
                    <Col xs={4}>
                        {/*  FACEBOOK  */}
                        <LinkContainer className={facebookClassName} to='/'>
                            <Nav.Link className='flip-container'>
                                <div className='flipper'>
                            <span className='SocialIcons_socialIcons front'>
                                <i className="m-auto fab fa-facebook "> </i>
                            </span>
                                    <span className='SocialIcons_socialIcons back'>
                                <i className="m-auto fab fa-facebook "> </i>
                            </span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col xs={4}>
                        {/*  INSTAGRAM */}
                        <LinkContainer className={instaClassName} to='/'>
                            <Nav.Link className='flip-container'>
                                <div className='flipper'>
                            <span className='SocialIcons_socialIcons front'>
                                <i className="m-auto fab fa-instagram "> </i>
                            </span>
                                    <span className='SocialIcons_socialIcons back'>
                                <i className="m-auto fab fa-instagram "> </i>
                            </span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col xs={4}>
                        {/*  TWITTER */}
                        <LinkContainer className={twitterClassName} to='/'>
                            <Nav.Link className='flip-container'>
                                <div className='flipper'>
                            <span className='SocialIcons_socialIcons front'>
                                <i className="m-auto fab fa-twitter "> </i>
                            </span>
                                    <span className='SocialIcons_socialIcons back'>
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