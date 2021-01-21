import React, {useState, useRef, useEffect} from "react";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import {Route} from "react-router-dom";
import SearchBox from "../SearchBox";

const StickyHeader = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
        // window.localStorage.clear();
        dispatch({type: CART_RESET});
        dispatch(logout());
    };


    // SHOW ON SCROLL
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current > currentScrollY && goingUp) {
                setGoingUp(false);
            }

            if (prevScrollY.current < currentScrollY && !goingUp) {
                setGoingUp(true);
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <>
            <header className='sticky-top m-0'>
            {/*<header className='sticky-top m-0' id='showSearch'>*/}

                <Navbar className='navbar navbar-expand-lg navbar-light bg-light m-0 p-0 border-0 '>

                    <Container className='col-sm-12'>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            {/*===============  SEARCH BAR  ==================*/}

                            {goingUp &&
                            <Nav className={'col-lg-3 ml-2 d-sm-none d-md-none d-lg-block'}>
                                <Route render={({history}) => <SearchBox history={history}
                                                                         searchSize={'sm'}
                                                                         searchClasses={'col-9'}
                                                                         btnSize={'sm'}
                                                                         btnClasses={'global_bisonWhiteBgBtnSearch StickyHeader_search_btn_padding px-1 col-2 rounded-right'}
                                />}/>
                            </Nav>
                            }

                            {/*============= NAV SHOW ON SCROLL ==============*/}

                            {goingUp ?
                                <Nav className='col-lg-5 col-md-6 justify-content-center global_accentFont'>

                                    {/*  BROWSE PRODUCTS  */}
                                    <LinkContainer className='mx-1' to='/products'>
                                        <Nav.Link>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  AIR CRAFT SERVICES  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown' title='Aircraft Services'
                                                 id='aircraftservicesmenu'>
                                        {/*   AVIONICS  */}
                                        <LinkContainer to='/avionics'>
                                            <NavDropdown.Item>Avionics</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   MAINTENANCE  */}
                                        <LinkContainer to='/maintenance'>
                                            <NavDropdown.Item>Maintenance</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   AOG RESPONSE  */}
                                        <LinkContainer to='/aog'>
                                            <NavDropdown.Item>AOG Response</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   ACQUISITIONS  */}
                                        <LinkContainer to='/acquisitions'>
                                            <NavDropdown.Item>Acquisitions</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   AIRCRAFT PARTS  */}
                                        <LinkContainer to='/aircraftparts'>
                                            <NavDropdown.Item>Aircraft Parts</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                    {/*  EO/IR  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown' title='EO/IR' id='eoirmenu'>
                                        {/*   EO / IR MAINTENANCE */}
                                        <LinkContainer to='/eoir/maintenance'>
                                            <NavDropdown.Item>EO/IR Maintenance</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   SYSTEM SALES  */}
                                        <LinkContainer to='/systemsales'>
                                            <NavDropdown.Item>System Sales</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   EO / IR PARTS  */}
                                        <LinkContainer to='/eoir/parts'>
                                            <NavDropdown.Item>EO/IR Parts</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                    {/*  TEAM  */}
                                    <LinkContainer to='/team'>
                                        <Nav.Link>
                                            Team
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav>

                                :
                                // ============= NAV HIDDEN ON SCROLL ==============
                                <Nav className='col-lg-8 col-md-6 justify-content-end global_accentFont'>

                                    {/*  BROWSE PRODUCTS  */}
                                    <LinkContainer className='mx-1' to='/products'>
                                        <Nav.Link>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  AIR CRAFT SERVICES  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown' title='Aircraft Services'
                                                 id='aircraftservicesmenu'>
                                        {/*   AVIONICS  */}
                                        <LinkContainer to='/avionics'>
                                            <NavDropdown.Item>Avionics</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   MAINTENANCE  */}
                                        <LinkContainer to='/maintenance'>
                                            <NavDropdown.Item>Maintenance</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   AOG RESPONSE  */}
                                        <LinkContainer to='/aog'>
                                            <NavDropdown.Item>AOG Response</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   ACQUISITIONS  */}
                                        <LinkContainer to='/acquisitions'>
                                            <NavDropdown.Item>Acquisitions</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   AIRCRAFT PARTS  */}
                                        <LinkContainer to='/aircraftparts'>
                                            <NavDropdown.Item>Aircraft Parts</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                    {/*  EO/IR  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown' title='EO/IR' id='eoirmenu'>
                                        {/*   EO / IR MAINTENANCE */}
                                        <LinkContainer to='/eoir/maintenance'>
                                            <NavDropdown.Item>EO/IR Maintenance</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   SYSTEM SALES  */}
                                        <LinkContainer to='/systemsales'>
                                            <NavDropdown.Item>System Sales</NavDropdown.Item>
                                        </LinkContainer>

                                        {/*   EO / IR PARTS  */}
                                        <LinkContainer to='/eoir/parts'>
                                            <NavDropdown.Item>EO/IR Parts</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                    {/*  TEAM  */}
                                    <LinkContainer to='/team'>
                                        <Nav.Link>
                                            Team
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            }

                            {/*============= PROFILE BTNS HIDDEN ON SCROLL ==============*/}
                            {/*   PROFILE BTNS  */}
                            {goingUp ?
                                <Nav className='col-lg-4 col-md-6 justify-content-end'>

                                    {/*  PROFILE  /  SIGN IN  */}
                                    {userInfo ? (
                                            <>
                                                <LinkContainer to='/profile'>
                                                    <Nav.Link>
                                                        <Button className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                            <span className='StickyHeader_hideWords'>
                                                                {userInfo.name}
                                                            </span>
                                                        <span className='StickyHeader_hideIcon'>Profile</span>
                                                    </Button>
                                                    </Nav.Link>
                                                </LinkContainer>

                                                <LinkContainer to='/profile'>
                                                    <Nav.Link onClick={logoutHandler}>
                                                        <Button
                                                            className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                   <span className='StickyHeader_hideWords'>
                                                     <i className='fal fa-plane-departure StickyHeader_icon-size'> </i>
                                                    </span>
                                                            <span className='StickyHeader_hideIcon'>Logout</span>
                                                        </Button>
                                                    </Nav.Link>
                                                </LinkContainer>
                                            </>

                                        ) :
                                        <LinkContainer to='/login'>
                                            <Nav.Link>
                                                <Button className='px-3 mr-n3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                 <span className='StickyHeader_hideWords'>
                                                     <i className='fal fa-plane-arrival StickyHeader_icon-size'> </i>
                                                 </span>
                                                    <span className='StickyHeader_hideIcon'>Login</span>
                                                </Button>
                                            </Nav.Link>
                                        </LinkContainer>
                                    }
                                    {/*  REGISTER  */}
                                    {!userInfo && (
                                        <LinkContainer to='/Register'>
                                            <Nav.Link>
                                                <Button className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                <span className='StickyHeader_hideWords'>
                                                    <i className='fal fa-clipboard-user StickyHeader_icon-size'> </i>
                                                </span>
                                                    <span className='StickyHeader_hideIcon'>Register</span>
                                                </Button>
                                            </Nav.Link>
                                        </LinkContainer>)
                                    }

                                    {/*  ADMIN DROPDOWN  */}
                                    {userInfo && userInfo.isAdmin && (
                                        <NavDropdown style={{zIndex: '1000'}} title='Admin' id='adminmenu'
                                                     className='mr-0 py-0 mt-2 whiteDropdown'>
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


                                    <LinkContainer to='/contact'>
                                        <Nav.Link>
                                            <Button className='px-3 py-0 mt-2 rounded-pill global_bisonRedBgWhiteHoverBgBtn StickyHeader_iconHidden '>
                                                {/* <span className='StickyHeader_hideIcon'>*/}
                                                {/*     Contact*/}
                                                {/* </span>*/}
                                                {/*<span className='StickyHeader_hideWords'>Contact</span>*/}
                                                <span className='StickyHeader_hideIcon'>
                                                     Contact
                                                 </span>
                                                <span className='StickyHeader_hideWords'>Contact</span>
                                            </Button>
                                        </Nav.Link>
                                    </LinkContainer>

                                </Nav>

                                :
                                // ============= LOGIN/REG CONTACT BTNS SHOW ON SCROLL ==============
                                <Nav className='col-lg-4 col-md-6 justify-content-end'>


                                    {/*  PROFILE  /  SIGN IN  */}
                                    {userInfo ? (
                                            <>
                                                <LinkContainer to='/profile'>
                                                    <Nav.Link>
                                                        <Button className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                            <span className='StickyHeader_hideWords'>
                                                                {userInfo.name}
                                                            </span>
                                                            <span className='StickyHeader_hideIcon'>Profile</span>
                                                        </Button>
                                                    </Nav.Link>
                                                </LinkContainer>

                                                <LinkContainer to='/profile'>
                                                    <Nav.Link onClick={logoutHandler}>
                                                        <Button
                                                            className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                   <span className='StickyHeader_hideWords'>
                                                     <i style={{fontSize: '1.5em'}}
                                                        className=" fal fa-plane-departure "> </i>
                                                    </span>
                                                            <span className='StickyHeader_hideIcon'>Logout</span>
                                                        </Button>
                                                    </Nav.Link>
                                                </LinkContainer>
                                            </>

                                        ) :
                                        <LinkContainer to='/login'>
                                            <Nav.Link>
                                                <Button className='px-3 mr-n3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                 <span className='StickyHeader_hideWords'>
                                                     <i style={{fontSize: '1.5em'}}
                                                        className=" fal fa-plane-arrival "> </i>
                                                 </span>
                                                    <span className='StickyHeader_hideIcon'>Login</span>
                                                </Button>
                                            </Nav.Link>
                                        </LinkContainer>
                                    }
                                    {/*  REGISTER  */}
                                    {!userInfo && (
                                        <LinkContainer to='/Register'>
                                            <Nav.Link>
                                                <Button className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>
                                                <span className='StickyHeader_hideWords'>
                                                    <i style={{fontSize: '1.5em'}}
                                                       className="fal fa-clipboard-user"> </i>
                                                </span>
                                                    <span className='StickyHeader_hideIcon'>Register</span>
                                                </Button>
                                            </Nav.Link>
                                        </LinkContainer>)
                                    }

                                    {/*  ADMIN DROPDOWN  */}
                                    {userInfo && userInfo.isAdmin && (
                                        <NavDropdown style={{zIndex: '1000'}} title='Admin' id='adminmenu'
                                                     className='mr-0 py-0 mt-2 whiteDropdown'>
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

                                    {/* CONTACT  */}
                                    <LinkContainer to='/contact'>
                                        <Nav.Link>
                                            <Button className='px-3 py-0 mt-2 rounded-pill global_bisonRedBgWhiteHoverBgBtn StickyHeader_iconHidden'>
                                                 <span className='StickyHeader_hideIcon'>
                                                     Contact
                                                 </span>
                                                <span className='StickyHeader_hideWords'>Contact</span>
                                            </Button>
                                        </Nav.Link>
                                    </LinkContainer>

                                </Nav>


                            }

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='StickyHeader_blackFade col-sm-12 position-sticky'> </div>
            </header>
        </>

    )

};

export default StickyHeader