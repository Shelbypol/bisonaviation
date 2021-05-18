import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import SignInForm from "./SignInForm";
import '../../style/SideBar.css'

const SignInSuccess = ({showSidebar}) => {
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

                        <span><h4 className='mx-3 '>{userInfo.name}</h4></span>

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
                        <SignInForm showSideBar={showSidebar}/>
                    </li>

                </>
            }

            {/*  REGISTER  */}
            {!userInfo && (
                <li className='mx-2'>
                    <Link to='/Register' onClick={showSidebar}>
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
export default SignInSuccess

