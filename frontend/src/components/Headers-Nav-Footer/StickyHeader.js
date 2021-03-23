import React, {useState, useRef, useEffect} from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
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


                <Navbar className='navbar navbar-dark navbar-expand-lg StickyHeader_nav m-0 p-0 border-0'>


                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        {/*===============  SEARCH BAR  ==================*/}
                        <Nav className={'col-md-3 ml-4 d-sm-none d-md-block'}>
                            {userInfo && (
                                <SideBar/>
                            )}
                        </Nav>

                        {/*============= NAV SHOW ON SCROLL ==============*/}
                        <Nav className='col-md-6 justify-content-center'>

                            {/*  HOME  */}
                            <LinkContainer className='mx-1' to='/'>
                                <Nav.Link>
                                    <i className='far fa-home StickyHeader_links' style={{fontSize: '1.5em'}}> </i>
                                </Nav.Link>
                            </LinkContainer>

                            {/*  BROWSE PRODUCTS  */}
                            <LinkContainer className='mx-1' to='/products'>
                                <Nav.Link className=''>
                                    Products
                                </Nav.Link>
                            </LinkContainer>

                            {/*  AVIONICS  */}
                            <LinkContainer className='mx-1' to='/avionics'>
                                <Nav.Link>
                                    Avionics
                                </Nav.Link>
                            </LinkContainer>

                            {/*  MAINTENANCE  */}
                            <LinkContainer className='mx-1' to='/maintenance'>
                                <Nav.Link>
                                    Maintenance
                                </Nav.Link>
                            </LinkContainer>

                            {/*  EO/IR FLIR  */}
                            <LinkContainer className='mx-1' to='/flir'>
                                <Nav.Link>
                                    Flir
                                </Nav.Link>
                            </LinkContainer>

                            {/*  TEAM  */}
                            <LinkContainer className='mx-1' to='/team'>
                                <Nav.Link>
                                    Team
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>


                        {/*============= PROFILE BTNS ==============*/}
                        <Nav className='col-md-3 justify-content-end'>

                            <WishListTab/>

                                {!userInfo && (
                            <div className='px-3 py-0 mt-2'>
                                    <SideBar/>
                            </div>
                                )}

                            <LinkContainer to='/contact'>
                                <Nav.Link>
                                    <Button
                                        className='px-3 py-0 mt-2 mr-4 rounded-pill StickyHeader_contact-btn StickyHeader_iconHidden '>
                                                    <span className='StickyHeader_hideIcon'>
                                                     Contact
                                                 </span>
                                        <span className='StickyHeader_hideWords'>Contact</span>
                                    </Button>
                                </Nav.Link>
                            </LinkContainer>


                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </header>
        </>

    )

};

export default StickyHeader