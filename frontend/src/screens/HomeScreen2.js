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

                    <Row className='mt-5 d-flex justify-content-center mb-0'>
                        <Col xs={12} className='AvionicsHome_image'>
                            <Row className='d-flex justify-content-center'>
                                <Col xs={9} style={{backgroundColor: 'rgba(0,0,0, .8)', zIndex: '3000'}}>
                                    <AvionicsHome/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <TestimonialCarousel/>

                    <Container className='p-0 fluid'>
                        <Mechanics/>
                    </Container>


                    <hr className='global_blood-red-bg mt-n1'/>
                    <Jumbotron
                        className='Global_Flir_bg-img mt-n3 mb-0 p-0 pb-5 d-flex align-content-stretch bg-transparent'
                        fluid>
                        <Container className='p-0 fluid'>
                            <Flir/>
                        </Container>
                    </Jumbotron>

                </Col>
            </Row>

            {/*</Container>*/}

        </>

    )
};
export default HomeScreen2