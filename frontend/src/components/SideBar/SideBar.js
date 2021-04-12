import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import SideBarData from "./SideBarData";
import '../../style/SideBar.css'
import {IconContext} from 'react-icons';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";

const SideBar = () => {
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
        if (node.current.contains(e.target) === false) {
            setSidebar(false)
        }
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
                        <Link to='#'>

                                <h6 onClick={showSidebar}
                                    className='SideBar_Name d-flex justify-content-center px-5'>{userInfo.name}</h6>
                        </Link>


                        <li className='SideBar-nav-text'>
                            <Link to='/profile'>
                                <i className="fas fa-user border-0"> </i>
                            </Link>
                        </li>

                        <li className='SideBar-nav-text'>
                            <Link onClick={logoutHandler} to='/'>
                                <i className="fal fa-sign-out border-0"> </i>
                            </Link>
                        </li>
                    </>
                ) : (
                    <Link to='#'>
                        <span onClick={showSidebar} className='SideBar_Login pr-1 pt-2'>Login</span>
                    </Link>
                )}

                {userInfo ? (
                    <nav className={sidebar ? 'SideBar-nav-menu-user-logged active' : 'SideBar-nav-menu-user-logged'}
                         ref={node}
                         onClick={(e) => (handleScroll(e))}>
                        <ul className='SideBar-nav-menu-items'>
                            <SideBarData showSidebar={showSidebar}/>
                        </ul>
                    </nav>
                ) : (
                    <nav
                        className={sidebar ? 'SideBar-nav-menu-user-not-logged active' : 'SideBar-nav-menu-user-not-logged'}
                        ref={node}
                        onClick={(e) => (handleScroll(e))}>
                        <ul className='SideBar-nav-menu-items ' style={{zIndex: '5000'}}>
                            <SideBarData showSidebar={showSidebar}/>
                        </ul>
                    </nav>
                )}


            </IconContext.Provider>
        </>
    );
};

export default SideBar;