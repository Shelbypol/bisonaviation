import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import SideBarProductData from "./SideBarProductData";
import '../../style/SideBarProduct.css'
import {IconContext} from 'react-icons';
import {useSelector} from "react-redux";
import SideBarData from "../SideBar/SideBarData";

const SideBarProduct = ({match, history, pageNumber, keyword}) => {
    const [sidebar, setSidebar] = useState(false);


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


                <Link to='#'>
                    <h3 onClick={showSidebar} className='SideBarProduct_Name mt-3'>|||</h3>
                </Link>

                    <nav className={sidebar ? 'SideBarProduct-nav-menu-user-clicked active' : 'SideBarProduct-nav-menu-user-not-clicked'}
                         ref={node}
                         onClick={(e) => (handleScroll(e))}>
                        {/*< className='SideBarProduct-nav-menu-items'>*/}
                            <SideBarProductData showSidebar={showSidebar} match={match} pageNumber={pageNumber} keyword={keyword} history={history}/>
                        {/*</>*/}
                    </nav>



            </IconContext.Provider>
        </>
    );
};

export default SideBarProduct;