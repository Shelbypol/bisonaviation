import React from 'react'
import { Route } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from "./SearchBox";
import { CART_RESET } from "../constants/cartConstants";
import logo from '../images/activeImg/Final-Logo-Horizontal.png'
import divider from '../images/graphics/divider1.png'

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
        <header className='topHeader col-sm-12 col-xl-10 m-xl-auto'>

            <Navbar expand="sm" collapseOnSelect className='topNav navbar navbar-expand-lg navbar-dark bg-primary my-0 py-0'>
                <Container >
                    {/*  LOGO  */}
                    <LinkContainer to='/'>
                        <img id='logoNav' src={logo} className='img-fluid pb-1' alt="Bison Aviation"/>

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
                                <NavDropdown style={{zIndex: '100'}} title={userInfo.name} id={'username'}>
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
        </header>
            {/*<img id='dividerImg' className='img-fluid' src={divider} alt=""/>*/}


            {/*      SECOND HEADER       */}
            <header className='col-sm-12 col-xl-10 m-xl-auto sticky-top bottomHeader'>

                <Navbar className='navbar navbar-expand-lg navbar-light bg-light mb-0 mt-1 py-0 border-0'>

                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="m-auto">

                                {/*  BROWSE PRODUCTS  */}
                                <LinkContainer className='mx-1' to='/products'>
                                    <Nav.Link>
                                        Browse Products
                                    </Nav.Link>
                                </LinkContainer>

                                    {/*  AIR CRAFT SERVICES  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1'  title='Aircraft Services' id='aircraftservicesmenu'>
                                        {/*   AVIONICS  */}
                                        <LinkContainer to='/avionics'>
                                            <NavDropdown.Item >Avionics</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   MAINTENANCE  */}
                                        <LinkContainer to='/maintenance'>
                                            <NavDropdown.Item >Maintenance</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   AOG RESPONSE  */}
                                        <LinkContainer to='/aog'>
                                            <NavDropdown.Item >AOG Response</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   ACQUISITIONS  */}
                                        <LinkContainer to='/acquisitions'>
                                            <NavDropdown.Item >Acquisitions</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   AIRCRAFT PARTS  */}
                                        <LinkContainer to='/aircraftparts'>
                                            <NavDropdown.Item >Aircraft Parts</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                {/*  EO/IR  */}
                                <NavDropdown style={{zIndex: '100'}} className='mx-1'  title='EO/IR' id='eoirmenu'>
                                    {/*   EO / IR MAINTENANCE */}
                                    <LinkContainer to='/eoir/maintenance'>
                                        <NavDropdown.Item >EO/IR Maintenance</NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   SYSTEM SALES  */}
                                    <LinkContainer to='/systemsales'>
                                        <NavDropdown.Item >System Sales</NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   EO / IR PARTS  */}
                                    <LinkContainer to='/eoir/parts'>
                                        <NavDropdown.Item >EO/IR Parts</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                                {/*  TEAM  */}
                                <LinkContainer to='/team'>
                                    <Nav.Link>
                                        Meet our Team
                                    </Nav.Link>
                                </LinkContainer>

                                {/*  LOCATIONS  */}
                                {/*<NavDropdown style={{zIndex: '100'}} className='mx-1'  title='Locations' id='locationsmenu'>*/}
                                {/*    <NavDropdown.Item >Bison Aviation@scl</NavDropdown.Item>*/}
                                {/*    <NavDropdown.Item >Coming Soon - 2Q2020</NavDropdown.Item>*/}
                                {/*</NavDropdown>*/}

                                {/*/!*  SEARCH BOX  *!/*/}
                                {/*<Route render={({ history}) => <SearchBox className='ml-auto' history={history} />} />*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {/*<img id='dividerImg' className='img-fluid' src={divider} alt=""/>*/}
            </>

    )
};
export default Header