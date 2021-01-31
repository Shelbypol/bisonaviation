import React, {useEffect, useRef, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import SideBarDataLogin from "./SideBarDataLogin";
// import SideBarData from "./SideBarDataLogin";
import '../../style/SideBar.css'
import {IconContext} from 'react-icons';
import {LinkContainer} from "react-router-bootstrap";
import {Button, Nav, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";

const SideBarLogin = () => {
    const [sidebar, setSidebar] = useState(false);

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const node = useRef();
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const showSidebar = () => setSidebar(!sidebar);

    const handleClick = e => {
        if (node.current.contains(e.target) === false) {
            setSidebar(false)
        }
    };


    const handleScroll = e => {
        if (node.current.contains(e.target) === false) {
            setSidebar(false)
        }
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                {/*<div>*/}
                {/*<div className='SideBarLogin-navbar' >*/}
                {/*<Link to='#' className='SideBarLogin-menu-bars'>*/}
                {/*<FaIcons.FaBars onClick={showSidebar} />*/}
                {userInfo ? (
                    <Link to='#'>
                        <p onClick={showSidebar} className='pr-4'>{userInfo.name}</p>
                    </Link>
                ) : (
                    <Link to='#'>
                        <p onClick={showSidebar} className=' pr-4'>Login</p>
                    </Link>
                )}
                {/*</div>*/}
                <nav className={sidebar ? 'SideBarLogin-nav-menu active' : 'SideBarLogin-nav-menu'} ref={node}
                     // onClick={(e) => (handleScroll(e))}>
                     onClick={(e) => { handleScroll(e); handleClick(e);}}>
                    <ul className='SideBar-nav-menu-items'>

                        <SideBarDataLogin showSidebar={showSidebar}/>

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default SideBarLogin;