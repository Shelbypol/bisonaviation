import React, {useEffect, useRef, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductsImgDisplay from "./ProductsImgDisplay";
import Loader from "../Loader";
import Message from "../Message";
import './ProductsSideBar.css'
import './CategoryManufacturerSideBar.css'
import {Route} from "react-router-dom";
import ProductsSearchBox from "./ProductsSearchBox";
import Paginate from "../Paginate";
import ProductHeroAd from "./ProductHeroAd";
import SignInDropdown from "../SignIn/SignInDropdown";

const ProductsPage = ({match, history}) => {

    const [sideBar, setSideBar] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');
    const [clicked, setClicked] = useState(false);
    const [showAd, setShowAd] = useState(true);

    const breakpoint = 1000;
    const keyword = match.params.keyword;
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;

    const node = useRef();

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
        // document.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleWindowResize);
        // handleWindowResize();
        // document.removeEventListener("scroll", handleScroll);// };
    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber, width, showAd, sideBar]);

    const handleWindowResize = () => {
        if (window.innerWidth < breakpoint) {
            setSideBar(false)
        } else {
            setSideBar(true)
        }
        setWidth(window.innerWidth);
    };

    const handleScroll = e => {
        // if (node.current.contains(e.target) === false) {
        //     setSideBar(false)
        // }else if(node.current.contains(e.target) === null){
        //     setSideBar(false)
        // }
    };


    //SIDE BAR
    const showSideBar = () => setSideBar(!sideBar);

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        // setClicked(true);
        setUpdateManufacturer('');
        setUpdateCat(a);
        handleWindowResize();
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
        handleWindowResize();
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        // setClicked(true);
        setUpdateCat('');
        setUpdateManufacturer(a);
        handleWindowResize();
    };

    const manufacturerArr = [...new Set(products.map(product => product.brand))];
    const catArr = [...new Set(products.map(product => product.category))];


    return (
        <>
            {loading ?
                (
                    <div className='min-vh-100 min-vw-100 d-flex justify-content-center align-content-center'>
                        <Loader/>
                    </div>
                )
                : error ?
                    (
                        <div className='min-vh-100 min-vw-100 d-flex justify-content-center align-content-center'>
                            <Message variant='danger'>{error}</Message>
                        </div>
                    )
                    : (
                        <>

                            <Col lg={2} xs={12}
                                 className=' global_cursor ProductsSideBar_icon pl-4 pt-3 pb-3 mt-lg-4 global_black'>
                                <h6 className='global_blood-red bg-white' onClick={showSideBar}><span><h3
                                    className='d-inline global_blood-red'>|||</h3>&nbsp;categories</span>
                                </h6>
                            </Col>

                            <Col lg={10} xs={0}> </Col>


                            {/*===========   SIDE BAR    ============*/}
                            <Row>
                                <Col
                                    lg={sideBar && 2}
                                    md={sideBar && 3}
                                    xs={sideBar && 5}
                                    className={sideBar ? 'ProductsSideBar_menu active' : 'ProductsSideBar_menu '}
                                    ref={node}
                                    onClick={(e) => (handleScroll(e))}
                                >

                                    <Route render={({history}) => <ProductsSearchBox history={history}
                                                                                     formClasses={'pb-2 mt-1'}
                                                                                     searchSize={'sm'}
                                                                                     searchClasses={'py-0 ProductsSideBar_search-bar'}
                                                                                     btnSize={'sm'}
                                                                                     btnClasses={'bg-dark text-white ProductsSideBar_search-btn px-1 rounded-right'}
                                                                                     iconClass={'fal fa-search p-0'}
                                    />
                                    }
                                    />

                                    {(updateManufacturer !== '' || updateCat !== '') && (
                                        <>
                                            <Row className='global_accentFont ProductsSideBar_text py-2 '>
                                                <h4 className=' global_cursor global_blood-red'>{updateManufacturer || updateCat}</h4>
                                            </Row>

                                            {/* ALL PRODUCTS*/}
                                            <Row
                                                className='global_accentFont'
                                                onClick={displayAllHandler}>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>
                                                    All Products
                                                </h6>
                                            </Row>

                                            {/*   ALL CATEGORIES  */}
                                            <Row className='global_accentFont'>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Categories</h6>
                                            </Row>

                                            <Row className='ProductsSideBar_items-bg'>
                                                {catArr.map((product, index) => (
                                                    <Col xs={12}
                                                         onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                         className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                                         type='button'
                                                         key={index}
                                                    >
                                                        {product}
                                                    </Col>
                                                ))}
                                            </Row>

                                            {/*   ALL MANUFACTURES  */}
                                            <Row className='global_accentFont mt-4'>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Manufactures</h6>
                                            </Row>

                                            <Row className='ProductsSideBar_items-bg'>
                                                {manufacturerArr.map((product, index) => (
                                                    <Col xs={12}
                                                         onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                         className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                                         type='button'
                                                         key={index}
                                                    >
                                                        {product}
                                                    </Col>
                                                ))}
                                            </Row>
                                        </>
                                    )}

                                    {/*==============================================================================*/}

                                    {/*    ALL CAT & ALL MAN INITIAL DISPLAY    */}
                                    {(updateCat === '' && updateManufacturer === '') && (
                                        <>
                                            {/* ALL PRODUCTS*/}
                                            <Row
                                                className='global_accentFont'
                                                onClick={displayAllHandler}>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>All
                                                    Products</h6>
                                            </Row>

                                            <Row
                                                className='global_accentFont'>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Categories</h6>
                                            </Row>

                                            <Row className='ProductsSideBar_items-bg'>
                                                {catArr.map((product, index) => (
                                                    <Col xs={12}
                                                         onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                         className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                                         type='button'
                                                         key={index}
                                                    >
                                                        {product}
                                                    </Col>
                                                ))}
                                            </Row>

                                            <Row
                                                className='global_accentFont mt-3 ProductsSideBar_text global_cursor '>
                                                <h6 onClick={displayAllHandler}
                                                    className='ProductsSideBar_sub-titles'>Manufacturers</h6>
                                            </Row>

                                            <Row className='ProductsSideBar_items-bg'>
                                                {manufacturerArr.map((product, index) => (
                                                    <Col xs={12}
                                                         onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                         className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                                         type='button'
                                                         key={index}
                                                    >
                                                        {product}
                                                    </Col>
                                                ))}
                                            </Row>
                                        </>
                                    )}
                                </Col>

                                <Col
                                    lg={sideBar ? 9 : 12}
                                    md={sideBar ? 8 : 12}
                                    xs={sideBar ? 6 : 12}
                                    className='d-flex justify-content-end border'
                                >

                                    {/*     HERO AD    */}
                                    <Row>
                                        {showAd && (
                                            <Col xs={12}>
                                                <button
                                                    onClick={() => {
                                                        setShowAd(!showAd)
                                                    }}
                                                    className=' bg-transparent global_blood-red border-0 global_cursor'>
                                                    {showAd && (
                                                        <>
                                                            hide
                                                        </>
                                                    )}
                                                </button>
                                                <ProductHeroAd products={products}/>
                                            </Col>
                                        )}

                                        <Col xs={11}>
                                            <ProductsImgDisplay products={products}
                                                                history={history}
                                                                match={match}
                                                                keyword={keyword}
                                                                pages={pages}
                                                                page={page}
                                                                updateCatProp={updateCat}
                                                                updateManufacturerProp={updateManufacturer}
                                                                sideBar={sideBar}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    )}
        </>
    )
};

export default ProductsPage