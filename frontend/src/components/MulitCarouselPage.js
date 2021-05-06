import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductCarousel from "./ProductCarousel";


const MultiCarouselPage = () => {


    return (

            <Row md={12} className='mt-3 d-flex justify-content-center'>
                    <Col>
                        <ProductCarousel />
                    </Col>
                    <Col>
                        <ProductCarousel x={'1'}/>
                    </Col>
                    <Col>
                        <ProductCarousel x={'2'} />
                    </Col>
            </Row>
    )
};

export default MultiCarouselPage