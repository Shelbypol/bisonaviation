import React, {useEffect, useLayoutEffect, useState} from 'react'
import {ListGroup, Row, Image} from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {Jumbotron} from "reactstrap";
import StickyHeader from "../../components/Headers-Nav-Footer/StickyHeader";
import MobileHeader from "../../components/Headers-Nav-Footer/MobileHeader";
import {useDispatch, useSelector} from "react-redux";
import {listMyWishLists} from "../../actions/wishListActions";
// import heroImg from '../../images/bg-graphics/screen-products-display/divider-white-bg-cropped.png'
import heroImg from '../../images/bg-graphics/divider-no-bg.png';
import HeroDivider from "../../components/HeroDivider";
import DesktopHeader from "../../components/Headers-Nav-Footer/DesktopHeader";

const ProductsDisplayScreen = ({match, history}) => {

    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1000;

    const dispatch = useDispatch();

    useEffect(() => {

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [dispatch, width]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    return (
        <>
            {width < breakpoint ? (
                <MobileHeader/>
            ) : (
                    <DesktopHeader/>
            )}

                    <HeroDivider
                        img={''}
                        showImg={false}
                        title={''}
                    />

            {/*<div className=' global_HeroDivider-margin mt-4' >*/}
                <Jumbotron className='CatMan_screen-bg mb-0 px-0 pt-0 pb-0' style={{zIndex: '2'}} fluid>

                    <>
                        <Meta title='Bison | Products'/>

                        <Row xs={12} className='CatMan-nav-menu'>
                            {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}
                            <CategoryManufacturerDisplay match={match} history={history}/>

                        </Row>
                    </>

                </Jumbotron>
            {/*</div>*/}

        </>
    )
};

export default ProductsDisplayScreen;