import React, {useLayoutEffect} from 'react'
import {Col, Row} from 'react-bootstrap';
import HomeCarousel from '../../components/Home/HomeCarousel'
import HomeAwardBanner from '../../components/Home/HomeAwardBanner'
import HomeServices from "../../components/Home/HomeServices";
import HomeMaintenance from "../../components/Home/HomeMaintenance";
import HomeFlir from "../../components/Home/HomeFlir";
import GarminAdProductCarousel from "../GarminBanner/GarminAdProductCarousel";
import HomeAvionics from "../../components/Home/HomeAvionics";
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel"

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
            <Row className='d-flex justify-content-center global_black'>
                <Col xs={12} className='' style={{zIndex: '1'}}>

                    {/*<Row className='m-0 p-0 d-flex justify-content-center'>*/}
                    {/*    <Col xs={12} className='mx-0 mt-0 mb-n3 p-0' style={{zIndex: '1'}}>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    <HomeAwardBanner/>

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
                            <GarminAdProductCarousel/>
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