import React, {useState, useRef, useEffect} from "react";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import {Route} from "react-router-dom";
import SearchBox from "../SearchBox";
import WishListTab from "../Wishlist/WishListTab";
import SideBar from "../SideBar/SideBar";

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

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <>
            <header className='sticky-top m-0 p-0'>
                {/*<header className='sticky-top m-0' id='showSearch'>*/}

                <Navbar className='navbar navbar-expand-lg navbar-light bg-light m-0 p-0 border-0'>

                    {/*<Container className='col-sm-12'>*/}

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            {/*===============  SEARCH BAR  ==================*/}

                            {goingUp &&
                            <Nav className={'col-lg-3 ml-4 d-sm-none d-md-none d-lg-block'}>
                                <Route render={({history}) => <SearchBox history={history}
                                                                         searchSize={'sm'}
                                                                         searchClasses={'col-9 py-0'}
                                                                         // searchClasses={'col-9 py-0 global_gradient text-white'}
                                                                         btnSize={'sm'}
                                                                         btnClasses={' StickyHeader_search_btn_padding px-1 col-2 rounded-right'}
                                                                         // btnClasses={'global_bisonDarkFadedBgColorHover StickyHeader_search_btn_padding px-1 col-2 rounded-right'}
                                                                         iconClass={'fal fa-search p-0'}
                                />}/>
                            </Nav>
                            }

                            {/*============= NAV SHOW ON SCROLL ==============*/}

                            {goingUp ?
                                <Nav className='col-lg-5 col-md-6 justify-content-end global_accentFont'>

                                    {/*  BROWSE PRODUCTS  */}
                                    <LinkContainer className='mx-1' to='/products'>
                                        <Nav.Link>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  AIR CRAFT SERVICES  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown'
                                                 title='Aircraft Services'
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
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown' title='EO/IR'
                                                 id='eoirmenu'>
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
                                <Nav className='col-lg-8 ml-4 col-md-6 justify-content-end global_accentFont'>

                                    {/*  BROWSE PRODUCTS  */}
                                    <LinkContainer className='mx-1' to='/products'>
                                        <Nav.Link>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  AIR CRAFT SERVICES  */}
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown'
                                                 title='Aircraft Services'
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
                                    <NavDropdown style={{zIndex: '100'}} className='mx-1 whiteDropdown' title='EO/IR'
                                                 id='eoirmenu'>
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

                                        <WishListTab/>


                                        <LinkContainer to='/contact'>
                                            <Nav.Link>
                                                <Button
                                                    className='px-3 py-0 mt-2 mr-4 rounded-pill global_bisonRedBgWhiteHoverBgBtn StickyHeader_iconHidden '>
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

                                        <WishListTab/>


                                        {/* CONTACT  */}
                                        <LinkContainer to='/contact'>
                                            <Nav.Link>
                                                <Button
                                                    className='px-3 py-0 mt-2 mr-4 rounded-pill global_bisonRedBgWhiteHoverBgBtn StickyHeader_iconHidden'>
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


                <SideBar/>


                    {/*</Container>*/}
                </Navbar>
                <div className='StickyHeader_whiteFade col-sm-12 position-sticky'> </div>
            </header>
        </>

    )

};

export default StickyHeader