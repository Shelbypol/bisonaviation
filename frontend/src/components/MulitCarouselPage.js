import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Row, Col, Container, Image, Carousel} from 'react-bootstrap'
import ProductCarousel from "./ProductCarousel";
import {Link} from "react-router-dom";

const MultiCarouselPage = () => {



    return (

            <Row md={12} className='mt-3'>
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