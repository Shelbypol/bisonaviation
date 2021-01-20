import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Paginate from "./Paginate";
import Product from "./Product";
import {listProductDetails} from "../actions/productActions";
import {useDispatch, useSelector} from "react-redux";

const ProductsDisplaySByCatMan = ({history, match, updateCatProp, updateManufacturerProp, keyword, pages, page, products}) => {

    return (
        <>
            <Row xs={12}
                 className='global_accentFont my-3 d-flex justify-content-start'>
                <h3 className='global_bisonRedTxt global_cursor my-0 py-0'>{updateCatProp || updateManufacturerProp}</h3>
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>

            <Row xs={12}>
                {/*CATEGORY*/}
                {(updateCatProp !== '') && (
                    <>
                        {products.filter(product => product.category === updateCatProp).map(filteredProduct => (
                            <Col key={filteredProduct._id} sm={12} md={6} lg={3}
                                 className='d-flex flex-row align-items-stretch'>
                                <Product product={filteredProduct} history={history} match={match}
                                         />
                            </Col>
                        ))}
                    </>
                )}

                {(updateManufacturerProp !== '') && (
                    <>
                        {products.filter(product => product.brand === updateManufacturerProp).map(filteredProduct => (
                            <Col key={filteredProduct._id} sm={12} md={6} lg={3}
                                 className='d-flex flex-row align-items-stretch'>
                                <Product product={filteredProduct} history={history} match={match}
                                         product_id={filteredProduct._id}/>
                            </Col>
                        ))}
                    </>
                )}

                {(updateManufacturerProp === '' && updateCatProp === '') && (
                    <>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={3}
                                 className='d-flex flex-row align-items-stretch'>
                                <Product product={product} history={history} match={match}
                                         product_id={product._id}/>
                            </Col>
                        ))}
                    </>
                )}
            </Row>

            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
        </>
    )
};
export default ProductsDisplaySByCatMan