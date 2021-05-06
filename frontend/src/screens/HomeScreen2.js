import React, {useLayoutEffect} from 'react'
import '../style/global-2.css'
import HomeHero from '../components/HomeHero'
import RepairAward from '../components/home-screen/RepairAward'
import Services from "../components/home-screen/Services";
import Avionics from "../components/home-screen/Avionics";
import Mechanics from "../components/home-screen/Mechanics";
import Flir from "../components/home-screen/Flir";
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';
import Garmin from "../components/Garmin";
import MultiCarouselPage from "../components/MulitCarouselPage";
import AvionicsAd from "../components/avionics-Screen/AvionicsAd";
import AvionicsHome from "../components/home-screen/AvionicsHome";
import TestimonialCarousel from "../components/TestimonialCarousel";


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

            {/*<Container className='m-0 p-0' fluid>*/}
            <RepairAward/>

            <Row className='d-flex justify-content-center' style={{backgroundColor: 'black'}}>
                <Col xs={12}>

                    <Services/>

                    <Row className='mt-5 d-flex justify-content-center mb-0 pb-0'>
                        <Col xs={12} className='AvionicsHome_image mb-0 pb-0'>
                            <Row className='d-flex justify-content-center m-0 p-0'>
                                <Col md={10} xs={12} className=''
                                     style={{zIndex: '3000'}}>
                                    <AvionicsHome/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='mt-5 d-flex justify-content-center mb-0 pb-0'>
                        <Col xs={12} className='global_rich-black-bg mb-0 pb-0'>
                            <Row className='d-flex justify-content-center m-0 p-0'>
                                <Col md={10} xs={12} className=''
                                     style={{zIndex: '3000'}}>
                                    <Mechanics/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <TestimonialCarousel/>

                    <hr className='global_blood-red-bg mt-n1'/>
                    <Row className='mt-5 d-flex justify-content-center mb-0 pb-0'>
                        <Col xs={12} className='global_rich-black-bg mb-0 pb-0'>
                            <Row className='d-flex justify-content-center m-0 p-0'>
                                <Col md={10} xs={12} className=''
                                     style={{zIndex: '3000'}}>
                                    <Flir/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>

            {/*</Container>*/}

        </>

    )
};
export default HomeScreen2