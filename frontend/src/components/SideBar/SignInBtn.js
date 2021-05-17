import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import SignInDropdown from "./SignInDropdown";
import '../../style/SideBar.css'
import {IconContext} from 'react-icons';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import WishListTab from "../Wishlist/WishListTab";
import {Nav} from "react-bootstrap";

const SignInBtn = () => {
    const [sidebar, setSidebar] = useState(false);

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const node = useRef();
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const showSidebar = () => setSidebar(!sidebar);

    const handleScroll = e => {
    //     if (node.current.contains(e.target) === false) {
    //         setSidebar(false)
    //     }
    };

    const logoutHandler = () => {
        // window.localStorage.clear();
        dispatch({type: CART_RESET});
        dispatch(logout());
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>

                {userInfo ? (
                    <>

                        <li className='SideBar-nav-text'>
                            <Link to='/profile'>
                                <i className="fas fa-user border-0 StickyHeader_icon StickyHeader_links"> </i>
                            </Link>
                        </li>

                        <li className='SideBar-nav-text'>
                            <Link onClick={logoutHandler} to='/'>
                                <i className="fal fa-sign-out border-0 StickyHeader_icon StickyHeader_links"> </i>
                            </Link>
                        </li>
                    </>
                ) : (
                    <Link to='#'>
                        <h6 onClick={showSidebar} className='SideBar_Login pt-2 pr-1 StickyHeader_login-btn'><i
                            className="fas fa-user-alt"> </i>&nbsp;Sign in / Register</h6>
                    </Link>
                )}

                {userInfo ? (
                    <nav className={sidebar ? 'SideBar-nav-menu-user-logged active' : 'SideBar-nav-menu-user-logged'}
                         ref={node}
                         onClick={(e) => (handleScroll(e))}>
                        <ul className='SideBar-nav-menu-items'>
                            <SignInDropdown showSidebar={showSidebar}/>
                        </ul>
                    </nav>
                ) : (
                    <nav
                        className={sidebar ? 'SideBar-nav-menu-user-not-logged active' : 'SideBar-nav-menu-user-not-logged'}
                        ref={node}
                        onClick={(e) => (handleScroll(e))}>
                        {/*<ul className='SideBar-nav-menu-items '>*/}
                        <ul className='SideBar-nav-menu-items ' style={{zIndex: '5000'}}>
                            <SignInDropdown showSidebar={showSidebar}/>
                        </ul>
                    </nav>
                )}


            </IconContext.Provider>
        </>
    );
};

export default SignInBtn;