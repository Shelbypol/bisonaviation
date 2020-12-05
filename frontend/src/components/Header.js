import React from 'react'
import { Route } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from "./SearchBox";
import { CART_RESET } from "../constants/cartConstants";
import logo from '../images/activeImg/Final-Logo-Horizontal.png'

const Header = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        // window.localStorage.clear();
        dispatch({ type: CART_RESET});
        dispatch(logout());
    };


    return (
        <>
        <header>
            <Navbar expand="lg" collapseOnSelect className='navbar navbar-expand-lg navbar-dark bg-primary py-1'>
                <Container >
                    {/*  LOGO  */}
                    <LinkContainer to='/'>
                        <img id='logoNav' src={logo} className='img-fluid' alt="Bison Aviation"/>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        {/*/!*  SEARCH BOX  *!/*/}
                        <Route render={({ history}) => <SearchBox history={history} />} />

                        <Nav className="ml-auto">

                            {/*  WISH LIST  */}
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className="fas fa-plane"> </i> Wishlist
                                </Nav.Link>
                            </LinkContainer>

                            {/*  PROFILE  /  SIGN IN  */}
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id={'username'}>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item><i className="fas fa-user-cog"> </i>  Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}> <i className="fas fa-sign-out-alt"> </i> Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-sign-in-alt'> </i> Sign in
                                </Nav.Link>
                            </LinkContainer>
                            }
                            {/*  REGISTER  */}
                            {!userInfo && (
                                <LinkContainer to='/Register'>
                                    <Nav.Link><i className='fas fa-user'> </i> Register
                                    </Nav.Link>
                                </LinkContainer>)
                            }

                            {/*  ADMIN DROPDOWN  */}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
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
        </header>

            {/*      SECOND HEADER       */}
            <header className='sticky-top bottomHeader'>
                <Navbar expand="lg" collapseOnSelect className='navbar navbar-expand-lg bg-light py-0'>
                    <Container >
                        {/*  SEARCH BOX  */}

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                        {/*<Route render={({ history}) => <SearchBox history={history} />} />*/}

                            <Nav className="m-auto">

                                {/*  BROWSE PRODUCTS  */}
                                <LinkContainer to='/products'>
                                    <Nav.Link>
                                        Browse Products
                                    </Nav.Link>
                                </LinkContainer>

                                    {/*  AIR CRAFT SERVICES  */}
                                    <NavDropdown  title='Aircraft Services' id='aircraftservicesmenu'>
                                        <NavDropdown.Item >Avionics</NavDropdown.Item>
                                        <NavDropdown.Item >Maintenance</NavDropdown.Item>
                                        <NavDropdown.Item >AOG Response</NavDropdown.Item>
                                        <NavDropdown.Item >Acquisitions</NavDropdown.Item>
                                        <NavDropdown.Item >Aircraft Parts</NavDropdown.Item>
                                    </NavDropdown>

                                {/*  EO/IR  */}
                                <NavDropdown  title='EO/IR' id='eoirmenu'>
                                    <NavDropdown.Item >EO/IR Maintenance</NavDropdown.Item>
                                    <NavDropdown.Item >System Sales</NavDropdown.Item>
                                    <NavDropdown.Item >EO/IR Parts</NavDropdown.Item>
                                </NavDropdown>

                                {/*  TEAM  */}
                                <LinkContainer to='/products'>
                                    <Nav.Link>
                                        Meet our Team
                                    </Nav.Link>
                                </LinkContainer>

                                {/*  LOCATIONS  */}
                                <NavDropdown  title='Locations' id='locationsmenu'>
                                    <NavDropdown.Item >Bison Aviation@scl</NavDropdown.Item>
                                    <NavDropdown.Item >Coming Soon - 2Q2020</NavDropdown.Item>
                                </NavDropdown>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            </>



    )
};
export default Header