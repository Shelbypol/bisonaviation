import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Nav, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../../actions/userActions'
import SearchBox from "../SearchBox";
import {CART_RESET} from "../../constants/cartConstants";
import logo from '../../images/bg-graphics/graphics/Final-Logo-Horizontal.png'
import SocialIcons from "../SocialIcons";
import WishListTab from "../Wishlist/WishListTab";

const MobileHeader = () => {

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
            <header className='m-auto header d-block p-0 col-xs-12 ' style={{zIndex: '3'}}>

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
                             className='MobileHeader_logo pb-3'
                             alt="Bison Aviation"
                        />
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                                   className={cartItems.length !== 0 && ('borderBlink')}/>
                    <Navbar.Collapse id="basic-navbar-nav border">

                        {/*/!*  SEARCH BOX  *!/*/}
                        <Route render={({history}) => <SearchBox history={history}
                                                                 searchSize={'sm'}
                                                                 formClasses={'col-sm-12 col-md-none my-4'}
                                                                 searchClasses={'col-10'}
                                                                 btnSize={'sm'}
                                                                 iconClass={'fal fa-search p-0 m-0'}
                                                                 btnClasses={'global_blood-red-bg text-white MobileHeader_search_btn_padding px-1 col-2'}

                        />}/>

                        {/*   SOCIAL ICONS   */}
                        <SocialIcons socialClassName={'mr-5 mb-5'}
                                     facebookClassName={' d-flex justify-content-center'}
                                     instaClassName={' d-flex justify-content-center'}
                                     twitterClassName={' d-flex justify-content-center'}
                                     contactClassName={'d-none'}
                        />

                        {/*  PROFILE  /  SIGN IN  */}
                        {userInfo && (
                            <LinkContainer to='/profile'
                                           className='MobileHeader_text d-flex justify-content-center global_blue'>
                                <Nav.Link>
                                    {userInfo.name}
                                </Nav.Link>
                            </LinkContainer>
                        )}

                        {/*  WISHLIST  */}
                                {cartItems.length !== 0 && (
                        <LinkContainer className='mx-0 pb-0 pt-3 MobileHeader_text d-flex justify-content-center'
                                       to='/wishlist'>
                            <Nav.Link>
                                    <p className={cartItems.length !== 0 && ('borderBlink')}>
                                        <p className='text-white d-inline' style={{fontSize: '1.3em'}}>
                                            &nbsp;{cartItems.length}&nbsp;
                                        </p>

                                        <p className='global_red d-inline'>
                                            <i style={{fontSize: '1.3em'}} className=" fal fa-envelope-open-text"> </i>
                                        </p>

                                    </p>
                            </Nav.Link>
                        </LinkContainer>
                                )}

                        {/*  BROWSE PRODUCTS  */}
                        <LinkContainer className='mx-1 MobileHeader_text d-flex justify-content-center'
                                       to='/products'>
                            <Nav.Link>
                                Browse Products
                            </Nav.Link>
                        </LinkContainer>

                        {/*   AVIONICS  */}
                        <LinkContainer to='/avionics'
                                       className='MobileHeader_text d-flex justify-content-center'>
                            <Nav.Link> Avionics </Nav.Link>
                        </LinkContainer>

                        {/*   MAINTENANCE  */}
                        <LinkContainer to='/maintenance'
                                       className='MobileHeader_text d-flex justify-content-center'>
                            <Nav.Link> Maintenance </Nav.Link>
                        </LinkContainer>


                        {/*  EO/IR  */}
                        <LinkContainer to='/flir'
                                       className='MobileHeader_text d-flex justify-content-center'>
                            <Nav.Link>EO/IR Flir </Nav.Link>
                        </LinkContainer>

                        {/*  TEAM  */}
                        <LinkContainer to='/team' className='MobileHeader_text d-flex justify-content-center'>
                            <Nav.Link>
                                Team
                            </Nav.Link>
                        </LinkContainer>

                        {/*  CONTACT US  */}
                        <LinkContainer className='MobileHeader_text d-flex justify-content-center'
                                       to='/contact'>
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </LinkContainer>

                        {/*  ADMIN DROPDOWN  */}
                        {userInfo && userInfo.isAdmin && (
                            <>
                                <LinkContainer to='/admin/userlist'
                                               className='MobileHeaderAdmin_text d-flex justify-content-center'>
                                    <Nav.Link>Users</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/admin/productlist'
                                               className='MobileHeaderAdmin_text d-flex justify-content-center'>
                                    <Nav.Link> Products </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/admin/orderlist'
                                               className='mb-5 MobileHeaderAdmin_text d-flex justify-content-center'>
                                    <Nav.Link>Orders</Nav.Link>
                                </LinkContainer>
                            </>
                        )}


                        {/*  PROFILE  /  SIGN IN  */}
                        {userInfo ? (

                            <Nav.Link onClick={logoutHandler}
                                      className='MobileHeader_login-text d-flex justify-content-center'>
                                Log out
                            </Nav.Link>

                        ) : (
                            <>
                                <LinkContainer to='/register' className='MobileHeader_text d-flex justify-content-center'>
                                    <Nav.Link>
                                        Register
                                    </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/login'>
                                    <Nav.Link className='MobileHeader_login-text d-flex justify-content-center'>
                                        Login
                                    </Nav.Link>
                                </LinkContainer>

                            </>
                        )}


                    </Navbar.Collapse>
                </Navbar>
            </header>

        </>

    )
};
export default MobileHeader