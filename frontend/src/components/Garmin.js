import React from "react";
import Fade from 'react-reveal/Fade';
import {Card, Col, Row, Jumbotron} from "react-bootstrap";
// import product from '../images/bg-graphics/home-screen/GTN625_HR_820.jpg'
// import product from '../images/bg-graphics/avionics/GTN625_HR_820.jpg'
import AvionicsProducts from "./AvionicsProducts";
import '../style/2/GarminHomeFlag.scss'
import ProductCarousel from "./ProductCarousel";


const Garmin = () => {


    return (
            <Row className='d-flex justify-content-around m-0 p-0 Garmin_card-row'>
                <Col xs={5} className='bg-transparent d-flex justify-content-center'>
                    <Fade duration={1500} right>
                        <Card style={{width: '18rem'}} className='border-0 bg-transparent'>
                            <Card.Body>
                                <ProductCarousel/>
                            </Card.Body>
                        </Card>
                    </Fade>
                </Col>

                <Col xs={7} className='d-flex align-content-center'>
                    <AvionicsProducts/>
                </Col>

            </Row>




    )
};
export default Garmin