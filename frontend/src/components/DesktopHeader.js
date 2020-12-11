import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from "./SearchBox";
import {CART_RESET} from "../constants/cartConstants";
import logo from '../images/activeImg/Final-Logo-Horizontal.png'
import '../style/homeCarousel.css'
import DesktopBottomHeader from "./DesktopBottomHeader";

const DesktopHeader = () => {

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
            <header className='topHeader d-block p-0 col-sm-12'>

                <Navbar expand="md" collapseOnSelect style={{backgroundColor: 'black'}}
                        className='topNav navbar navbar-dark navbar-expand-lg m-auto p-0'>
                    <Container className='col-xs-12 ml-5'>

                        {/*  LOGO  */}
                        <LinkContainer className='col-xs-2' to='/'>
                            <img src={logo} className='logoNav pb-1 ml-3' alt="Bison Aviation"/>

                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            {/*/!*  SEARCH BOX  *!/*/}
                            <Route
                                render={({history}) => <SearchBox className='col-md-5 col-xs-0' history={history}/>}/>

                            <Nav className='col-md-5 col-xs-7 top-nav-item'>

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
                                            <NavDropdown.Item><i
                                                className="fas fa-user-cog"> </i> Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}> <i
                                            className="fas fa-sign-out-alt"> </i> Logout</NavDropdown.Item>
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
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <DesktopBottomHeader />

        </>

    )
};
export default DesktopHeader