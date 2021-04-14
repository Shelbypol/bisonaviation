import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import SearchBox from "../SearchBox";
import logo from '../../images/bg-graphics/graphics/Final-Logo-Horizontal.png'
import StickyHeader from "./StickyHeader";
import SocialIcons from "../SocialIcons";
import Fade from 'react-reveal/Fade';

const DesktopHeader = () => {

    return (
        <>
            <div className='bg-white'>
                <StickyHeader/>

            </div>


            {/*<Fade top duration={3000} >*/}
            {/*    <Navbar expand="sm"*/}
            {/*            collapseOnSelect*/}
            {/*            className='DesktopHeader_nav navbar global_dots navbar-dark navbar-expand-lg py-0 px-4 m-0'>*/}

            {/*        <Container className='col-sm-12 p-0 m-0'>*/}

            {/*            <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
            {/*            <Navbar.Collapse id="basic-navbar-nav">*/}

            {/*                <Nav className='col-sm-3 px-1'>*/}
            {/*                    <LinkContainer to='/'>*/}
            {/*                        <img*/}
            {/*                            src={logo}*/}
            {/*                            // src={logooutline}*/}
            {/*                            className='DesktopHeader_logo pb-1 px-1 pt-0'*/}
            {/*                            alt="Bison Aviation"/>*/}
            {/*                    </LinkContainer>*/}
            {/*                </Nav>*/}

            {/*                <Nav className='col-sm-6 justify-content-center px-3'>*/}

            {/*                    <Route render={({history}) => <SearchBox history={history}*/}
            {/*                                                             searchSize={'sm'}*/}
            {/*                                                             formClasses={'col-sm-12'}*/}
            {/*                                                             searchClasses={'col-10 DesktopHeader_search-color'}*/}
            {/*                                                             btnSize={'sm'}*/}
            {/*                                                             btnClasses={'DesktopHeader_search_btn_padding col-2 rounded-right'}*/}
            {/*                                                             iconClass={'fal fa-search'}*/}
            {/*                    />}/>*/}


            {/*                </Nav>*/}

            {/*                <SocialIcons socialClassName={'col-sm-3 mt-n4 justify-content-end'}*/}
            {/*                             contactClassName={'d-none'}*/}
            {/*                />*/}

            {/*            </Navbar.Collapse>*/}
            {/*        </Container>*/}
            {/*    </Navbar>*/}
            {/*</Fade>*/}
        </>

    )
};
export default DesktopHeader