import React from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../../actions/userActions'
import SearchBox from "../SearchBox";
import {CART_RESET} from "../../constants/cartConstants";
import logo from '../../images/general/Final-Logo-Horizontal.png'
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
            <header className='m-auto  header d-block p-0 col-xs-12'>

                <Navbar expand="md"
                        collapseOnSelect
                        style={{backgroundColor: 'black'}}
                        className='
                            {/*topNav*/}
                            navbar
                            navbar-dark
                            navbar-expand-md
                            ml-auto
                            my-auto
                            px-0
                            py-3
                            col-xs-12
                            border-0'
                >
                    <Container
                        style={{backgroundColor: 'black'}}
                    >

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


                            <Nav className='px-3'>

                                {/*  BROWSE PRODUCTS  */}
                                <LinkContainer className='mx-1' to='/products'>
                                    <Nav.Link>
                                        Browse Products
                                    </Nav.Link>
                                </LinkContainer>

                                {/*  AIR CRAFT SERVICES  */}
                                <NavDropdown style={{zIndex: '100'}}
                                             className='mx-1 navDropdown'
                                             title='Aircraft Services'
                                             id='aircraftservicesmenu'
                                >
                                    {/*   AVIONICS  */}
                                    <LinkContainer to='/avionics'>
                                        <NavDropdown.Item> Avionics </NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   MAINTENANCE  */}
                                    <LinkContainer to='/maintenance'>
                                        <NavDropdown.Item> Maintenance </NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   AOG RESPONSE  */}
                                    <LinkContainer to='/aog'>
                                        <NavDropdown.Item>AOG Response </NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   ACQUISITIONS  */}
                                    <LinkContainer to='/acquisitions'>
                                        <NavDropdown.Item> Acquisitions </NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   AIRCRAFT PARTS  */}
                                    <LinkContainer to='/aircraftparts'>
                                        <NavDropdown.Item>Aircraft Parts </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                                {/*  EO/IR  */}
                                <NavDropdown style={{zIndex: '100'}}
                                             className='mx-1'
                                             title='EO/IR  Flir'
                                             id='eoirmenu'
                                >
                                    {/*   EO / IR MAINTENANCE */}
                                    <LinkContainer to='/eoir/maintenance'>
                                        <NavDropdown.Item>EO/IR Maintenance </NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   SYSTEM SALES  */}
                                    <LinkContainer to='/systemsales'>
                                        <NavDropdown.Item>System Sales </NavDropdown.Item>
                                    </LinkContainer>

                                    {/*   EO / IR PARTS  */}
                                    <LinkContainer to='/eoir/parts'>
                                        <NavDropdown.Item>EO/IR</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                                {/*  TEAM  */}
                                <LinkContainer to='/team'>
                                    <Nav.Link>
                                        Meet the Team
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>

                            {/*   SOCIAL ICONS   */}
                            <SocialIcons socialClassName={'col-md-2 col-sm-4 px-3 d-inline-block justify-content-end'}
                                         socialStyle={{fontSize: '1.8em'}}
                                         contactClassName={'d-none'}
                            />

                            <Nav className='px-3'>
                                {/*  PROFILE  /  SIGN IN  */}
                                {userInfo ? (
                                    <NavDropdown style={{zIndex: '100'}}
                                                 title={userInfo.name}
                                                 id={'username'}
                                    >
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                <i style={{fontSize: '1.8em'}} className="pr-2 fas fa-user-cog"> </i> Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>

                                        <NavDropdown.Item onClick={logoutHandler}>
                                            {/*<span className='socialIcons'>*/}
                                            {/*<i style={{fontSize: '1.8em'}} className="fas fa-sign-out-alt"> </i>*/}
                                            <i style={{fontSize: '1.8em'}}
                                               className="pr-2 fal fa-plane-departure"> </i> Log out
                                            {/*</span>*/}
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                ) : <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <Button className='px-3 py-1 rounded-pill global_bisonRedBgWhiteHoverBgBtn'>
                                            {/*Log in*/}
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
                                    >
                                        <LinkContainer to='/admin/userlist'>
                                            <NavDropdown.Item>Users</NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/admin/productlist'>
                                            <NavDropdown.Item> Products </NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/admin/orderlist'>
                                            <NavDropdown.Item>Orders</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                )}


                                {/*  CONTACT US  */}
                                <LinkContainer className='mx-1' to='/'>
                                    <Nav.Link>
                                        <Button className='px-3 py-1 rounded-pill global_bisonRedBgWhiteHoverBgBtn'>
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