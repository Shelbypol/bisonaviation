import React, {useEffect, useRef, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import SideBarData from "./SideBarData";
import '../../style/SideBar.css'
import {IconContext} from 'react-icons';
import {LinkContainer} from "react-router-bootstrap";
import {Button, Nav, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);

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
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                {/*<div>*/}
                {/*<div className='SideBar-navbar' >*/}
                {/*<Link to='#' className='SideBar-menu-bars'>*/}
                {/*<FaIcons.FaBars onClick={showSidebar} />*/}
                {userInfo ? (
                    <Link to='#'>
                        <p onClick={showSidebar} className='pt-4 pr-4'>{userInfo.name}</p>
                    </Link>
                ) : (
                    <Link to='#'>
                        <p onClick={showSidebar} className='pt-4 pr-4'>Login</p>
                    </Link>
                )}
                {/*</div>*/}
                <nav className={sidebar ? 'SideBar-nav-menu active' : 'SideBar-nav-menu'} ref={node}
                     onClick={(e) => (handleScroll(e))}>
                    <ul className='SideBar-nav-menu-items'>

                        <SideBarData showSidebar={showSidebar}/>

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default SideBar;