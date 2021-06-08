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
import ad1 from '../../images/uploads copy/image-1608754595861.jpg';

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

            {/*<Col lg={10} className='mb-5'>*/}
                <Row>

                    <Col xs={12} className='d-flex justify-content-center'>
                        <Row>
                            {/*  SHOW ON LG */}
                            <Col lg={5} className='d-flex align-items-center justify-content-end text-center'>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Ad Title</h2>
                                    </Col>
                                    <Col xs={12}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={7} className='d-flex justify-content-center'>
                                <Image src={ad1} className='rounded h-75 w-75 mt-3 mb-5'/>
                            </Col>
                        </Row>


                    </Col>
                            <Col xs={12} className='global_black-bg'>
                            </Col>


                    {/*<Col lg={4} className='d-none d-lg-block'>*/}
                    {/*    <Row  className='mt-3 pr-2'>*/}
                    {/*        <Col xs={12} className=''>*/}
                    {/*            <Row>*/}
                    {/*                <Col lg={4} className='d-flex align-items-center justify-content-center'>*/}
                    {/*                    <Row>*/}
                    {/*                        <Col xs={12}>*/}
                    {/*                            <h5>Ad Title</h5>*/}
                    {/*                        </Col>*/}
                    {/*                    </Row>*/}
                    {/*                </Col>*/}
                    {/*                <Col lg={8} className='mt-3'>*/}
                    {/*                    <Image src={ad1} className='h-100 w-100'/>*/}
                    {/*                </Col>*/}
                    {/*            </Row>*/}
                    {/*        </Col>*/}
                    {/*        <Col xs={12} className='mt-5'>*/}
                    {/*            <Row>*/}
                    {/*                <Col lg={4} className='d-flex align-items-center justify-content-center'>*/}
                    {/*                    <Row>*/}
                    {/*                        <Col xs={12}>*/}
                    {/*                            <h5>Ad Title</h5>*/}
                    {/*                        </Col>*/}
                    {/*                    </Row>*/}
                    {/*                </Col>*/}
                    {/*                <Col lg={8}>*/}
                    {/*                    <Image src={ad1} className='h-100 w-100'/>*/}
                    {/*                </Col>*/}
                    {/*            </Row>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}

                    {/*</Col>*/}
                </Row>


            {/*</Col>*/}

        </>
    )

};

export default ProductHeroAd

