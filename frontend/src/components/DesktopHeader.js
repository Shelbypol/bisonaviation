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
            <DesktopStickyHeader/>

            <Navbar expand="sm"
                    collapseOnSelect
                    style={{backgroundColor: 'black'}}
                    className='topNav navbar navbar-dark navbar-expand-lg p-0'
            >

                <Container className='col-sm-12'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='col-sm-3 px-1'>
                            <LinkContainer to='/'>
                                <img src={logo}
                                     className='logoNav pb-1 px-1 pt-0'
                                     alt="Bison Aviation"/>
                            </LinkContainer>
                        </Nav>

                        <Nav className='col-sm-6 justify-content-center px-3'>

                            <Route render={({history}) => <SearchBox history={history}
                                                                     searchSize={'sm'}
                                                                     formClasses={'col-sm-12'}
                                                                     searchClasses={'col-10'}
                                                                     btnSize={'md'}
                                                                     btnClasses={'bisonWhiteBtnSearch px-1 col-2 rounded-right'}
                                                                     btnStyle={{paddingTop: '1.35em', paddingBottom: '1.40em'}}
                                                                     // iconStyle={{fontSize: '1.53em'}}
                                                                     // imgClasses={'w-25 h-50'}
                            />}/>


                        </Nav>

                        <SocialIcons socialClassName={'col-sm-3 justify-content-end'}
                                     socialStyle={{fontSize: '1.6em'}}
                                     // socialStyle={{fontSize: '1.5em'}}
                                     contactClassName={'d-none'}
                        />

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
};
export default DesktopHeader