import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const DesktopBottomHeader = () => {

    return (
        <header className='sticky-top bottomHeader'>

            <Navbar className='navbar navbar-expand-lg navbar-light bg-light m-auto p-0 border-0'>

                <Container className='col-sm-12'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="m-auto navFont">

                            {/*  BROWSE PRODUCTS  */}
                            <LinkContainer className='mx-1' to='/products'>
                                <Nav.Link>
                                    Browse Products
                                </Nav.Link>
                            </LinkContainer>

                            {/*  AIR CRAFT SERVICES  */}
                            <NavDropdown style={{zIndex: '100'}} className='mx-1' title='Aircraft Services'
                                         id='aircraftservicesmenu'>
                                {/*   AVIONICS  */}
                                <LinkContainer to='/avionics'>
                                    <NavDropdown.Item>Avionics</NavDropdown.Item>
                                </LinkContainer>

                                {/*   MAINTENANCE  */}
                                <LinkContainer to='/maintenance'>
                                    <NavDropdown.Item>Maintenance</NavDropdown.Item>
                                </LinkContainer>

                                {/*   AOG RESPONSE  */}
                                <LinkContainer to='/aog'>
                                    <NavDropdown.Item>AOG Response</NavDropdown.Item>
                                </LinkContainer>

                                {/*   ACQUISITIONS  */}
                                <LinkContainer to='/acquisitions'>
                                    <NavDropdown.Item>Acquisitions</NavDropdown.Item>
                                </LinkContainer>

                                {/*   AIRCRAFT PARTS  */}
                                <LinkContainer to='/aircraftparts'>
                                    <NavDropdown.Item>Aircraft Parts</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            {/*  EO/IR  */}
                            <NavDropdown style={{zIndex: '100'}} className='mx-1' title='EO/IR' id='eoirmenu'>
                                {/*   EO / IR MAINTENANCE */}
                                <LinkContainer to='/eoir/maintenance'>
                                    <NavDropdown.Item>EO/IR Maintenance</NavDropdown.Item>
                                </LinkContainer>

                                {/*   SYSTEM SALES  */}
                                <LinkContainer to='/systemsales'>
                                    <NavDropdown.Item>System Sales</NavDropdown.Item>
                                </LinkContainer>

                                {/*   EO / IR PARTS  */}
                                <LinkContainer to='/eoir/parts'>
                                    <NavDropdown.Item>EO/IR Parts</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            {/*  TEAM  */}
                            <LinkContainer to='/team'>
                                <Nav.Link>
                                    Team
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )

};

export default DesktopBottomHeader