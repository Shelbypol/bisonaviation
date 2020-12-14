import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const SocialIcons = ({styleBootstrap}) => {

    return (
        <>
            <Nav className={styleBootstrap} style={{fontSize: '1.5em'}}>

                {/*  WISH LIST  */}
                <LinkContainer to='/cart'>
                    <Nav.Link >
                        {/*<i className="fas fa-plane"> </i>*/}
                        <i style={{color: 'white'}} className="iconHover fas fa-shopping-cart"> </i>
                    </Nav.Link>
                </LinkContainer>

                {/*  CONTACT */}
                <LinkContainer to='/'>
                    <Nav.Link>
                        <i style={{color: 'white'}} className="iconHover far fa-envelope"> </i>
                    </Nav.Link>
                </LinkContainer>

                {/*  FACEBOOK  */}
                <LinkContainer  to='/'>
                    <Nav.Link>
                        <i style={{color: 'white'}} className="iconHover fab fa-facebook"> </i>
                    </Nav.Link>
                </LinkContainer>

                {/*  INSTAGRAM */}
                <LinkContainer to='/'>
                    <Nav.Link>
                        <i style={{color: 'white'}} className="iconHover fab fa-instagram"> </i>
                    </Nav.Link>
                </LinkContainer>

                {/*  TWITTER */}
                <LinkContainer to='/'>
                    <Nav.Link>
                        <i style={{color: 'white'}} className="iconHover fab fa-twitter"> </i>
                    </Nav.Link>
                </LinkContainer>

            </Nav>
        </>
    )
};

export default SocialIcons