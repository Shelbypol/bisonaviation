import React from "react";
import Fade from 'react-reveal/Fade';
import {Col, Row} from "react-bootstrap";
import AvionicsProducts from "./Avionics/AvionicsProducts";
import '../style/2/GarminHomeFlag.scss'
import ProductCarousel from "./Products/ProductsCarousel/ProductCarousel";


const GarminAd = () => {
    return (
        <Row className='d-flex justify-content-center Garmin_card-row bg-white'>
            <Col md={6} xs={12} className='d-flex align-content-center m-0 p-0'>
                <AvionicsProducts/>
            </Col>
            <Col md={6} xs={12} className='bg-white d-flex justify-content-center m-0 p-0'>
                <Fade duration={1500} right>
                    <ProductCarousel/>
                </Fade>
            </Col>
        </Row>

    )
};
export default GarminAd