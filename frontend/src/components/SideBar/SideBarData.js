import React, {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {LinkContainer} from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import {Button, Nav, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import Login from "../Login";

const SideBarData = ({showSidebar}) => {
    const [loginShow, setLoginShow] = useState(false);

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
        // window.localStorage.clear();
        dispatch({type: CART_RESET});
        dispatch(logout());
    };

    useEffect(() => {

    }, [loginShow]);

    const loginForm = () => {
        setLoginShow(!loginShow)
    };

    //          title: 'Support',
    //          path: '/support',
    //          icon: <IoIcons.IoMdHelpCircle />,
    //          cName: 'nav-text'

    return (
        <>
            {userInfo ? (
                    <>

                        <span><h4 className='mx-3'>{userInfo.name}</h4></span>

                        <Link to='/' onClick={showSidebar}>
                            <span className='SideBar-nav-text'>Home</span>
                        </Link>

                        <Link to='/profile'  onClick={showSidebar}>
                            <span className='SideBar-nav-text'>Profile</span>
                        </Link>

                        <Link onClick={logoutHandler && showSidebar} to='/'>
                            {/*<i className='fal fa-plane-departure StickyHeader_icon-size'> </i>*/}
                            <span className='SideBar-nav-text'>Logout</span>
                        </Link>

                    </>

                ) :
                <>
                    <Link to='/'>
                        <span className='SideBar-nav-text'  onClick={showSidebar}>Home</span>
                    </Link>
                    {/*<Link to='/login'>*/}
                        {/*<i className='fal fa-plane-arrival StickyHeader_icon-size'> </i>*/}
                        <span className='SideBar-nav-text global_cursor' onClick={loginForm}>Login</span>
                    {/*</Link>*/}
                    {loginShow && (
                        <Login showSideBar={showSidebar}/>
                    )}

                </>
            }
            {/*  REGISTER  */}
            {!userInfo && (
                <Link to='/Register' onClick={showSidebar}>
                    {/*<i className='fal fa-clipboard-user StickyHeader_icon-size'> </i>*/}
                    <span className='SideBar-nav-text'>Register</span>
                </Link>
            )}

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
        </>
    )
};
export default SideBarData
