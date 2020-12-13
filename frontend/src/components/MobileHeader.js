import React from 'react'
import { Route } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from "./SearchBox";
import { CART_RESET } from "../constants/cartConstants";
import logo from '../images/activeImg/Final-Logo-Horizontal.png'

const MobileHeader = () => {

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
            <header style={{borderBottom: '3px solid red'}} className='m-auto header d-block p-0 col-xs-12'>

                <Navbar expand="md" collapseOnSelect style={{backgroundColor: 'black'}} className='topNav navbar navbar-dark navbar-expand-lg m-auto px-0 py-3'>
                    <Container className='col-xs-12 ml-5'>

                        {/*  LOGO  */}
                        <LinkContainer className='col-xs-2' to='/'>
                            <img src={logo} className='logoNav pb-2' alt="Bison Aviation"/>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            {/*/!*  SEARCH BOX  *!/*/}
                            <Route render={({ history}) => <SearchBox history={history} />} />

                            <Nav className='col-md-5 col-xs-7 navFont'>

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
                                    <Nav.Link><i className='fas fa-sign-in-alt'> </i> Log in
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
                                        Team
                                    </Nav.Link>
                                </LinkContainer>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

        </>

    )
};
export default MobileHeader