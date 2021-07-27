import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import SignInForm from "./SignInForm";
import './SideBar.css'
import {Button} from "react-bootstrap";

const SignInDropdown = ({showSidebar}) => {

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

    }, [loginShow, userInfo]);

    // const loginForm = () => {
    //     setLoginShow(!loginShow)
    // };

    return (
        <>
            {!userInfo && (
                <>
                    <li className='my-3'>
                        <SignInForm loginTitle={'Sign In'} showSideBar={showSidebar}/>
                    </li>

                </>
            )}

            {/*  REGISTER  */}
            {!userInfo && (
                <>
                    <li className='mx-2'>
                        <h6 className='text-muted'>if not a user</h6>
                        <Link to='/Register' onClick={showSidebar}>
                        <Button className='py-2 px-3 global_blood-red-bg global_cultured rounded'>
                            Register
                        </Button>
                    </Link>
                    </li>
                </>
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
export default SignInDropdown

