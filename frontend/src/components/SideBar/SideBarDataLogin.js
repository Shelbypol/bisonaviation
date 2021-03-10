import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import Login from "../Login";
import '../../style/SideBar.css'

const SideBarDataLogin = ({showSidebar}) => {
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

    return (
        <>
            {userInfo ? (
                    <>

                        <span><h4 className='mx-3'>{userInfo.name}</h4></span>

                        {/*<li className='SideBarLogin-nav-text'>*/}
                        {/*    <Link to='/' onClick={showSidebar}>*/}
                        {/*        <span>Home</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                        <li className='SideBar-nav-text'>
                            <Link to='/profile' onClick={showSidebar}>
                                <span>Profile</span>
                            </Link>
                        </li>

                        <li className='SideBar-nav-text'>
                            <Link onClick={logoutHandler} to='/'>
                                {/*<i className='fal fa-plane-departure StickyHeader_icon-size'> </i>*/}
                                <span>Logout</span>
                            </Link>
                        </li>

                    </>

                ) :
                <>
                    {/*<li className='SideBarLogin-nav-text'>*/}
                    {/*    <Link to='/'>*/}
                    {/*        <span onClick={showSidebar}>Home</span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}

                    <li className='my-3'>
                        <Login showSideBar={showSidebar}/>
                    </li>

                </>
            }
            {/*  REGISTER  */}
            {!userInfo && (
                <li className='mx-2'>
                    <Link to='/Register' onClick={showSidebar}>
                        {/*<i className='fal fa-clipboard-user StickyHeader_icon-size'> </i>*/}
                        <span className='global_redFontHover'>Register</span>
                    </Link>
                </li>
            )}

            {/*  ADMIN DROPDOWN  */}
            {userInfo && userInfo.isAdmin && (
                <>
                    <li className='SideBar-nav-text'>
                        <Link to='/admin/userlist'>
                            <span className='global_redFontHover'>Users</span>
                        </Link>
                    </li>
                    <li className='SideBar-nav-text'>
                        <Link to='/admin/productlist'>
                            <span className='global_redFontHover'>Products</span>
                        </Link>
                    </li>
                    <li className='SideBar-nav-text'>
                        <Link to='/admin/orderlist'>
                            <span className='global_redFontHover'>Orders</span>
                        </Link>
                    </li>
                </>
            )}
        </>
    )
};
export default SideBarDataLogin

