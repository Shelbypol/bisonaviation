import React, {useState, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import WishListTabInfo from "./WishListTabInfo";
import '../../style/WishListTab.css'
import {Button, Row} from "react-bootstrap";
import {EMAIL_RESET} from "../../constants/emailConstants";
import {useDispatch, useSelector} from "react-redux";

const WishList = () => {

    return (

        <Navbar id='app' className='wishList'>
            <NavItem icon={
                <span className='global_cursor pr-3' style={{fontSize: '1.3em'}}>
                    <i className="m-auto fal fa-cart-arrow-down global_heart-whiteBgRedHover "> </i>
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
    const node = useRef();

    useEffect(() => {
        // add when mounted
        document.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClick);
        };
    }, [cartItems]);

    const handleScroll = e => {
        if (node.current.contains(e.target) === false){
            setOpen(false)
        }
    };
    const handleClick = e => {
        if (node.current.contains(e.target) === false){
            setOpen(false)
        }
    };

    return (
        <li ref={node} onClick={(e) =>{ handleScroll(e); handleClick(e);}} className="wishList-nav-item pt-2">
        {/*<li ref={node} onClick={(e) => (handleScroll(e))} className="wishList-nav-item">*/}
            {/*<a href="#" className="wishList-icon-button" onClick={() => setOpen(!open)}>*/}
            <a onClick={() => setOpen(!open)}>
                <p className='global_bisonRedTxt global_cursor pt-2'>{cartItems.length}&nbsp;{props.icon}</p>
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
        // <div className="wishList-Dropdown" >
        <div className="wishList-Dropdown" style={{height: menuHeight}} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="wishList-menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="wishList-menu">
                    {/*<DropdownItem><Button onClick={}>X</Button> </DropdownItem>*/}
                    <DropdownItem>
                        <WishListTabInfo/>
                    </DropdownItem>


                    {/*<DropdownItem*/}
                    {/*    // leftIcon={<i className='fa fa-long-arrow-left'> </i>}*/}
                    {/*    rightIcon={<i className='fa fa-long-arrow-right'> </i>}*/}
                    {/*    goToMenu="settings">*/}
                    {/*    Settings*/}
                    {/*</DropdownItem>*/}


                </div>
            </CSSTransition>

            {/*<CSSTransition*/}
            {/*    in={activeMenu === 'main'}*/}
            {/*    timeout={500}*/}
            {/*    classNames="wishList-menu-primary"*/}
            {/*    unmountOnExit*/}
            {/*    onEnter={calcHeight}*/}
            {/*>*/}
            {/*    <div className="wishList-menu">*/}
            {/*        /!*<DropdownItem><Button onClick={}>X</Button> </DropdownItem>*!/*/}
            {/*        /!*<DropdownItem>*!/*/}
            {/*        /!*    <WishListTabInfo/>*!/*/}
            {/*        /!*</DropdownItem>*!/*/}

            {/*        /!*<DropdownItem*!/*/}
            {/*        /!*    // leftIcon={<i className='fa fa-long-arrow-left'> </i>}*!/*/}
            {/*        /!*    rightIcon={<i className='fa fa-long-arrow-right'> </i>}*!/*/}
            {/*        /!*    goToMenu="settings">*!/*/}
            {/*        /!*    Settings*!/*/}
            {/*        /!*</DropdownItem>*!/*/}

            {/*    </div>*/}
            {/*</CSSTransition>*/}

        </div>
    );
};
export default WishList;