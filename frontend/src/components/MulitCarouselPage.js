import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ProductCarousel from "./ProductCarousel";

const MultiCarouselPage = () => {
    return (
            <Row>
                <Col>
                    <ProductCarousel/>
                </Col>
                <Col>
                    <ProductCarousel/>
                </Col>
                <Col>
                    <ProductCarousel/>
                </Col>
                <Col>
                    <ProductCarousel/>
                </Col>
            </Row>
    )
};

export default MultiCarouselPage