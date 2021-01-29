import React, {useEffect, useRef, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SideBarData from "./SideBarData";
import '../../style/SideBar.css'
import { IconContext } from 'react-icons';
import {LinkContainer} from "react-router-bootstrap";
import {Button, Nav, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    // const dispatch = useDispatch();
    // const userLogin = useSelector(state => state.userLogin);
    // const {userInfo} = userLogin;


    const node = useRef();
    useEffect(() => {
        // add when mounted
        document.addEventListener("scroll", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("scroll", handleClick);
        };
    }, []);

    const showSidebar = () => setSidebar(!sidebar);
    // const logoutHandler = () => {
    //     // window.localStorage.clear();
    //     dispatch({type: CART_RESET});
    //     dispatch(logout());
    // };

    const handleClick = e => {
        if (node.current.contains(e.target) === false){
            setSidebar(false)
            // setOpen(false)
        }
    };
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='SideBar-navbar' >
                    <Link to='#' className='SideBar-menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'SideBar-nav-menu active' : 'SideBar-nav-menu'} ref={node} onClick={(e) => (handleClick(e))}>
                    <ul className='SideBar-nav-menu-items' >

                        <SideBarData showSidebar={ showSidebar}/>
                        {/*<li className='SideBar-navbar-toggle'>*/}
                        {/*    <Link to='#' className='SideBar-menu-bars'>*/}
                        {/*        <AiIcons.AiOutlineClose style={{color: '#000'}}/>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*{SideBarData.map((item, index) => {*/}
                        {/*    return (*/}
                        {/*        <li key={index} className={item.cName} >*/}
                        {/*            <Link to={item.path}>*/}
                        {/*                {item.icon}*/}
                        {/*                <span>{item.title}</span>*/}
                        {/*            </Link>*/}
                        {/*        </li>*/}
                        {/*    );*/}
                        {/*})}*/}




                        {/*PROFILE  /  SIGN IN*/}
                        {/*{userInfo ? (*/}
                        {/*        <>*/}

                        {/*            <LinkContainer to='/profile'>*/}
                        {/*                <Nav.Link>*/}
                        {/*                    <Button className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>*/}
                        {/*                                        <span className='StickyHeader_hideWords'>*/}
                        {/*                                            {userInfo.name}*/}
                        {/*                                        </span>*/}
                        {/*                        <span className='StickyHeader_hideIcon'>Profile</span>*/}
                        {/*                    </Button>*/}
                        {/*                </Nav.Link>*/}
                        {/*            </LinkContainer>*/}

                        {/*            <LinkContainer to='/'>*/}
                        {/*                <Nav.Link onClick={logoutHandler}>*/}
                        {/*                    <Button*/}
                        {/*                        className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>*/}
                        {/*                               <span className='StickyHeader_hideWords'>*/}
                        {/*                                 <i className='fal fa-plane-departure StickyHeader_icon-size'> </i>*/}
                        {/*                                </span>*/}
                        {/*                        <span className='StickyHeader_hideIcon'>Logout</span>*/}
                        {/*                    </Button>*/}
                        {/*                </Nav.Link>*/}
                        {/*            </LinkContainer>*/}
                        {/*        </>*/}

                        {/*    ) :*/}
                        {/*    <>*/}

                        {/*        /!*<WishListTab />*!/*/}

                        {/*        <LinkContainer to='/login'>*/}
                        {/*            <Nav.Link>*/}
                        {/*                <Button className='px-3 mr-n3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>*/}
                        {/*                             <span className='StickyHeader_hideWords'>*/}
                        {/*                                 <i className='fal fa-plane-arrival StickyHeader_icon-size'> </i>*/}
                        {/*                             </span>*/}
                        {/*                    <span className='StickyHeader_hideIcon'>Login</span>*/}
                        {/*                </Button>*/}
                        {/*            </Nav.Link>*/}
                        {/*        </LinkContainer>*/}
                        {/*    </>*/}
                        {/*}*/}
                        {/*/!*  REGISTER  *!/*/}
                        {/*{!userInfo && (*/}
                        {/*    <LinkContainer to='/Register'>*/}
                        {/*        <Nav.Link>*/}
                        {/*            <Button className='px-3 py-0 mt-2 rounded-pill global_RedFontWhiteBgBtn StickyHeader_iconHidden'>*/}
                        {/*                            <span className='StickyHeader_hideWords'>*/}
                        {/*                                <i className='fal fa-clipboard-user StickyHeader_icon-size'> </i>*/}
                        {/*                            </span>*/}
                        {/*                <span className='StickyHeader_hideIcon'>Register</span>*/}
                        {/*            </Button>*/}
                        {/*        </Nav.Link>*/}
                        {/*    </LinkContainer>)*/}
                        {/*}*/}

                        {/*/!*  ADMIN DROPDOWN  *!/*/}
                        {/*{userInfo && userInfo.isAdmin && (*/}
                        {/*    <NavDropdown style={{zIndex: '1000'}} title='Admin' id='adminmenu'*/}
                        {/*                 className='mr-0 py-0 mt-2 whiteDropdown'>*/}
                        {/*        <LinkContainer to='/admin/userlist'>*/}
                        {/*            <NavDropdown.Item>Users</NavDropdown.Item>*/}
                        {/*        </LinkContainer>*/}
                        {/*        <LinkContainer to='/admin/productlist'>*/}
                        {/*            <NavDropdown.Item>Products</NavDropdown.Item>*/}
                        {/*        </LinkContainer>*/}
                        {/*        <LinkContainer to='/admin/orderlist'>*/}
                        {/*            <NavDropdown.Item>Orders</NavDropdown.Item>*/}
                        {/*        </LinkContainer>*/}
                        {/*    </NavDropdown>*/}
                        {/*)}*/}









                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideBar;