import React, {useState, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import WishListTabInfo from "./WishListTabInfo";
import '../../style/WishListTab.css'
import {useDispatch, useSelector} from "react-redux";

const WishList = () => {

    return (

        <Navbar id='app' className='wishList'>
            <NavItem icon={
                <span className='global_cursor pr-3 ' style={{fontSize: '1.3em'}}>
                    <i className="fal fa-envelope-open-text"> </i>
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

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const dispatch = useDispatch();
    const node = useRef(open);

    useEffect(() => {
        // document.addEventListener("scroll", handleScroll);
        // document.addEventListener("click", handleClick);
        return () => {
            // document.removeEventListener("scroll", handleScroll);
            // document.removeEventListener("click", handleClick);
        };
    }, [cartItems]);

    // const handleClick = e => {
    //     if (node.current.contains(e.target) === false) {
    //         setOpen(false)
    //     }
    // };

    // const handleScroll = e => {
    //     if (node.current.contains(e.target) === false) {
    //         setOpen(false)
    //     }
    // };
    // const handleClick = (e) => {
    //     if (node.current.contains(e.target) === false) {
    //         setOpen(false)
    //     }
    // };

    return (
        // <li onClick={(e) => {
        //     // setOpen(!open);
        // }} className="wishList-nav-item pt-2">
         <li ref={node} onClick={(e) => {
             // handleClick(e);
            // setOpen(!open);
            //  handleScroll(e)
         }} className="wishList-nav-item pt-1"
             >
            {/*<li ref={node} onClick={(e) => (handleScroll(e))} className="wishList-nav-item">*/}
            {/*<a href="#" className="wishList-icon-button" onClick={() => setOpen(!open)}>*/}
            <a onClick={() => setOpen(!open)}>
                {cartItems.length === 0 ? (
                    <span className='global_cursor StickyHeader_links w-100'>&nbsp;{props.icon}</span>
                ) : (
                    <>
                        <span className=' global_cursor StickyHeader_links w-100 text-white'>{cartItems.length}&nbsp;{props.icon}&nbsp;</span>
                    </>
                )}
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
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
        setMenuHeight(dropdownRef.current)
    }, []);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const DropdownItem = (props) => {
        return (
            <a className="wishList-menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
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
                onEnter={calcHeight}
            >
                <div className="wishList-menu">
                    <DropdownItem >
                        <WishListTabInfo/>
                    </DropdownItem>


                </div>
            </CSSTransition>

        </div>
    );
};
export default WishList;