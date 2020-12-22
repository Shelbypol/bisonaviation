import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ProductCarousel from "./ProductCarousel";

const MultiCarouselPage = () => {
    return (
            <Row md={12}>
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