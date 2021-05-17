import React, {useLayoutEffect} from 'react'
import '../style/global-2.css'
import HomeHero from '../components/HomeHero'
import HomeAwardBanner from '../components/Home/HomeAwardBanner'
import HomeServices from "../components/Home/HomeServices";
import HomeMaintenance from "../components/Home/HomeMaintenance";
import Flir from "../components/Home/Flir";
import {Col, Row} from 'react-bootstrap';
import Garmin from "../components/Garmin";
import HomeAvionics from "../components/Home/HomeAvionics";
import TestimonialCarousel from "../components/TestimonialCarousel";
import '../style/2/AvionicsProducts.css';
import '../style/2/AvionicsProductsFlag.scss';



const HomeScreen2 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <HomeHero/>

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
                            <Garmin/>
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
                            <Flir/>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </>

    )
};
export default HomeScreen2