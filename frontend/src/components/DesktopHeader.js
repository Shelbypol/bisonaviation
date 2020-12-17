import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import SearchBox from "./SearchBox";
import logo from '../images/general/Final-Logo-Horizontal.png'
import DesktopStickyHeader from "./DesktopStickyHeader";
import SocialIcons from "./SocialIcons";

const DesktopHeader = () => {


    return (
        <>
            <DesktopStickyHeader />

            <Navbar expand="sm" collapseOnSelect style={{backgroundColor: 'black'}}
                    className='topNav navbar navbar-dark navbar-expand-lg p-0'>

                <Container className='col-md-12 col-sm-12'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='col-md-2 col-sm-6'>
                            <LinkContainer to='/'>
                                <img src={logo} className='logoNav pb-1 pl-1 pt-0' alt="Bison Aviation"/>
                            </LinkContainer>
                        </Nav>

                        <Nav className='col-md-8 col-sm-4 justify-content-center'>
                            <Route render={({history}) => <SearchBox history={history}
                                                                     searchSize={'sm'}
                                                                     searchClasses={'p-0 ml-md-5 ml-sm-0 col-sm-12'}
                                                                     formClasses={'col-sm-10 rounded-left'}
                                                                     buttonClasses={'col-sm-1 py-md-2 py-sm-0 searchBtnColor rounded-right'}
                                                                     buttonStyle={''}/>}/>
                        </Nav>

                        <SocialIcons styleBootstrap={'float-left col-md-2 col-s4 justify-content-end'}/>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
};
export default DesktopHeader