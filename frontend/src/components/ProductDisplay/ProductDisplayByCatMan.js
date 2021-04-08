import React from "react";
import {Col, Row} from "react-bootstrap";
import Paginate from "../Paginate";
import Product from "./Product";
import CategoryManufacturerDisplay from "./CategoryManufacturerDisplay";

const ProductsDisplaySByCatMan = ({sideBar, history, match, updateCatProp, updateManufacturerProp, keyword, pages, page, products}) => {


    return (
        <>
            <Row xs={12} className='pl-5 pr-5 bg-white'>
                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>

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