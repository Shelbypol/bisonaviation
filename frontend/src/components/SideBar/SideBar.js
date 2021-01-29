import React, {useEffect, useRef, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import '../../style/SideBar.css'
import { IconContext } from 'react-icons';

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    const [open, setOpen] = useState(false);


    const node = useRef();
    useEffect(() => {
        // add when mounted
        document.addEventListener("scroll", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("scroll", handleClick);
        };
    }, []);

    const handleClick = e => {
        if (node.current.contains(e.target) === false){
            setOpen(false)
        }
    };
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='SideBar-navbar' >
                    <Link to='#' className='SideBar-menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'SideBar-nav-menu active' : 'SideBar-nav-menu'} ref={node} onClick={(e) => (handleClick(e))}>
                    <ul className='SideBar-nav-menu-items' onClick={showSidebar} >
                        {/*<li className='SideBar-navbar-toggle'>*/}
                        {/*    <Link to='#' className='SideBar-menu-bars'>*/}
                        {/*        <AiIcons.AiOutlineClose style={{color: '#000'}}/>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} >
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