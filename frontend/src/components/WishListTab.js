import React, {useState, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import WishListTabInfo from "./WishListTabInfo";
import '../style/WishListTab.css'

const WishList = () => {
    return (
        <Navbar className='m-0'>
            <NavItem icon={
                <span className={'SocialIcons_socialIcons'}>
                   <i className="m-auto fal fa-heart global_bisonRedTxt"> </i>
                 </span>
            }>
                <DropdownMenu> </DropdownMenu>
            </NavItem>
        </Navbar>
    );
};

const Navbar = (props) => {
    return (
        <nav className="wishList-navbar">
            <ul className="wishList-navbar-nav">{props.children}</ul>
        </nav>
    );
};

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="wishList-nav-item">
            {/*<a href="#" className="wishList-icon-button" onClick={() => setOpen(!open)}>*/}
            <a href="#" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
};

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const DropdownItem = (props) => {
        return (
            <a href="#" className="wishList-menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="wishList-icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="wishList-icon-right">{props.rightIcon}</span>
            </a>
        );
    };


    return (
        <div className="wishList-Dropdown" style={{height: menuHeight}} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="wishList-menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="wishList-menu">
                    <DropdownItem>
                        <WishListTabInfo />
                    </DropdownItem>

                    {/*<DropdownItem*/}
                    {/*    leftIcon={<i className='fa fa-long-arrow-left'> </i>}*/}
                    {/*    rightIcon={<i className='fa fa-long-arrow-right'> </i>}*/}
                    {/*    goToMenu="settings">*/}
                    {/*    Settings*/}
                    {/*</DropdownItem>*/}
                </div>
            </CSSTransition>
        </div>
    );
};
export default WishList;