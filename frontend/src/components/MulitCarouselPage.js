import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ProductCarousel from "./ProductCarousel";

const MultiCarouselPage = () => {
    return (
        <>
            <Row md={12} className='d-xs-none'>
                <Row md={6}>
                    <Col>
                        <ProductCarousel/>
                    </Col>
                    <Col>
                        <ProductCarousel/>
                    </Col>
                </Row>
                <Row md={6}>
                    <Col>
                        <ProductCarousel/>
                    </Col>
                    <Col>
                        <ProductCarousel/>
                    </Col>
                </Row>
            </Row>

            <Row xs={12} className='d-md-none'>
                    <Col>
                        <ProductCarousel/>
                    </Col>

            </Row>
        </>
    )
};

export default MultiCarouselPage