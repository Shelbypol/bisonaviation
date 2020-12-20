import React from "react";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../constants/cartConstants";
import {logout} from "../actions/userActions";


const DesktopStickyHeader = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
        // window.localStorage.clear();
        dispatch({type: CART_RESET});
        dispatch(logout());
    };

    return (
        <>
            <header className='sticky-top stickyHeader m-0 h-50'>

                <Navbar className='navbar navbar-expand-lg navbar-light bg-light mx-auto my-0 p-0 border-0'>

                    <Container className='col-sm-12 col-md-12'>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className='col-md-8 m-0 stickyNavBtn justify-content-end'>

                                {/*  BROWSE PRODUCTS  */}
                                <LinkContainer className='mx-1' to='/products'>
                                    <Nav.Link>
                                        Products
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

                            {/*   PROFILE BTNS  */}
                            <Nav className='col-md-4 justify-content-end'>

                                {/*  PROFILE  /  SIGN IN  */}
                                {userInfo ? (
                                    <>
                                        <LinkContainer to='/profile' className='pr-5'>
                                            <Nav.Link>
                                                Welcome, {userInfo.name}
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to='/profile'>
                                            <Nav.Link onClick={logoutHandler}>
                                                {/*<Button onClick={logoutHandler} className='rounded-pill headerBtn'>*/}
                                                <i style={{fontSize: '1.8em'}}
                                                   className="pr-2 fal fa-plane-departure"> </i> Log out
                                                {/*</Button>*/}
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>

                                ) : <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <Button className='px-3 py-1 rounded-pill bisonRedBtn iconHidden'>
                                     <span className='hideIcon'>
                                         <i style={{fontSize: '1.5em'}}
                                            className=" fal fa-plane-arrival "> </i>
                                     </span>
                                            <span className='hideWords'>Login</span>
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                                }
                                {/*  REGISTER  */}
                                {!userInfo && (
                                    <LinkContainer to='/Register'>
                                        {/*<Nav.Link><i className='fas fa-user'> </i> Register*/}
                                        <Nav.Link>
                                            <Button className='px-3 py-1 rounded-pill bisonRedBtn '>
                                               {/*<span className=''>*/}
                                                 {/*<i style={{fontSize: '2em'}}*/}
                                                 {/*   className="pr-2 fal fal fa-clipboard-user"> </i>*/}
                                               {/*</span>*/}
                                                <span className=''>Register</span>
                                            </Button>
                                        </Nav.Link>
                                    </LinkContainer>)
                                }

                                {/*  ADMIN DROPDOWN  */}
                                {userInfo && userInfo.isAdmin && (
                                    <NavDropdown style={{zIndex: '100'}} title='Admin' id='adminmenu'>
                                        <LinkContainer to='/admin/userlist'>
                                            <NavDropdown.Item>Users</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/admin/productlist'>
                                            <NavDropdown.Item>Products</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/admin/orderlist'>
                                            <NavDropdown.Item>Orders</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='blackFade col-sm-12 position-sticky'> </div>
            </header>
        </>

    )

};

export default DesktopStickyHeader