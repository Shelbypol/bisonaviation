import React from "react";
import Fade from 'react-reveal/Fade';
import {Col, Row} from "react-bootstrap";
import AvionicsProducts from "./AvionicsProducts";
import '../style/2/GarminHomeFlag.scss'
import ProductCarousel from "./ProductCarousel";


const Garmin = () => {


    return (
        <Row className='d-flex justify-content-center Garmin_card-row bg-white'>
            <Col xs={6} className='d-flex align-content-center  m-0 p-0'>
                <AvionicsProducts/>
            </Col>
            <Col xs={6} className='bg-white d-flex justify-content-center m-0 p-0'>
                <Fade duration={1500} right>
                    <ProductCarousel/>
                </Fade>
            </Col>
        </Row>

    )
};
export default Garmin