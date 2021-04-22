import React from "react";
import {Button, Col, Row, Card, Container, Jumbotron, Image} from "react-bootstrap";
import '../../style/2/AvionicsHome.css';
import panel from '../../images/bg-graphics/home-screen/home-slider/fullscreen-slider2.png'


const AvionicsHome = () => {

    return (
        <>
            <Jumbotron fluid className='AvionicsHome_image'> </Jumbotron>
            <Container fluid className='m-0 p-0'>

                <Row className='AvionicsHome_row d-flex justify-content-center'>

                    <Col xs={8}
                         className='AvionicsHome_title-col d-flex justify-content-center align-content-center'>
                        <h1 className='text-white'>Avionics</h1>
                    </Col>
                    <Col xs={8}
                         className='AvionicsHome_title-col d-flex justify-content-center align-content-center'>
                        <p> Whether you need to add ADS-B OUT capabilities in order to meet the December
                            31,
                            2019 deadline, a routine pitot-static / transponder certification, or it's
                            time
                            for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                            your avionics systems into the 21st century!</p>
                    </Col>


                </Row>


            </Container>

        </>

    )
};

export default AvionicsHome