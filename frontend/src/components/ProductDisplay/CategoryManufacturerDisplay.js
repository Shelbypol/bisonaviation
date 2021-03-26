import React, {useEffect, useState} from "react";
import {Col, Nav, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "./ProductDisplayByCatMan";
import Loader from "../Loader";
import Message from "../Message";
import '../../style/CategoryManufacturerSideBar.css'
import {Route} from "react-router-dom";
import SearchBox from "../SearchBox";
import {Container} from "react-bootstrap/cjs";

const CategoryManufacturerDisplay = ({match, history}) => {

    const [sideBar, setSideBar] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);

    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');

    const breakpoint = 1000;

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
        if (width < breakpoint) {
                setSideBar(!sideBar);
            }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);


    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber, setUpdateManufacturer, setUpdateCat, width]);


    // const sidebarBreak = () => {
    // };

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    //SIDE BAR
    const showSideBar = () => setSideBar(!sideBar);

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setUpdateManufacturer('');
        setUpdateCat(a);
        if(width < breakpoint){
            setSideBar(!sideBar);
        }
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
        if(width < breakpoint){
            setSideBar(!sideBar);
        }
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        setUpdateManufacturer(a);
        if(width < breakpoint){
            setSideBar(!sideBar);
        }
    };

    const maufacturerArr = [...new Set(products.map(product => product.brand))];
    const catArr = [...new Set(products.map(product => product.category))];


    return (
        <>
            {loading ?
                (<Loader/>)
                : error ?
                    (<Message variant='danger'>{error}</Message>)
                    : (
                        <>
                            {sideBar ? (
                                <>
                                    <Col lg={2} xs={12} className='global_cursor CatMan_sidebar-icon '>
                                        <h5 onClick={showSideBar}
                                            className='pl-4 pt-3 global_white-text-red-hover'>X</h5>
                                    </Col>
                                    <Col lg={10} xs={0}> </Col>
                                </>
                            ) : (
                                <>
                                    <Col lg={2} xs={12} className='bg-white global_cursor CatMan_sidebar-icon pl-4 pt-2'>
                                        <h6 className='global_blood-red' onClick={showSideBar}><span><h3
                                            className='d-inline'>|||</h3></span>&nbsp;categories
                                        </h6>
                                    </Col>
                                    <Col lg={10} xs={0}> </Col>
                                </>
                            )}

                            {sideBar ? (
                                <>
                                    <Col lg={2} xs={12} className='CatMan-nav-menu-items'>
                                        {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}

                                        <Route render={({history}) => <SearchBox history={history}
                                                                                 formClasses={'pb-2 ml-n2 StickyHeader_searchBox'}
                                                                                 searchSize={'sm'}
                                                                                 searchClasses={'col-9 py-0 bg-white border-top border-bottom border-left'}
                                                                                 btnSize={'sm'}
                                                                                 btnClasses={'bg-white StickyHeader_search_btn_padding px-1 col-2 rounded-right border-top border-bottom border-right'}
                                                                                 iconClass={'fal fa-search p-0'}
                                        />}/>


                                        {(updateManufacturer !== '' || updateCat !== '') &&
                                        (
                                            <>
                                                <Row xs={12}
                                                     className='global_accentFont CatMan-title d-flex justify-content-start p-0'>
                                                    <h3 className='pl-3 global_cursor text-white'>{updateManufacturer || updateCat}</h3>
                                                </Row>

                                                {/* ALL PRODUCTS*/}
                                                <Row xs={12}
                                                     className='global_accentFont mb-0 d-flex justify-content-start '
                                                     onClick={displayAllHandler}>
                                                    <p className='global_cursor CatMan-sub-titles py-2'>All
                                                        Products</p>
                                                </Row>

                                                {/*   ALL CATEGORIES  */}
                                                <Row xs={12}
                                                     className='global_accentFont d-flex justify-content-start mt-n3'>
                                                    <p className='global_cursor CatMan-sub-titles py-2'>Categories</p>
                                                </Row>

                                                {products.map(product => (
                                                    <Row xs={12}
                                                         onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                         className='btn btn-block global_cursor d-flex justify-content-start CatMan_items'
                                                         type='button'
                                                         key={product._id}
                                                    >
                                                        {/*<h6 className=''>*/}
                                                        {product.category}
                                                        {/*</h6>*/}
                                                    </Row>
                                                ))}

                                                {/*   ALL MANUFACTURES  */}
                                                <Row xs={12}
                                                     className='global_accentFont mt-4 d-flex justify-content-start'
                                                >
                                                    <p className='global_cursor CatMan-sub-titles py-2'>Manufactures</p>
                                                </Row>

                                                {products.map(product => (
                                                    <Row xs={12}
                                                         onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                                         className='btn btn-block global_cursor d-flex justify-content-start CatMan_items'
                                                         type='button'
                                                         key={product._id}
                                                    >
                                                        {/*<h6 className='CatMan_items'>*/}
                                                        {product.brand}
                                                        {/*</h6>*/}
                                                    </Row>
                                                ))}

                                            </>

                                        )}

                                        {/*==============================================================================*/}

                                        {/*    ALL CAT & ALL MAN INITIAL DISPLAY    */}
                                        {(updateCat === '' && updateManufacturer === '') && (
                                            <>
                                                <Row xs={12}
                                                     className='global_accentFont mb-3 mt-0 d-flex justify-content-start global_cursor CatMan-title'>
                                                    <h5 onClick={displayAllHandler}
                                                        className='py-3 CatMan-title'>Categories</h5>
                                                </Row>

                                                {catArr.map((product, index) => (
                                                    <Row xs={12}
                                                         onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                         className='btn btn-block global_cursor d-flex justify-content-start CatMan_items'
                                                         type='button'
                                                         key={index}
                                                    >
                                                        {/*<h6 className='CatMan-ind-item'>*/}
                                                        {product}
                                                        {/*</h6>*/}
                                                    </Row>
                                                ))}

                                                <Row xs={12}
                                                     className='global_accentFont mb-3 mt-3 d-flex justify-content-start global_cursor CatMan-title'>
                                                    <h5 onClick={displayAllHandler}
                                                        className='py-3 CatMan-title'>Manufacturers</h5>
                                                </Row>

                                                {maufacturerArr.map((product, index) => (
                                                    <Row xs={12}
                                                         onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                         className='btn btn-block global_cursor d-flex justify-content-start CatMan_items'
                                                         type='button'
                                                         key={index}
                                                    >
                                                        {/*<h6 className='CatMan-ind-item'>*/}
                                                        {product}
                                                        {/*</h6>*/}
                                                    </Row>

                                                ))}


                                            </>
                                        )}
                                    </Col>
                                    <Col lg={10} xs={12} className='mt-5'>
                                        <ProductDisplayByCatMan products={products}
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
                                </>
                            ) : (
                                <Col xs={12} className='mt-5'>
                                    <ProductDisplayByCatMan products={products}
                                                            history={history}
                                                            match={match}
                                                            keyword={keyword}
                                                            pages={pages}
                                                            page={page}
                                                            updateCatProp={updateCat}
                                                            updateManufacturerProp={updateManufacturer}/>
                                </Col>
                            )}

                        </>

                    )}
        </>
    )
};

export default CategoryManufacturerDisplay