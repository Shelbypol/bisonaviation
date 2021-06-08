import React, {useEffect, useState} from "react";
import {Col, Row, Image, Button} from "react-bootstrap";
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
import ad1 from '../Avionics/images/avionics1.png'

const ProductHeroAd = ({products}) => {

    // const dispatch = useDispatch();

    // const productList = useSelector(state => state.productList);
    // const {products, pages, page, loading, error} = productList;

    //
    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch]);


    return (
        <>

            <Col lg={12} className='mb-5'>
                <Row>
                    <Col lg={8} xs={12} className='global_light-transparent'>
                        <Row>
                            {/*  SHOW ON LG */}
                            <Col lg={4} className='d-flex align-items-center justify-content-center'>
                                <Row>
                                    <Col xs={12}>
                                        <h1>Ad Title</h1>
                                    </Col>
                                    <Col xs={12}>
                                        <Button>go</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Image src={ad1} className='h-100 w-100 mt-3 mb-5'/>
                            </Col>
                            {/*/!*  SHOW ON SM & MD *!/*/}
                            {/*<Col lg={4} className='d-flex align-items-center justify-content-center d-bock d-lg-none'>*/}
                            {/*    <Row>*/}
                            {/*        <Col xs={12}>*/}
                            {/*            <h1>Ad Title</h1>*/}
                            {/*        </Col>*/}
                            {/*        <Col xs={12}>*/}
                            {/*            <Button>go</Button>*/}
                            {/*        </Col>*/}
                            {/*    </Row>*/}
                            {/*</Col>*/}
                        </Row>
                    </Col>
                    <Col lg={4} className='d-none d-lg-block'>
                        <Row>
                            <Col xs={12}>
                                <Row>
                                    <Col lg={4} className='d-flex align-items-center justify-content-center'>
                                        <Row>
                                            <Col xs={12}>
                                                <h1>Ad Title</h1>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={8} className='mt-3'>
                                        <Image src={ad1} className='h-100 w-100'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} className='mt-5'>
                                <Row>
                                    <Col lg={4} className='d-flex align-items-center justify-content-center'>
                                        <Row>
                                            <Col xs={12}>
                                                <h1>Ad Title</h1>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={8}>
                                        <Image src={ad1} className='h-100 w-100'/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                </Row>


            </Col>

        </>
    )

};

export default ProductHeroAd

