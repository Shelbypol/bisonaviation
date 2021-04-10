import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import SideBarData from "./SideBarData";
import '../../style/SideBar.css'
import {IconContext} from 'react-icons';
import {useSelector} from "react-redux";

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

                {userInfo ? (
                    <Link to='#'>
                        <p onClick={showSidebar} className='SideBar_Name pt-2 pr-2'>{userInfo.name}</p>
                    </Link>
                ) : (
                    <Link to='#'>
                        <span onClick={showSidebar} className='SideBar_Login'>Login</span>
                    </Link>
                )}

                {userInfo ? (
                    <nav className={sidebar ? 'SideBar-nav-menu-user-logged active' : 'SideBar-nav-menu-user-logged'} ref={node}
                         onClick={(e) => (handleScroll(e))}>
                        <ul className='SideBar-nav-menu-items'>
                            <SideBarData showSidebar={showSidebar}/>
                        </ul>
                    </nav>
                ) :(
                <nav className={sidebar ? 'SideBar-nav-menu-user-not-logged active' : 'SideBar-nav-menu-user-not-logged'} ref={node}
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