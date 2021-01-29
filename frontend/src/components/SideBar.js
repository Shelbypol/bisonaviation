import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import '../style/SideBar.css'
import { IconContext } from 'react-icons';

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='SideBar-navbar'>
                    <Link to='#' className='SideBar-menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'SideBar-nav-menu active' : 'SideBar-nav-menu'}>
                    <ul className='SideBar-nav-menu-items' onClick={showSidebar}>
                        <li className='SideBar-navbar-toggle'>
                            <Link to='#' className='SideBar-menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideBar;