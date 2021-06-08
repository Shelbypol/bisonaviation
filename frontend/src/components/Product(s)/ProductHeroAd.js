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
            <Row style={{height: '50vh'}} className='global_white-bg'>
                <Col xs={12} className='d-flex justify-content-center mb-0 pb-0'>
                    <Row>
                        <Col lg={4} className='d-flex align-items-center justify-content-end text-center'>
                            <Row>
                                <Col xs={12}>
                                    <h1 className='global_blood-red font-weight-bold'>Ad Title</h1>
                                </Col>
                                <Col xs={12} className='px-5'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={7} className='d-flex align-items-center'>
                            <Image src={ad1} className='rounded w-100 mt-3' style={{height: '30vh'}}/>
                        </Col>

                    </Row>
                </Col>

                {/*<Col xs={4} className='text-center global_light-transparent py-3'>*/}
                {/*    <Row>*/}
                {/*        <Col xs={12} >*/}
                {/*            <Row className='d-flex align-content-center'>*/}
                {/*                <Col xs={6}>*/}
                {/*                    <h6 className='global_goldenrod'>Lorem ipsum dolor sit amet.</h6>*/}
                {/*                    <p>Lorem ipsum dolor sit amet?</p>*/}
                {/*                </Col>*/}
                {/*                <Col xs={6}>*/}
                {/*                    <Image src={ad2} className='h-50 w-50 mb-2'/>*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        </Col>*/}
                {/*        <Col xs={12}>*/}
                {/*            <Row className='d-flex align-content-center'>*/}
                {/*                <Col xs={6}>*/}
                {/*                    <h6 className='global_goldenrod'>Lorem ipsum dolor sit amet.</h6>*/}
                {/*                    <p>Lorem ipsum dolor sit amet, consectetur?</p>*/}
                {/*                </Col>*/}
                {/*                <Col xs={6}>*/}
                {/*                    <Image src={ad2} className='h-50 w-50 mb-2'/>*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Col>*/}


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

