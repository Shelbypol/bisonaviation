import React, {useLayoutEffect} from 'react'
import {Col, Row} from 'react-bootstrap';
import HomeCarousel from '../../components/Home/HomeCarousel'
import HomeAwardBanner from '../../components/Home/HomeAwardBanner'
import HomeServices from "./HomeServices";
import HomeMaintenance from "../../components/Home/HomeMaintenance";
import HomeFlir from "../../components/Home/HomeFlir";
import GarminAdProductCarousel from "../GarminAd/GarminAdProductCarousel";
import HomeAvionics from "./HomeAvionics";
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
            <Row className='d-flex justify-content-center'>
                <Col xs={12} className='' style={{zIndex: '1'}}>

                    <HomeAwardBanner/>

                    <Row className='my-md-5 mb-sm-0 mt-sm-3 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='mb-md-5 mb-sm-0' style={{zIndex: '3000'}}>
                            <HomeServices/>
                        </Col>
                    </Row>

                    <Row className='my-md-5 py-md-5 mt-sm-0 py-sm-0
                     d-flex justify-content-center'>
                        <Col md={9} xs={12} className='mb-5' style={{zIndex: '3000'}}>
                            <HomeAvionics/>
                        </Col>
                    </Row>

                    <Row className='my-md-5 py-md-5 my-sm-0 py-sm-0 d-flex justify-content-center'>
                        <Col md={9} xs={12} style={{zIndex: '3000'}} className='mb-md-5 mb-sm-0'>
                            <GarminAdProductCarousel/>
                        </Col>
                    </Row>

                    <Row className='my-md-5 py-md-5 my-sm-0 py-sm-0 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='mb-5' style={{zIndex: '3000'}}>
                            <HomeMaintenance/>
                        </Col>
                    </Row>

                    <Row className='my-md-5 py-md-5 my-sm-0 py-sm-0 d-flex justify-content-center'>
                        <Col md={9} xs={12} className='global_blood-red-bg mb-5' style={{zIndex: '3000'}}>
                            <TestimonialCarousel/>
                        </Col>
                    </Row>

                    <Row className='my-md-5 py-md-5 my-sm-0 py-sm-0 d-flex justify-content-center'>
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