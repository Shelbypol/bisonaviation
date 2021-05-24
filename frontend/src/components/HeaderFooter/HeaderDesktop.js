import React, {useState, useRef, useEffect} from "react";
import { Nav, Row, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import {Link} from "react-router-dom";
import WishListTab from "../Wishlist/WishListTab";
import SignInBtn from "../SignIn/SignInBtn";
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


    }, [goingUp, userInfo]);

    // useRef(() => {
    //     // const handleScroll = () => {
    //     //     const currentScrollY = window.scrollY;
    //     //     if (prevScrollY.current > currentScrollY && goingUp) {
    //     //         setGoingUp(false);
    //     //     }
    //     //
    //     //     if (prevScrollY.current < currentScrollY && !goingUp) {
    //     //         setGoingUp(true);
    //     //     }
    //     //
    //     //     prevScrollY.current = currentScrollY;
    //     // };
    //     //
    //     // window.addEventListener("scroll", handleScroll, {passive: true});
    //     //
    //     // return () => window.removeEventListener("scroll");
    // });
    //
    // // useEffect(() => {
    // //     const handleScroll = () => {
    // //         const currentScrollY = window.scrollY;
    // //         if (prevScrollY.current > currentScrollY && goingUp) {
    // //             setGoingUp(false);
    // //         }
    // //
    // //         if (prevScrollY.current < currentScrollY && !goingUp) {
    // //             setGoingUp(true);
    // //         }
    // //
    // //         prevScrollY.current = currentScrollY;
    // //     };
    // //
    // //     window.addEventListener("scroll", handleScroll, {passive: true});
    // //
    // //     return () => window.removeEventListener("scroll", handleScroll);
    // // }, [goingUp, userInfo]);

    return (
        <>


            <Row className='global_dots HeaderDesktop_nav-color sticky-top' style={{top: '0', zIndex: 6000}}>
                {/*===============  SIDEBAR  ==================*/}

                <Col xs={3} className=' d-flex justify-content-center' style={{ height: '12vh'}}>
                    <LinkContainer to='/'>
                        <img
                            src={logo}
                            className='HeaderDesktop_logo px-1 pt-0'
                            alt="Bison Aviation"/>
                    </LinkContainer>
                </Col>


                {/*/ =========== PROFILE / ADMIN BTNS ============*!/*/}
                <Col xs={9} className='HeaderDesktop_profile-admin-btns-row ml-auto d-flex justify-content-end'>

                    {!userInfo && (
                        <span className=' d-flex align-items-center justify-content-end'>
                                        <SignInBtn/>
                            </span>
                    )}

                    {userInfo && (
                        <>
                        {/*{userInfo.isAdmin ? (*/}
                            <Link to='#' className='global_goldenrod-border-right'>
                                <h6
                                    className=' global_white pt-3 pr-3 ' style={{fontWeight: 'lighter'}}>{userInfo.name}</h6>
                            </Link>

                            </>
                    )}

                    {userInfo && (
                        <>
                            {(userInfo && userInfo.isAdmin) && (
                                <>
                                    <LinkContainer to='/admin/userlist' className='d-flex justify-content-center'>
                                        <Nav.Link className='HeaderDesktop_user-btns'>Users</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist' className='d-flex justify-content-center'>
                                        <Nav.Link className='HeaderDesktop_user-btns'>
                                            Products
                                        </Nav.Link>
                                    </LinkContainer>


                                    {/*<LinkContainer to='/admin/orderlist' className='d-flex justify-content-center mt-1' style={{height: '5vh'}}>*/}
                                    {/*    <Nav.Link className='SideBar_Name border-right'>*/}
                                    {/*        Data - Info*/}
                                    {/*    </Nav.Link>*/}
                                    {/*</LinkContainer>*/}

                                </>
                            )}

                        {/*     PROFILE AND LOGOUT BTNS    */}
                            <Nav style={{zIndex: '9000'}}>
                                <SignInBtn/>
                            </Nav>
                        </>
                    )}
                </Col>


                <Col xs={7} className='ml-auto mr-5 pb-0 d-flex justify-content-center StickyHeader_right-row sticky-top '
                     style={{marginTop: '-5.75vh'}}>

                    {/*  HOME  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/'>
                        <Nav.Link>
                            <i className='far fa-home global_white'
                               style={{fontSize: '1.5em'}}> </i>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  BROWSE PRODUCTS  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/products'>
                        <Nav.Link className=''>
                                    <h6 className='global_white pt-1'>
                                    Products
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  AVIONICS  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/avionics'>
                        <Nav.Link>
                                    <h6 className='global_white pt-1'>
                                    Avionics
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  MAINTENANCE  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/maintenance'>
                        <Nav.Link>
                                    <h6 className='global_white pt-1'>
                                    Maintenance
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  EO/IR FLIR  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/flir'>
                        <Nav.Link>
                                    <h6 className='global_white pt-1'>
                                    Flir

                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  TEAM  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/team'>
                        <Nav.Link>
                                    <h6 className='global_white pt-1'>
                                    Team
                                    </h6>
                        </Nav.Link>
                    </LinkContainer>

                    {/*  WISHLIST  */}
                    <LinkContainer className='d-inline global_goldenrodtxt-btn' to='/wishlist'>
                        <Nav.Link className='global_white' style={{height: '6vh'}}>
                            {/*<WishListTab/>*/}
                            <h6 className='global_white'>

                            <i className="fal fa-list-alt pt-1 StickyHeader_icon-size "> </i>
                            </h6>

                        </Nav.Link>
                    </LinkContainer>

                </Col>


                {/*============= WISHLIST / LOGIN / CONTACT BTNS ==============*/}
                <Col xs={2} className='d-flex justify-content-end StickyHeader_right-row sticky-top'
                     style={{marginTop: '-6vh', top: '6vh'}}>

                    <LinkContainer to='/contact' className=''>
                        <Nav.Link
                            className='pt-3 '>
                            <h6 className='global_goldenrodtxt-btn px-5'>Contact</h6>
                        </Nav.Link>
                    </LinkContainer>
                </Col>


            </Row>
        </>

    )

};

export default HeaderDesktop;