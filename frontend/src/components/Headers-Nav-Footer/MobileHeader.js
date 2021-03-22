import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../../actions/userActions'
import SearchBox from "../SearchBox";
import {CART_RESET} from "../../constants/cartConstants";
import logo from '../../images/bg-graphics/graphics/Final-Logo-Horizontal.png'
import SocialIcons from "../SocialIcons";

const MobileHeader = () => {

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
            <header className='m-auto header d-block p-0 col-xs-12'>

                <Navbar expand="xl"
                        collapseOnSelect
                        style={{backgroundColor: 'black'}}
                        className='
                            {/*topNav*/}
                            navbar
                            navbar-dark
                            navbar-expand-xl
                            ml-auto
                            my-auto
                            px-0
                            py-3
                            col-xs-12
                            border-0'
                >
                    <Container style={{backgroundColor: 'black'}}>

                        {/*  LOGO  */}
                        <LinkContainer className='col-xs-2' to='/'>
                            <img src={logo}
                                 className='MobileHeader_logo pb-3'
                                 alt="Bison Aviation"
                            />
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            {/*/!*  SEARCH BOX  *!/*/}
                            <Route render={({history}) => <SearchBox history={history}
                                                                     searchSize={'sm'}
                                                                     formClasses={'col-12 my-4'}
                                                                     searchClasses={'col-10'}
                                                                     btnSize={'sm'}
                                                                     btnClasses={'global_bisonWhiteBgBtnSearch MobileHeader_search_btn_padding px-1 col-2 rounded-right'}
                                                                     // btnStyle={{paddingTop: '2em', paddingBottom: '1.45em'}}
                                                                     // iconStyle={{fontSize: '1.53em'}}
                            />}/>

                            {/*   SOCIAL ICONS   */}
                            <SocialIcons socialClassName={'mr-5 mb-5'}
                                         facebookClassName={' d-flex justify-content-center'}
                                         instaClassName={' d-flex justify-content-center'}
                                         twitterClassName={' d-flex justify-content-center'}
                                         contactClassName={'d-none'}
                            />

                                {/*  BROWSE PRODUCTS  */}
                                <LinkContainer className='mx-1 MobileHeader_text d-flex justify-content-center' to='/products'>
                                    <Nav.Link>
                                        Browse Products
                                    </Nav.Link>
                                </LinkContainer>

                                    {/*   AVIONICS  */}
                                    <LinkContainer to='/avionics' className='MobileHeader_text d-flex justify-content-center'>
                                        <Nav.Link> Avionics </Nav.Link>
                                    </LinkContainer>

                                    {/*   MAINTENANCE  */}
                                    <LinkContainer to='/maintenance' className='MobileHeader_text d-flex justify-content-center'>
                                        <Nav.Link> Maintenance </Nav.Link>
                                    </LinkContainer>


                                {/*  EO/IR  */}
                                    <LinkContainer to='/eoir/maintenance' className='MobileHeader_text d-flex justify-content-center'>
                                        <Nav.Link>EO/IR Flir </Nav.Link>
                                    </LinkContainer>

                                {/*  TEAM  */}
                                <LinkContainer to='/team' className='MobileHeader_text d-flex justify-content-center'>
                                    <Nav.Link>
                                        Team
                                    </Nav.Link>
                                </LinkContainer>


                            <Nav className='px-3'>
                                {/*  PROFILE  /  SIGN IN  */}
                                {userInfo ? (
                                    <NavDropdown style={{zIndex: '100'}}
                                                 title={userInfo.name}
                                                 id={'username'}
                                                 className='MobileHeader_text'
                                    >
                                        <LinkContainer to='/profile' className='MobileHeader_text'>
                                            <NavDropdown.Item>
                                                <i style={{fontSize: '1.8em'}} className="pr-2 fas fa-user-cog"> </i> Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>

                                        <NavDropdown.Item onClick={logoutHandler} className='MobileHeader_text'>
                                            <i style={{fontSize: '1.8em'}} className="pr-2 fal fa-plane-departure"> </i> Log out
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                ) : <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <Button className='px-3 py-1 rounded global_bisonRedBgWhiteHoverBgBtn'>
                                            <i style={{fontSize: '1.8em'}}
                                               className="pr-2 fal fa-plane-arrival"> </i> Login
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                                }

                                {/*  ADMIN DROPDOWN  */}
                                {userInfo && userInfo.isAdmin && (
                                    <NavDropdown style={{zIndex: '100'}}
                                                 title='Admin'
                                                 id='adminmenu'
                                                 className='MobileHeader_text'
                                    >
                                        <LinkContainer to='/admin/userlist' className='MobileHeader_text'>
                                            <NavDropdown.Item>Users</NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/admin/productlist' className='MobileHeader_text'>
                                            <NavDropdown.Item> Products </NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/admin/orderlist' className='MobileHeader_text'>
                                            <NavDropdown.Item>Orders</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                )}



                                {/*  CONTACT US  */}
                                <LinkContainer className='' to='/'>
                                    <Nav.Link>
                                        <Button className='px-3 py-1 rounded global_bisonRedBgWhiteHoverBgBtn'>
                                            Contact Us
                                        </Button>
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