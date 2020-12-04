import React from 'react'
import { Route } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
import SearchBox from "./SearchBox";
import { CART_RESET } from "../constants/cartConstants";


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
        <header>
            {/*<Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className='navbar'>*/}
            <Navbar expand="lg" collapseOnSelect className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <Container >
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Route render={({ history}) => <SearchBox history={history} />} />

                        <Nav className="ml-auto">

                            <LinkContainer to='/products'>
                                <Nav.Link>
                                    <i className="fas fa-plane"> </i> Products
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'> </i> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id={'username'}>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'> </i> Sign in
                                </Nav.Link>
                            </LinkContainer>
                            }

                            {!userInfo && (
                                <LinkContainer to='/Register'>
                                    <Nav.Link><i className='fas fa-user'> </i> Register
                                    </Nav.Link>
                                </LinkContainer>)
                            }

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
    )
};
export default Header