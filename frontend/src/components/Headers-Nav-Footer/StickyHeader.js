import React, {useState, useRef, useEffect} from "react";
import {Button, Nav, Navbar, Row, Col, Image} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import {Link, Route} from "react-router-dom";
import SearchBox from "../SearchBox";
import WishListTab from "../Wishlist/WishListTab";
import SideBar from "../SideBar/SideBar";
import logo from '../../images/bg-graphics/graphics/Final-Logo-Horizontal.png'


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


            <Row className='sticky-top StickyHeader_nav m-0 px-0 pb-2 global_dots' style={{height: '12.5vh'}}>
                {/*===============  SIDEBAR  ==================*/}

                <Col xs={3} style={{height: '12vh'}} className='d-flex justify-content-start'>
                    <LinkContainer to='/'>
                        <img
                            src={logo}

                            className='DesktopHeader_logo px-1 pt-0'
                            alt="Bison Aviation"/>
                    </LinkContainer>
                </Col>

                <Col xs={6} className=' d-flex justify-content-center h-50'>

                    {/*  HOME  */}
                    <LinkContainer className='d-inline' to='/'>
                        <Nav.Link>
                            <i className='far fa-home StickyHeader_links'
                               style={{fontSize: '1.5em'}}> </i>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  BROWSE PRODUCTS  */}
                    <LinkContainer className='d-inline' to='/products'>
                        <Nav.Link className=''>
                                    <span className='StickyHeader_links'>
                                    Products
                                    </span>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  AVIONICS  */}
                    <LinkContainer className='d-inline' to='/avionics'>
                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Avionics
                                    </span>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  MAINTENANCE  */}
                    <LinkContainer className='d-inline' to='/maintenance'>
                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Maintenance
                                    </span>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  EO/IR FLIR  */}
                    <LinkContainer className='d-inline' to='/flir'>
                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Flir

                                    </span>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  TEAM  */}
                    <LinkContainer className='d-inline' to='/team'>
                        <Nav.Link>
                                    <span className='StickyHeader_links'>
                                    Team
                                    </span>
                        </Nav.Link>
                    </LinkContainer>

                </Col>


                {/*============= WISHLIST / LOGIN / CONTACT BTNS ==============*/}

                {/*{!userInfo && (*/}
                {/*)}*/}
                {!userInfo ? (
                    <>
                        <Col xs={3} className='h-50 d-flex justify-content-end m-0 p-0'>
                            <Nav.Link className='mt-n2'>
                                <WishListTab/>
                            </Nav.Link>

                            {/*<span className=' d-flex align-items-center justify-content-center mr-3 StickyHeader_login-btn'>*/}
                            {/*            <SideBar/>*/}
                            {/*</span>*/}


                            <LinkContainer to='/contact'>
                                <Nav.Link
                                    className='pt-3 StickyHeader_contact-btn'>
                                    <h6 className='StickHeader_contact-txt'>Contact</h6>
                                </Nav.Link>
                            </LinkContainer>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col xs={3} className='h-50 d-flex justify-content-end p-0 m-0'>
                            <Link to='#'>
                                <h6
                                    className='SideBar_Name px-3 pt-3'>{userInfo.name}</h6>
                            </Link>

                            <LinkContainer to='/contact'>
                                <Nav.Link
                                    className=' pt-3 StickyHeader_contact-btn py-0' >
                                    <h6 className='StickHeader_contact-txt'>Contact</h6>
                                </Nav.Link>
                            </LinkContainer>
                        </Col>
                    </>
                )}


                {/*/ =========== PROFILE / ADMIN BTNS ============*!/*/}
                <Col xs={9}
                     className='ml-auto d-flex align-items-center justify-content-end StickyHeader_login-btn'
                     style={{marginTop: '-6vh'}}>

                    {!userInfo && (
                        <span className=' d-flex align-items-center justify-content-end StickyHeader_login-btn'>
                                        <SideBar/>
                            </span>
                    )}

                    {userInfo && (
                        <>
                            {(userInfo && userInfo.isAdmin) && (
                                <>
                                    <LinkContainer to='/admin/userlist'>
                                        <Nav.Link className='SideBar_Name pt-3 border-left'>Users</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <Nav.Link className='SideBar_Name pt-3'>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>


                                    <LinkContainer to='/admin/orderlist'>
                                        <Nav.Link className='SideBar_Name pt-3 border-right'>
                                            Data - Info
                                        </Nav.Link>
                                    </LinkContainer>

                                </>
                            )}

                            <Nav>
                                <SideBar/>
                            </Nav>
                        </>
                    )}
                </Col>
            </Row>
        </>

    )

};

export default StickyHeader

{/*<header className='sticky-top m-0 p-0'>*/
}


{/*    <Navbar*/
}
{/*        className='navbar navbar-expand-lg StickyHeader_nav m-0 p-0 border-0 global_dots'>*/
}


{/*        <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/
}
{/*        <Navbar.Collapse id="basic-navbar-nav">*/
}


{/*            /!*===============  SIDEBAR  ==================*!/*/
}

{/*            <Nav*/
}
{/*                className=' d-sm-none d-md-block min-vw-100 StickyHeader_nav d-lg-flex justify-content-between'>*/
}
{/*                <>*/
}
{/*                    <Nav xs={6} className=' pl-3'>*/
}
{/*                        /!*  HOME  *!/*/
}
{/*                        <LinkContainer className='mx-1' to='/'>*/
}
{/*                            <Nav.Link>*/
}
{/*                                <i className='far fa-home StickyHeader_links'*/
}
{/*                                   style={{fontSize: '1.5em'}}> </i>*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                        /!*  BROWSE PRODUCTS  *!/*/
}
{/*                        <LinkContainer className='mx-1' to='/products'>*/
}
{/*                            <Nav.Link className=''>*/
}
{/*                        <span className='StickyHeader_links'>*/
}
{/*                        Products*/
}
{/*                        </span>*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                        /!*  AVIONICS  *!/*/
}
{/*                        <LinkContainer className='mx-1' to='/avionics'>*/
}
{/*                            <Nav.Link>*/
}
{/*                        <span className='StickyHeader_links'>*/
}
{/*                        Avionics*/
}
{/*                        </span>*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                        /!*  MAINTENANCE  *!/*/
}
{/*                        <LinkContainer className='mx-1' to='/maintenance'>*/
}
{/*                            <Nav.Link>*/
}
{/*                        <span className='StickyHeader_links'>*/
}
{/*                        Maintenance*/
}
{/*                        </span>*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                        /!*  EO/IR FLIR  *!/*/
}
{/*                        <LinkContainer className='mx-1' to='/flir'>*/
}
{/*                            <Nav.Link>*/
}
{/*                        <span className='StickyHeader_links'>*/
}
{/*                        Flir*/
}

{/*                        </span>*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                        /!*  TEAM  *!/*/
}
{/*                        <LinkContainer className='mx-1' to='/team'>*/
}
{/*                            <Nav.Link>*/
}
{/*                        <span className='StickyHeader_links'>*/
}
{/*                        Team*/
}
{/*                        </span>*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                    </Nav>*/
}
{/*                </>*/
}
{/*                /!*)}*!/*/
}
{/*                /!*</Nav>*!/*/
}


{/*                /!*============= PROFILE BTNS ==============*!/*/
}


{/*                <Nav className=' pr-3 w-25 d-flex justify-content-end'>*/
}
{/*                    /!*{!userInfo && (*!/*/
}
{/*                    /!*)}*!/*/
}
{/*                    <Nav.Link*/
}
{/*                        className=' w-25 d-flex align-items-center justify-content-center StickyHeader_wishlist-btn-bg'>*/
}
{/*                        <WishListTab/>*/
}
{/*                    </Nav.Link>*/
}

{/*                    {!userInfo && (*/
}
{/*                        <span*/
}
{/*                            className=' w-25 d-flex align-items-center justify-content-center StickyHeader_login-btn'>*/
}
{/*                            <SideBar/>*/
}
{/*                        </span>*/
}
{/*                    )}*/
}

{/*                    <LinkContainer to='/contact'>*/
}
{/*                        <Nav.Link*/
}
{/*                            className='w-50 align-content-center justify-content-center StickyHeader_contact-btn'>*/
}
{/*                            Contact*/
}
{/*                        </Nav.Link>*/
}
{/*                    </LinkContainer>*/
}


{/*                </Nav>*/
}
{/*            </Nav>*/
}

{/*        </Navbar.Collapse>*/
}

{/*    </Navbar>*/
}
{/*    <Row style={{height: '1px'}}>*/
}
{/*        <Col className='' style={{backgroundColor: 'rgba(255, 255, 255, .3)'}}>*/
}

{/*        </Col>*/
}
{/*    </Row>*/
}
{/*/!*</header>*!/*/
}
{/*<header className='sticky-top m-0 p-0' style={{top: '6vh'}}>*/
}
{/*    {userInfo && (*/
}

{/*        <Nav*/
}
{/*            className='d-flex align-items-center justify-content-end StickyHeader_login-btn StickyHeader_nav'>*/
}
{/*            <Nav>*/
}
{/*                /!*  ADMIN DROPDOWN  *!/*/
}
{/*                {userInfo && userInfo.isAdmin && (*/
}
{/*                    <>*/
}
{/*                        <LinkContainer to='/admin/userlist'>*/
}
{/*                            <Nav.Link>Users</Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                        <LinkContainer to='/admin/productlist'>*/
}
{/*                            <Nav.Link>*/
}
{/*                                Products*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}


{/*                        <LinkContainer to='/admin/orderlist'>*/
}
{/*                            <Nav.Link>*/
}
{/*                                Data - Info*/
}
{/*                            </Nav.Link>*/
}
{/*                        </LinkContainer>*/
}

{/*                    </>*/
}
{/*                )}*/
}
{/*            </Nav>*/
}
{/*            <Nav>*/
}
{/*                <SideBar/>*/
}
{/*            </Nav>*/
}
{/*        </Nav>*/
}
{/*    )}*/
}
{/*</header>*/
}
{/*</header>*/
}