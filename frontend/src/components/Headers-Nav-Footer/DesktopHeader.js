import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import SearchBox from "../SearchBox";
import logo from '../../images/general/Final-Logo-Horizontal.png'
import logooutline from '../../images/general/final-logo-outline.png'
import StickyHeader from "./StickyHeader";
import SocialIcons from "../SocialIcons";

const DesktopHeader = () => {
    return (
        <>
            <StickyHeader/>

            <Navbar expand="sm"
                    collapseOnSelect
                    style={{backgroundColor: 'black'}}
                    className='DesktopHeader_nav navbar navbar-dark navbar-expand-lg p-0'>

                <Container className='col-sm-12'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='col-sm-3 px-1'>
                            <LinkContainer to='/'>
                                <img
                                    src={logo}
                                    // src={logooutline}
                                     className='DesktopHeader_logo pb-1 px-1 pt-0'
                                     alt="Bison Aviation"/>
                            </LinkContainer>
                        </Nav>

                        <Nav className='col-sm-6 justify-content-center px-3'>

                            <Route render={({history}) => <SearchBox history={history}
                                                                     searchSize={'sm'}
                                                                     formClasses={'col-sm-12'}
                                                                     searchClasses={'col-10'}
                                                                     btnSize={'md'}
                                                                     btnClasses={'global_bisonWhiteBgBtnSearch DesktopHeader_search_btn_padding px-1 col-2 rounded-right'}
                            />}/>


                        </Nav>

                        <SocialIcons socialClassName={'col-sm-3 justify-content-end'}
                                     contactClassName={'d-none'}
                        />

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
};
export default DesktopHeader