import React from "react";
import {Col, Row} from "react-bootstrap";
import Paginate from "../Paginate";
import ProductCard from "./ProductCard";

const ProductsImgDisplay = ({sideBar, history, match, updateCatProp, updateManufacturerProp, keyword, pages, page, products}) => {


    return (
        <>
                <Row>

                    {/*CATEGORY*/}
                    {(updateCatProp !== '') && (
                        <>
                            {products.filter(product => product.category === updateCatProp).map(filteredProduct => (
                                <Col key={filteredProduct._id} lg={sideBar ? 3 : 3} md={4} sm={12}>
                                    <ProductCard product={filteredProduct} history={history} match={match}/>
                                </Col>

                            ))}
                        </>
                    )}

                    {(updateManufacturerProp !== '') && (
                        <>
                            {products.filter(product => product.brand === updateManufacturerProp).map(filteredProduct => (
                                <Col key={filteredProduct._id} lg={sideBar ? 3 : 3} md={4} sm={12}>
                                    <ProductCard product={filteredProduct} history={history} match={match}/>
                                </Col>
                            ))}
                        </>
                    )}

                    {(updateManufacturerProp === '' && updateCatProp === '') && (
                        <>
                            {products.map(product => (
                                <Col key={product._id} lg={sideBar ? 3 : 3} md={4} sm={12}>
                                    <ProductCard product={product} history={history} match={match}
                                                 product_id={product._id}/>
                                </Col>
                            ))}
                        </>
                    )}

                    </Row>

            {sideBar ? (
                <Row className='d-lg-flex justify-content-lg-center ml-5 pl-5 pb-5 d-md-block d-sm-none fixed-bottom'>
                    <Paginate pages={pages} page={page} isAdmin={false} keyword={keyword ? keyword : ''}/>
                </Row>

            ) : (
                <Row className='d-lg-flex justify-content-lg-center pb-5 d-md-block d-sm-none fixed-bottom'>
                    <Paginate pages={pages} page={page} isAdmin={false} keyword={keyword ? keyword : ''}/>
                </Row>
            )}


        </>
)
};
export default ProductsImgDisplay