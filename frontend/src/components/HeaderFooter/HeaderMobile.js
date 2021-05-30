import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Nav, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../../actions/userActions'
import './HeaderMobile.css'
import {CART_RESET} from "../../constants/cartConstants";
import logo from '../../images/bg-graphics/graphics/Final-Logo-Horizontal.png'
import SocialIcons from "../SocialIcons/SocialIcons";


const HeaderMobile = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
    }, [cartItems]);

    const logoutHandler = () => {
        // window.localStorage.clear();
        dispatch({type: CART_RESET});
        dispatch(logout());
    };

    return (
        <>
            <header className='m-auto header d-block p-0 col-xs-12 '>
                <Navbar expand="xl"
                        collapseOnSelect
                        style={{backgroundColor: 'black'}}
                        className='
                            navbar
                            navbar-dark
                            navbar-expand-xl
                            ml-auto
                            mb-n4
                            px-0
                            pt-3
                            mb-0
                            col-xs-12
                            border-0'
                >

                    {/*  LOGO  */}
                    <LinkContainer className='col-xs-2' to='/'>
                        <img src={logo}
                             className='HeaderMobile_logo pb-3'
                             alt="Bison Aviation"
                        />
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                                   className={cartItems.length !== 0 && ('borderBlink')}/>
                    <Navbar.Collapse id="basic-navbar-nav border">


                        {/*  PROFILE  /  SIGN IN  */}
                        {userInfo && (
                            <LinkContainer to='/profile'
                                           className='HeaderMobile_text d-flex justify-content-start global_blue'>
                                <Nav.Link>
                                    <h5 className='global_goldenrod m-0 pl-2'>
                                        &nbsp; {userInfo.name}
                                        <i className="fas fa-user-cog"> </i>
                                    </h5>
                                </Nav.Link>
                            </LinkContainer>
                        )}


                        {/*  ADMIN DROPDOWN  */}
                        {userInfo && userInfo.isAdmin && (
                            <>
                                <LinkContainer to='/admin/userlist'
                                               className='HeaderMobile_text-inverted d-flex justify-content-start global_goldenrod-border-bottom global_goldenrod-border-top'>
                                    <Nav.Link>
                                        Admin - <span className='global_white'>&nbsp;<i>Users</i></span>
                                    </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/admin/productlist'
                                               className='HeaderMobile_text-inverted d-flex justify-content-start global_goldenrod-border-bottom'>
                                    <Nav.Link>
                                        Admin - <span className='global_white'>&nbsp; <i>Products</i></span>
                                    </Nav.Link>
                                </LinkContainer>
                            </>
                        )}

                        {/*  SOCIAL MEDIA ICONS  */}
                        <LinkContainer className='HeaderMobile_text HeaderMobile_top-rounded-border py-3'
                                       to='/'>
                            <Row className='m-0 p-0 '>
                                <Col xs={4} className='m-0 p-0 d-flex justify-content-center'>
                                    <Nav.Link>
                                        <i className="fab fa-facebook global_white MobileHeader_social-icons"> </i>
                                    </Nav.Link>
                                </Col>
                                <Col xs={4} className='m-0 p-0 d-flex justify-content-center'>
                                    <Nav.Link>
                                        <i className="fab fa-instagram global_white MobileHeader_social-icons"> </i>
                                    </Nav.Link>
                                </Col>
                                <Col xs={4} className='m-0 p-0 d-flex justify-content-center'>
                                    <Nav.Link>
                                        <i className="fab fa-twitter global_white MobileHeader_social-icons"> </i>
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </LinkContainer>


                        {/*/!*  PROFILE  /  SIGN IN  *!/*/}
                        {userInfo ? (
                            <>
                                <Nav.Link onClick={logoutHandler}
                                          className='HeaderMobile_text d-flex justify-content-start py-3 '>
                                    Log out
                                </Nav.Link>
                            </>

                        ) : (
                            <>

                                <LinkContainer to='/login'>
                                    <Nav.Link className='HeaderMobile_text d-flex justify-content-start py-3'>
                                        <span className='global_goldenrod'>
                                        Login - Register
                                        </span>
                                    </Nav.Link>
                                </LinkContainer>

                            </>
                        )}


                        {/*  WISHLIST  */}
                        <LinkContainer className='mx-0 pb-0 pt-3 HeaderMobile_text d-flex justify-content-start'
                                       to='/wishlist'>
                            <Nav.Link>
                                <p className={cartItems.length !== 0 && ('borderBlink')}>
                                    <p className='global_white d-inline pl-2' style={{fontSize: '5vw'}}>
                                        {cartItems.length}&nbsp;
                                    </p>

                                    <p className='global_red d-inline'>
                                        <i className=" fal fa-envelope-open-text HeaderMobile_social-icons"> </i>
                                    </p>

                                </p>
                            </Nav.Link>
                        </LinkContainer>
                        {/*)}*/}

                        {/*  BROWSE PRODUCTS  */}
                        <LinkContainer className='HeaderMobile_text d-flex justify-content-start'
                                       to='/products'>
                            <Nav.Link>
                                Browse Products
                            </Nav.Link>
                        </LinkContainer>

                        {/*   AVIONICS  */}
                        <LinkContainer to='/avionics'
                                       className='HeaderMobile_text d-flex justify-content-start'>
                            <Nav.Link>
                                {/*<h5 className='global_white m-0 pl-2'>*/}
                                Avionics
                                {/*</h5>*/}
                            </Nav.Link>
                        </LinkContainer>

                        {/*   MAINTENANCE  */}
                        <LinkContainer to='/maintenance'
                                       className='HeaderMobile_text d-flex justify-content-start'>
                            <Nav.Link>
                                {/*<h5 className='global_white m-0 pl-2'>*/}
                                Maintenance
                                {/*</h5>*/}
                            </Nav.Link>
                        </LinkContainer>


                        {/*  EO/IR  */}
                        <LinkContainer to='/flir'
                                       className='HeaderMobile_text d-flex justify-content-start'>
                            <Nav.Link>
                                EO/IR Flir
                            </Nav.Link>
                        </LinkContainer>

                        {/*  TEAM  */}
                        <LinkContainer to='/team' className='HeaderMobile_text d-flex justify-content-start'>
                            <Nav.Link>
                                Team
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer
                            className='HeaderMobile_text global_goldenrod d-flex justify-content-start mb-5'
                            to='/contact'>
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </LinkContainer>


                        {/*/!*  PROFILE  /  SIGN IN  *!/*/}
                        {/*{userInfo ? (*/}
                        {/*    <>*/}
                        {/*        /!*  CONTACT US  *!/*/}
                        {/*        /!*<LinkContainer*!/*/}
                        {/*        /!*    className='HeaderMobile_text global_goldenrod d-flex justify-content-start'*!/*/}
                        {/*        /!*    to='/contact'>*!/*/}
                        {/*        /!*    <Nav.Link>*!/*/}
                        {/*        /!*        Contact*!/*/}
                        {/*        /!*    </Nav.Link>*!/*/}
                        {/*        /!*</LinkContainer>*!/*/}

                        {/*        <Nav.Link onClick={logoutHandler}*/}
                        {/*                  className='HeaderMobile_text d-flex justify-content-start pt-3 pb-5 '>*/}
                        {/*            Log out*/}
                        {/*        </Nav.Link>*/}
                        {/*    </>*/}

                        {/*) : (*/}
                        {/*    <>*/}
                        {/*        <LinkContainer to='/register'*/}
                        {/*                       className='HeaderMobile_text d-flex justify-content-start'>*/}
                        {/*            <Nav.Link>*/}
                        {/*                Register*/}
                        {/*            </Nav.Link>*/}
                        {/*        </LinkContainer>*/}

                        {/*        /!*  CONTACT US  *!/*/}
                        {/*        /!*<LinkContainer*!/*/}
                        {/*        /!*    className='HeaderMobile_text global_goldenrod d-flex justify-content-start'*!/*/}
                        {/*        /!*    to='/contact'>*!/*/}
                        {/*        /!*    <Nav.Link>*!/*/}
                        {/*        /!*        Contact*!/*/}
                        {/*        /!*    </Nav.Link>*!/*/}
                        {/*        /!*</LinkContainer>*!/*/}

                        {/*        <LinkContainer to='/login'>*/}
                        {/*            <Nav.Link className='HeaderMobile_text-inverted d-flex justify-content-start py-3 pb-5'>*/}
                        {/*                Login*/}
                        {/*            </Nav.Link>*/}
                        {/*        </LinkContainer>*/}


                        {/*</>*/}
                        {/*)}*/}


                    </Navbar.Collapse>
                </Navbar>
            </header>

        </>

    )
};
export default HeaderMobile