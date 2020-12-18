import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const SocialIcons = ({socialClassName, socialStyle, cartClassName, contactClassName, facebookClassName, instaClassName, twitterClassName}) => {

    return (
        <>
            <Nav className={socialClassName} style={socialStyle}>

                {/*  WISH LIST  */}
                <LinkContainer className={cartClassName} to='/cart'>
                    <Nav.Link>
                        <span className={'socialIcons'}>
                            <i className="far fa-cart-arrow-down"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  CONTACT */}
                <LinkContainer className={contactClassName} to='/'>
                    <Nav.Link>
                        <span className={'socialIcons'}>
                            <i className="m-auto far fa-envelope"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  FACEBOOK  */}
                <LinkContainer className={facebookClassName} to='/'>
                    <Nav.Link>
                        <span className={'socialIcons'}>
                         <i className="m-auto fab fa-facebook"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  INSTAGRAM */}
                <LinkContainer className={instaClassName} to='/'>
                    <Nav.Link>
                        <span className={'socialIcons'}>
                            <i className="m-auto fab fa-instagram"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

                {/*  TWITTER */}
                <LinkContainer className={twitterClassName} to='/'>
                    <Nav.Link>
                        <span className={'socialIcons'}>
                            <i className="m-auto fab fa-twitter"> </i>
                        </span>
                    </Nav.Link>
                </LinkContainer>

            </Nav>
        </>
    )
};

export default SocialIcons