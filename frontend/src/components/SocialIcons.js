import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const SocialIcons = ({socialClassName, cartClassName, contactClassName, facebookClassName, instaClassName, twitterClassName}) => {

    return (
        <>
            <Nav className={socialClassName} >

                {/*  WISH LIST  */}
                <LinkContainer className={cartClassName} to='/cart'>
                    <Nav.Link>
                        <span className={'SocialIcons_socialIcons'}>
                            <i className="m-auto far fa-cart-arrow-down animations_icon-spin"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  CONTACT */}
                <LinkContainer className={contactClassName} to='/'>
                    <Nav.Link>
                        <span className={'SocialIcons_socialIcons'}>
                            <i className="m-auto far fa-envelope animations_icon-spin"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  FACEBOOK  */}
                <LinkContainer className={facebookClassName} to='/'>
                    <Nav.Link>
                        <span className={'SocialIcons_socialIcons'}>
                            <i className="m-auto fab fa-facebook animations_icon-spin"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  INSTAGRAM */}
                <LinkContainer className={instaClassName} to='/'>
                    <Nav.Link>
                        <span className={'SocialIcons_socialIcons'}>
                            <i className="m-auto fab fa-instagram animations_icon-spin"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  TWITTER */}
                <LinkContainer className={twitterClassName} to='/'>
                    <Nav.Link>
                        <span className={'SocialIcons_socialIcons'}>
                            <i className="m-auto fab fa-twitter animations_icon-spin"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

            </Nav>
        </>
    )
};

export default SocialIcons