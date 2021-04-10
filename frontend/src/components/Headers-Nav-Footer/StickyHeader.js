import React, {useState, useRef, useEffect} from "react";
import {Button, Nav, Navbar, Row, Col} from "react-bootstrap";
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
    }, [goingUp, userInfo]);

    return (
        <>
            <header className='sticky-top m-0 p-0'>


                <Navbar
                    className='navbar navbar-expand-lg StickyHeader_nav m-0 p-0 border-0'>


                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        {/*===============  SIDEBAR  ==================*/}
                        <Nav
                            className=' d-sm-none d-md-block min-vw-100 StickyHeader_nav d-lg-flex justify-content-between'>
                            {userInfo ? (
                                <Nav xs={8} className='d-flex justify-content-start pl-3'>
                                    <SideBar/>

                                    {/*  HOME  */}
                                    <LinkContainer className='mx-1' to='/'>
                                        <Nav.Link>
                                            <i className='far fa-home StickyHeader_links'
                                               style={{fontSize: '1.5em'}}> </i>
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  BROWSE PRODUCTS  */}
                                    <LinkContainer className='mx-1' to='/products'>
                                        <Nav.Link className=''>
                                    <span className='StickyHeader_links'>
                                    Products
                                    </span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  AVIONICS  */}
                                    <LinkContainer className='mx-1' to='/avionics'>
                                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Avionics
                                    </span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  MAINTENANCE  */}
                                    <LinkContainer className='mx-1' to='/maintenance'>
                                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Maintenance
                                    </span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  EO/IR FLIR  */}
                                    <LinkContainer className='mx-1' to='/flir'>
                                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Flir

                                    </span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    {/*  TEAM  */}
                                    <LinkContainer className='mx-1' to='/team'>
                                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Team
                                    </span>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            ) : (
                                <>
                                    <Nav xs={8} className='d-flex justify-content-start pl-3'>
                                        {/*  HOME  */}
                                        <LinkContainer className='mx-1' to='/'>
                                            <Nav.Link>
                                                <i className='far fa-home StickyHeader_links'
                                                   style={{fontSize: '1.5em'}}> </i>
                                            </Nav.Link>
                                        </LinkContainer>

                                        {/*  BROWSE PRODUCTS  */}
                                        <LinkContainer className='mx-1' to='/products'>
                                            <Nav.Link className=''>
                                    <span className='StickyHeader_links'>
                                    Products
                                    </span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        {/*  AVIONICS  */}
                                        <LinkContainer className='mx-1' to='/avionics'>
                                            <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Avionics
                                    </span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        {/*  MAINTENANCE  */}
                                        <LinkContainer className='mx-1' to='/maintenance'>
                                            <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Maintenance
                                    </span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        {/*  EO/IR FLIR  */}
                                        <LinkContainer className='mx-1' to='/flir'>
                                            <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Flir

                                    </span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        {/*  TEAM  */}
                                        <LinkContainer className='mx-1' to='/team'>
                                            <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Team
                                    </span>
                                            </Nav.Link>
                                        </LinkContainer>

                                    </Nav>
                                </>
                            )}
                            {/*</Nav>*/}


                            {/*============= NAV SHOW ON SCROLL ==============*/}
                            {/*     <Nav xs={6} className='border*/}
                            {/*d-flex justify-content-start StickyHeader_nav'>*/}


                            {/*    /!*  HOME  *!/*/}
                            {/*    <LinkContainer className='mx-1' to='/'>*/}
                            {/*        <Nav.Link>*/}
                            {/*            <i className='far fa-home StickyHeader_links'*/}
                            {/*               style={{fontSize: '1.5em'}}> </i>*/}
                            {/*        </Nav.Link>*/}
                            {/*    </LinkContainer>*/}

                            {/*    /!*  BROWSE PRODUCTS  *!/*/}
                            {/*    <LinkContainer className='mx-1' to='/products'>*/}
                            {/*        <Nav.Link className=''>*/}
                            {/*        <span className='StickyHeader_links'>*/}
                            {/*        Products*/}
                            {/*        </span>*/}
                            {/*        </Nav.Link>*/}
                            {/*    </LinkContainer>*/}

                            {/*    /!*  AVIONICS  *!/*/}
                            {/*    <LinkContainer className='mx-1' to='/avionics'>*/}
                            {/*        <Nav.Link>*/}
                            {/*        <span className='StickyHeader_links'>*/}
                            {/*        Avionics*/}
                            {/*        </span>*/}
                            {/*        </Nav.Link>*/}
                            {/*    </LinkContainer>*/}

                            {/*    /!*  MAINTENANCE  *!/*/}
                            {/*    <LinkContainer className='mx-1' to='/maintenance'>*/}
                            {/*        <Nav.Link>*/}
                            {/*        <span className='StickyHeader_links'>*/}
                            {/*        Maintenance*/}
                            {/*        </span>*/}
                            {/*        </Nav.Link>*/}
                            {/*    </LinkContainer>*/}

                            {/*    /!*  EO/IR FLIR  *!/*/}
                            {/*    <LinkContainer className='mx-1' to='/flir'>*/}
                            {/*        <Nav.Link>*/}
                            {/*        <span className='StickyHeader_links'>*/}
                            {/*        Flir*/}

                            {/*        </span>*/}
                            {/*        </Nav.Link>*/}
                            {/*    </LinkContainer>*/}

                            {/*    /!*  TEAM  *!/*/}
                            {/*    <LinkContainer className='mx-1' to='/team'>*/}
                            {/*        <Nav.Link>*/}
                            {/*        <span className='StickyHeader_links'>*/}
                            {/*        Team*/}
                            {/*        </span>*/}
                            {/*        </Nav.Link>*/}
                            {/*    </LinkContainer>*/}

                            {/*</Nav>*/}


                            {/*============= PROFILE BTNS ==============*/}
                            <Nav xs={3} className='d-flex justify-content-end pr-3'>
                                <Nav.Link
                                    className='d-flex justify-content-center'>
                                    <WishListTab/>
                                </Nav.Link>

                                {!userInfo && (
                                    <SideBar/>
                                )}

                                <LinkContainer to='/contact'>
                                    <Nav.Link>
                                        <Button
                                            className='py-0 rounded StickyHeader_contact-btn StickyHeader_iconHidden '>
                                                    <span className='StickyHeader_hideIcon'>
                                                     Contact
                                                 </span>
                                            <span className='StickyHeader_hideWords'>Contact</span>
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>


                            </Nav>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </header>
        </>

    )

};

export default StickyHeader