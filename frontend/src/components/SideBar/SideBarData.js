import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import Login from "../Login";
import '../../style/SideBar.css'

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

    return (
        <>
            {userInfo ? (
                    <>

                        <li className='SideBar-nav-text'>
                            <Link to='/' onClick={showSidebar}>
                                <span>Home</span>
                            </Link>
                        </li>

                        <li className='SideBar-nav-text'>
                            <Link to='/profile' onClick={showSidebar}>
                                <span>Profile</span>
                            </Link>
                        </li>

                        <li className='SideBar-nav-text'>
                            <Link onClick={logoutHandler} to='/'>
                                <span>Logout</span>
                            </Link>
                        </li>

                    </>

                ) :
                <>
                    <li className='my-3'>
                        <Login loginTitle={'Login'} showSideBar={showSidebar}/>
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
                    <li className='SideBar-nav-text SideBar_admin mt-4'>
                        <Link to='/admin/userlist'>
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className='SideBar-nav-text SideBar_admin'>
                        <Link to='/admin/productlist'>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li className='SideBar-nav-text SideBar_admin'>
                        <Link to='/admin/orderlist'>
                            <span>Data - Info</span>
                        </Link>
                    </li>
                </>
            )}
        </>
    )
};
export default SideBarData

