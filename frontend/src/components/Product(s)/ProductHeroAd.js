import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "./ProductsImgDisplay";
import Loader from "../Loader";
import Message from "../Message";
import './ProductsSideBar.css'
import './CategoryManufacturerSideBar.css'
import {Route} from "react-router-dom";
import ProductsSearchBox from "./ProductsSearchBox";
import Paginate from "../Paginate";

const ProductHeroAd = () => {

    // const dispatch = useDispatch();

    // const productList = useSelector(state => state.productList);
    // const {products, pages, page, loading, error} = productList;

    //
    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch]);


    return(
        <>

            <Col lg={10} style={{height: '20vh'}}>
                <Row>
                    <Col lg={8} className='border'>
                        <Row>
                            <Col lg={6}><h1>Ad Title</h1> </Col>
                            <Col lg={6}>picture </Col>
                        </Row>
                    </Col>
                    <Col className='border' lg={4}>Ad 2 </Col>
                    <Col className='border' lg={4}> Ad 3</Col>
                </Row>


            </Col>

        </>
    )

};

export default ProductHeroAd

