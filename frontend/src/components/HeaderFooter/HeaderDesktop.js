import React, {useState, useRef, useEffect} from "react";
import { Nav, Row, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import {Link} from "react-router-dom";
import WishListTab from "../Wishlist/WishListTab";
import SignInBtn from "../SignInRegister/SignInBtn";
import logo from '../../images/bg-graphics/graphics/Final-Logo-Horizontal.png'


const HeaderDesktop = () => {

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


            <Row className='global_dots StickyHeader_nav-color sticky-top' style={{top: '0', zIndex: 6000}}>
                {/*===============  SIDEBAR  ==================*/}

                <Col xs={3} className=' d-flex justify-content-center sticky-top' style={{top: '0', height: '12vh'}}>
                    <LinkContainer to='/'>
                        <img
                            src={logo}
                            className='DesktopHeader_logo px-1 pt-0'
                            alt="Bison Aviation"/>
                    </LinkContainer>
                </Col>


                {/*/ =========== PROFILE / ADMIN BTNS ============*!/*/}
                <Col xs={9}
                     className='sticky-top StickyHeader_right-row ml-auto d-flex justify-content-end StickyHeader_login-btn'
                     style={{top: '0'}}
                >

                    {!userInfo && (
                        <span className=' d-flex align-items-center justify-content-end StickyHeader_login-btn'>
                                        <SignInBtn/>
                            </span>
                    )}

                    {userInfo && (
                        <>
                        {/*{userInfo.isAdmin ? (*/}
                            <Link to='#'>
                                <h6
                                    className='SideBar_Name pt-3 pr-3'>Welcome,&nbsp;{userInfo.name}</h6>
                            </Link>

                            </>
                    )}

                    {userInfo && (
                        <>
                            {(userInfo && userInfo.isAdmin) && (
                                <>
                                    <LinkContainer to='/admin/userlist' className='d-flex justify-content-center mt-1' style={{height: '5vh'}}>
                                        <Nav.Link className='SideBar_Name border-left'>Users</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist' className='d-flex justify-content-center mt-1' style={{height: '5vh'}}>
                                        <Nav.Link className='SideBar_Name'>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>


                                    <LinkContainer to='/admin/orderlist' className='d-flex justify-content-center mt-1' style={{height: '5vh'}}>
                                        <Nav.Link className='SideBar_Name border-right'>
                                            Data - Info
                                        </Nav.Link>
                                    </LinkContainer>

                                </>
                            )}

                        {/*     PROFILE AND LOGOUT BTNS    */}
                            <Nav>
                                <SignInBtn/>
                            </Nav>
                        </>
                    )}
                </Col>


                <Col xs={7} className='ml-auto mr-5 pb-0 d-flex justify-content-center StickyHeader_right-row sticky-top '
                     style={{marginTop: '-5.75vh'}}>

                    {/*  HOME  */}
                    <LinkContainer className='d-inline' to='/'>
                        <Nav.Link>
                            <i className='far fa-home StickyHeader_home'
                               style={{fontSize: '1.5em'}}> </i>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  BROWSE PRODUCTS  */}
                    <LinkContainer className='d-inline StickyHeader_link-hover' to='/products'>
                        <Nav.Link className=''>
                                    <h6 className='StickyHeader_links pt-1'>
                                    Products
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  AVIONICS  */}
                    <LinkContainer className='d-inline StickyHeader_link-hover' to='/avionics'>
                        <Nav.Link>
                                    <h6 className='StickyHeader_links pt-1'>
                                    Avionics
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  MAINTENANCE  */}
                    <LinkContainer className='d-inline StickyHeader_link-hover' to='/maintenance'>
                        <Nav.Link>
                                    <h6 className='StickyHeader_links pt-1'>
                                    Maintenance
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  EO/IR FLIR  */}
                    <LinkContainer className='d-inline StickyHeader_link-hover' to='/flir'>
                        <Nav.Link>
                                    <h6 className='StickyHeader_links pt-1'>
                                    Flir

                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  TEAM  */}
                    <LinkContainer className='d-inline StickyHeader_link-hover' to='/team'>
                        <Nav.Link>
                                    <h6 className='StickyHeader_links pt-1'>
                                    Team
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*{!userInfo && (*/}
                        <Nav.Link className='StickyHeader_wishList-btn' style={{height: '6vh'}}>
                            <WishListTab/>
                        </Nav.Link>
                    {/*)}*/}

                </Col>


                {/*============= WISHLIST / LOGIN / CONTACT BTNS ==============*/}
                <Col xs={2} className='d-flex justify-content-end StickyHeader_right-row sticky-top '
                     style={{marginTop: '-6vh', top: '6vh'}}>

                    <LinkContainer to='/contact'>
                        <Nav.Link
                            className='pt-3 StickyHeader_contact-btn '>
                            <h6 className='StickHeader_contact-txt '>Contact</h6>
                        </Nav.Link>
                    </LinkContainer>
                </Col>


            </Row>
        </>

    )

};

export default HeaderDesktop;