import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from "./SearchBox";
import {CART_RESET} from "../constants/cartConstants";
import logo from '../images/activeImg/Final-Logo-Horizontal.png'
import DesktopBottomHeader from "./DesktopBottomHeader";
import SocialIcons from "./SocialIcons";

const DesktopHeader = () => {


    return (
        <>
            <DesktopBottomHeader/>

            {/*<header className='mainHeader'>*/}

                <Navbar expand="sm" collapseOnSelect style={{backgroundColor: 'black'}}
                        className='topNav navbar navbar-dark navbar-expand-lg p-0'>

                    <Container className='col-xs-12 float-left ml-5'>

                        {/*  LOGO  */}
                        <LinkContainer className='col-xs-2' to='/'>
                            <img src={logo} className='logoNav pb-1 ' alt="Bison Aviation"/>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Route render={({history}) => <SearchBox history={history}/>}/>

                            <SocialIcons styleBootstrap={'float-left'} />

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            {/*</header>*/}

        </>

    )
};
export default DesktopHeader