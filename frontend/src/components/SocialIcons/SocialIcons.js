import React from "react";
import {Nav, Navbar, Row, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import WishListTab from "../Wishlist/WishListTab";
import './SocialIcons.css'
import './animations.css'


const SocialIcons = () => {

    return (
        <>
            <Row className='SocialIcons_row' style={{border: '2px solid red'}}>
                <Col className='m-0 p-0 d-flex justify-content-center' style={{border: '2px solid red'}}>
                    {/*  FACEBOOK */}
                    <LinkContainer className='SocialIcons_col-bg' to='/'>
                        <Nav.Link className='flip-container'>
                            <div className='flipper'>
                            <span className='SocialIcons_socialIcons front pt-1'>
                                <i className="m-auto fab fa-facebook"> </i>
                            </span>
                                <span className='SocialIcons_socialIcons-size back pt-1'>
                                <i className="m-auto fab fa-facebook "> </i>
                            </span>
                            </div>
                        </Nav.Link>
                    </LinkContainer>
                </Col>
                <Col className='mx-2 p-0 d-flex justify-content-center'>
                    {/*  INSTAGRAM */}
                    <LinkContainer className='SocialIcons_col-bg' to='/'>
                        <Nav.Link className='flip-container'>
                            <div className='flipper'>
                            <span className='SocialIcons_socialIcons front pl-1 pt-1'>
                                <i className="m-auto fab fa-instagram"> </i>
                            </span>
                                <span className='SocialIcons_socialIcons-size back pl-1 pt-1'>
                                <i className="m-auto fab fa-instagram "> </i>
                            </span>
                            </div>
                        </Nav.Link>
                    </LinkContainer>
                </Col>
                <Col className='m-0 p-0 d-flex justify-content-center'>
                    {/*  TWITTER */}
                    <LinkContainer className='SocialIcons_col-bg' to='/'>
                        <Nav.Link className='flip-container'>
                            <div className='flipper'>
                            <span className='SocialIcons_socialIcons front pt-1'>
                                <i className="m-auto fab fa-twitter"> </i>
                            </span>
                                <span className='SocialIcons_socialIcons-size back pt-1'>
                                <i className="m-auto fab fa-twitter "> </i>
                            </span>
                            </div>
                        </Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </>
    )
};

export default SocialIcons