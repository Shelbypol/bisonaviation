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
                        {/*<p onClick={showSidebar}>Login</p>*/}
                    </Link>
                </div>
                <nav className={sidebar ? 'SideBar-nav-menu active' : 'SideBar-nav-menu'} ref={node} onClick={(e) => (handleClick(e))}>
                    <ul className='SideBar-nav-menu-items' >

                        <SideBarData showSidebar={ showSidebar}/>

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default SideBar;