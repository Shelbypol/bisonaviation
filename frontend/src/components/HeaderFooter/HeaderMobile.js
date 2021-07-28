import React, {useEffect} from 'react'
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
            <header className='m-auto header d-block p-0 col-xs-12'>
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
                             className='HeaderMobile_logo pb-1'
                             alt="Bison Aviation"
                        />
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                                   className={cartItems.length !== 0 && ('borderBlink')}/>
                    <Navbar.Collapse id="basic-navbar-nav border">

                        {/*  PROFILE  /  SIGN IN  */}
                        {userInfo && (

                            <>
                                <LinkContainer to='/profile'
                                               className='HeaderMobile_text d-flex justify-content-start HeaderMobile_top-rounded-border'>
                                    <Nav.Link>
                                            <i className="fas fa-user-cog global_goldenrod HeaderMobile_social-icons"> </i>
                                            &nbsp;&nbsp;{userInfo.name}
                                    </Nav.Link>
                                </LinkContainer>


                                {/*  ADMIN DROPDOWN  */}
                                {userInfo && userInfo.isAdmin && (
                                    <>
                                        <LinkContainer to='/admin/userlist'
                                                       className='HeaderMobile_text d-flex justify-content-start'>
                                            <Nav.Link className='global_goldenrodtxthoverwhite'>
                                                 <span className='pl-3'>&nbsp;<i className='global_goldenrod-border-left'>&nbsp;Users </i></span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to='/admin/productlist'
                                                       className='HeaderMobile_text d-flex justify-content-start'>
                                            <Nav.Link className='global_goldenrodtxthoverwhite'>
                                                 <span className='pl-3'>&nbsp;<i className='global_goldenrod-border-left '>&nbsp;Products</i></span>
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}
                            </>
                        )}

                        {/*/!*  PROFILE  /  SIGN IN  *!/*/}
                        {!userInfo && (
                            <>

                                <LinkContainer to='/login'>
                                    <Nav.Link className='HeaderMobile_text d-flex justify-content-start py-3 HeaderMobile_top-rounded-border'>
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
                                Avionics
                            </Nav.Link>
                        </LinkContainer>

                        {/*   MAINTENANCE  */}
                        <LinkContainer to='/maintenance'
                                       className='HeaderMobile_text d-flex justify-content-start'>
                            <Nav.Link>
                                Maintenance
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
                            className='HeaderMobile_text global_goldenrod d-flex justify-content-start'
                            to='/contact'>
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </LinkContainer>

                        <Nav.Link onClick={logoutHandler}
                                  className='HeaderMobile_text border-0 d-flex justify-content-end py-3 ml-2'>
                            <h6 className="fal fa-sign-out border-0 global_goldenrod HeaderMobile_social-icons"> </h6>
                        </Nav.Link>

                    </Navbar.Collapse>
                </Navbar>
            </header>

        </>

    )
};
export default HeaderMobile