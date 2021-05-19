import React, {useLayoutEffect} from 'react'
import '../../style/global-2.css'
import HomeCarousel from '../../components/Home/HomeCarousel'
import HomeAwardBanner from '../../components/Home/HomeAwardBanner'
import HomeServices from "../../components/Home/HomeServices";
import HomeMaintenance from "../../components/Home/HomeMaintenance";
import HomeFlir from "../../components/Home/HomeFlir";
import {Col, Row} from 'react-bootstrap';
import ProductsCarouselGarminAd from "../GarminBanner/ProductsCarouselGarminAd";
import HomeAvionics from "../../components/Home/HomeAvionics";
import TestimonialCarousel from "../Carousels/TestimonialCarousel"
import '../GarminBanner/GarminBanner.css';
import '../../style/2/AvionicsProductsFlag.scss';

const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <HomeCarousel/>

            <HomeAwardBanner/>

            <Row className='d-flex justify-content-center' style={{backgroundColor: 'black'}}>
                <Col xs={12} className=''>


                    <Row className='my-5 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='mb-5' style={{zIndex: '3000'}}>
                            <HomeServices/>
                        </Col>
                    </Row>


                    <Row className='my-5 py-5 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='mb-5' style={{zIndex: '3000'}}>
                            <HomeAvionics/>
                        </Col>
                    </Row>

                    <Row className='my-5 py-5 d-flex justify-content-center'>
                        <Col md={9} xs={12} style={{zIndex: '3000'}} className='mb-5'>
                            <ProductsCarouselGarminAd/>
                        </Col>
                    </Row>

                    <Row className='my-5 py-5 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='mb-5' style={{zIndex: '3000'}}>
                            <HomeMaintenance/>
                        </Col>
                    </Row>

                    <Row className='my-5 py-5 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='global_blood-red-bg mb-5' style={{zIndex: '3000'}}>
                            <TestimonialCarousel/>
                        </Col>
                    </Row>

                    <Row className='my-5 py-5 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='' style={{zIndex: '3000'}}>
                            <HomeFlir/>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </>

    )
};
export default HomeScreen