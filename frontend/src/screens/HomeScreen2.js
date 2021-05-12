import React, {useLayoutEffect} from 'react'
import '../style/global-2.css'
import HomeHero from '../components/HomeHero'
import RepairAward from '../components/home-screen/RepairAward'
import Services from "../components/home-screen/Services";
import Avionics from "../components/home-screen/Avionics";
import Mechanics from "../components/home-screen/Mechanics";
import Team from "../components/home-screen/Team";
import Flir from "../components/home-screen/Flir";
import {Col, Container, Jumbotron, Row, Button} from 'react-bootstrap';
import Garmin from "../components/Garmin";
import MultiCarouselPage from "../components/MulitCarouselPage";
import AvionicsAd from "../components/avionics-Screen/AvionicsAd";
import AvionicsHome from "../components/home-screen/AvionicsHome";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Fade from 'react-reveal/Fade';
import '../style/2/AvionicsProducts.css';
import '../style/2/AvionicsProductsFlag.scss';
import {LinkContainer} from "react-router-bootstrap";
import ProductCarousel from "../components/ProductCarousel";


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

            <RepairAward/>

            <Row className='d-flex justify-content-center' style={{backgroundColor: 'black'}}>
                <Col xs={12}>

                    <Services/>

                    <Row className='AvionicsHome_image d-flex justify-content-center m-0 p-0'>
                        <Col xs={12} className=''>
                            {/*<Col xs={12} className='AvionicsHome_image '>*/}
                            <Row className='d-flex justify-content-center mb-0 p-0'>
                                <Col md={10} xs={12}
                                     style={{zIndex: '3000'}}>
                                    <AvionicsHome/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='my-auto py-5 d-flex justify-content-center align-content-center global_blood-red-bg'>
                        <Col xs={12} className=''>
                            <Row className='d-flex justify-content-center align-content-center my-auto p-0'>
                                <Col md={10} xs={12}
                                     style={{zIndex: '3000'}}>
                                    <Garmin/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='mt-5 d-flex justify-content-center mb-0 pb-0'>
                        <Col xs={12} className='global_black mb-0 pb-0'>
                            <Row className='d-flex justify-content-center m-0 p-0'>
                                <Col md={10} xs={12} className=''
                                     style={{zIndex: '3000'}}>
                                    <Mechanics/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <TestimonialCarousel/>


                    <Row className='mt-5 d-flex justify-content-center mb-0 pb-5'>
                        <Col xs={12} className='Global_Flir_bg-img mb-0 pb-0'>
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

        </>

    )
};
export default HomeScreen2