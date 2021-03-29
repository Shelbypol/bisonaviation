import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {Jumbotron} from "reactstrap";
import StickyHeader from "../../components/Headers-Nav-Footer/StickyHeader";
import MobileHeader from "../../components/Headers-Nav-Footer/MobileHeader";
import {useDispatch, useSelector} from "react-redux";

const ProductsDisplayScreen = ({match, history}) => {

    const [header, setHeader] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1000;

    const dispatch = useDispatch();


    useEffect(() => {
       // headerSize();
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);

    }, [dispatch, width]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        if (width < breakpoint) {
            setHeader(!header);
        }
    };

    return (
        <>
            {header ? (
                <MobileHeader/>
            ) : (
                <StickyHeader/>
            )}

            <Jumbotron className='bg-white mt-n5 mb-0 p-0' fluid>

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