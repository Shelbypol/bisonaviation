import React, {useEffect, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CART_RESET} from "../../constants/cartConstants";
import {logout} from "../../actions/userActions";
import Login from "../Login";
import '../../style/SideBarProduct.css'
import {Col, Row} from "react-bootstrap";
import SearchBox from "../SearchBox";
import {listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "../ProductDisplay/ProductDisplayByCatMan";

const SideBarProductData = ({showSidebar, match, history, keyword, pageNumber}) => {
    const [loginShow, setLoginShow] = useState(false);


    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');

    keyword = match.params.keyword;

    pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, loginShow, updateCat, updateManufacturer, setUpdateManufacturer, setUpdateCat]);


    //  SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setUpdateManufacturer('');
        setUpdateCat(a)
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('')
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        setUpdateManufacturer(a)
    };

    const maufacturerArr = [...new Set(products.map(product => product.brand))];
    const catArr = [...new Set(products.map(product => product.category))];


    return (
        <>
            <Col xs={2} className='CatMan-nav-menu-items min-vh-100 '>
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

            {/*<Col xs={10} className='mt-5'>*/}
            {/*    <ProductDisplayByCatMan products={products}*/}
            {/*                            history={history}*/}
            {/*                            match={match}*/}
            {/*                            keyword={keyword}*/}
            {/*                            pages={pages}*/}
            {/*                            page={page}*/}
            {/*                            updateCatProp={updateCat}*/}
            {/*                            updateManufacturerProp={updateManufacturer}/>*/}
            {/*</Col>*/}
           </>
    )
};
export default SideBarProductData

