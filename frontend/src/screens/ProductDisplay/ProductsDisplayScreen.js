import React, {useEffect, useLayoutEffect, useState} from 'react'
import { Row } from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {Jumbotron} from "reactstrap";
import StickyHeader from "../../components/Header/StickyHeader";
import MobileHeader from "../../components/Header/MobileHeader";
import {useDispatch, useSelector} from "react-redux";
import HeroDivider from "../../components/HeroDivider";

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
                    <StickyHeader/>
            )}

                    <HeroDivider
                        img={''}
                        showImg={false}
                        title={''}
                    />

                <Jumbotron className='CatMan_screen-bg mb-0 px-0 pt-0 pb-0' style={{zIndex: '2'}} fluid>

                    <>
                        <Meta title='Bison | Products'/>

                        <Row xs={12} className='CatMan-nav-menu'>
                            {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}
                            <CategoryManufacturerDisplay match={match} history={history}/>

                        </Row>
                    </>

                </Jumbotron>

        </>
    )
};

export default ProductsDisplayScreen;