import React from "react";
import {Col, Row} from "react-bootstrap";
import Paginate from "../Paginate";
import Product from "./Product";

const ProductsDisplaySByCatMan = ({sideBar, history, match, updateCatProp, updateManufacturerProp, keyword, pages, page, products}) => {


    return (
        <>
            {/*<Row xs={12}*/}
            {/*     className='global_accentFont my-3 d-flex justify-content-start'>*/}
            {/*    <h3 className='global_bisonRedTxt global_cursor my-0 py-0'>{updateCatProp || updateManufacturerProp}</h3>*/}
            {/*</Row>*/}
            <Row xs={12} className=' pl-5 d-flex justify-content-center align-items-center bg-white'>
                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>

                {/*{(updateManufacturerProp !== '' || updateCatProp !== '') && (*/}
                {/*        [].map(empty => (<Product product={empty}/>)))*/}
                {/*}*/}

                {/*CATEGORY*/}
                    {(updateCatProp !== '') && (
                        <>
                            {products.filter(product => product.category === updateCatProp).map(filteredProduct => (
                                <Col key={filteredProduct._id}  lg={sideBar ? 4 : 3} md={4} sm={12}>
                                    <Product product={filteredProduct} history={history} match={match}/>
                                </Col>

                            ))}
                        </>
                    )}


                {(updateManufacturerProp !== '') && (
                    <>
                        {products.filter(product => product.brand === updateManufacturerProp).map(filteredProduct => (
                            <Col key={filteredProduct._id} lg={sideBar ? 4 : 3} md={4} sm={12}>
                                <Product product={filteredProduct} history={history} match={match}/>
                            </Col>
                        ))}
                    </>
                )}

                {(updateManufacturerProp === '' && updateCatProp === '') && (
                    <>
                        {products.map(product => (
                            <Col key={product._id} lg={sideBar ? 4 : 3} md={4} sm={12}>
                                <Product product={product} history={history} match={match}
                                         product_id={product._id}/>
                            </Col>
                        ))}
                    </>
                )}

                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
            </Row>
        </>
    )
};
export default ProductsDisplaySByCatMan