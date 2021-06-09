import React, {useEffect, useState} from "react";
import {Col, Row, Image, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "./ProductsImgDisplay";
import Loader from "../Loader";
import Message from "../Message";
import './ProductsSideBar.css'
import './CategoryManufacturerSideBar.css'
import ad1 from '../../images/uploads copy/image-1608754595861.jpg';
import ad2 from '../../images/uploads copy/image-1608754966157.jpg';
import ad3 from '../../images/uploads copy/image-1608754463191.jpg';

const ProductHeroAd = ({products}) => {

    const adRow = {
        height: '36vh',
    };

    const indAd = {
        height: '18vh'
    };


    // const dispatch = useDispatch();

    // const productList = useSelector(state => state.productList);
    // const {products, pages, page, loading, error} = productList;

    //
    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch]);



    return (
        <>
            <Row style={adRow}>
                <Col xs={12} xl={8} className='d-flex justify-content-end global_white-bg'>
                    <Row>
                        <Col lg={4} className='d-flex align-items-center text-center'>
                            <Row>
                                <Col xs={12}>
                                    <h1 className='global_blood-red font-weight-bold'>Ad Title</h1>
                                </Col>
                                <Col xs={12} className='px-5'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Image src={ad1} className='rounded w-100' style={adRow}/>
                        </Col>

                    </Row>
                </Col>

                <Col xs={4} className='text-center d-none d-xl-block'>
                    <Row>
                        <Col xs={12} style={indAd} className='d-flex align-items-center mb-1'>
                            <Row className='d-flex align-items-center'>
                                <Col xs={6}>
                                    <h6 className='global_goldenrod'>Lorem ipsum dolor sit amet.</h6>
                                </Col>
                                <Col xs={6}>
                                    <Image src={ad2} className='w-75 rounded' style={indAd}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} style={indAd} className='d-flex align-items-center'>
                            <Row className='d-flex align-items-center'>
                                <Col xs={6}>
                                    <h6 className='global_goldenrod'>Lorem ipsum dolor sit amet.</h6>
                                </Col>
                                <Col xs={6}>
                                    <Image src={ad3} className='w-75 rounded' style={indAd}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>



        </>
    )

};

export default ProductHeroAd

