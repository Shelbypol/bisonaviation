import React from "react";
import Fade from 'react-reveal/Fade';
import {Col, Row} from "react-bootstrap";
import GarminAd from "./GarminAd";
import './GarminAd.css';
import './GarminAdFlag.scss';
import ProductCarousel from "../ProductCarousel/ProductCarousel";


const GarminAdProductCarousel = () => {
    return (
        <Row className='d-flex justify-content-center bg-white'>
            <Col md={7} xs={12} className='d-flex align-content-center m-0 p-0'>
                <GarminAd/>
            </Col>
            <Col md={5} xs={12} className='bg-white d-flex justify-content-center m-0 p-0'>
                    <ProductCarousel/>
            </Col>
        </Row>

    )
};
export default GarminAdProductCarousel