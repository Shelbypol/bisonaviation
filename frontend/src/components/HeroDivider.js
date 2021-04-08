import React from 'react'
import '../style/HeroDivider.css';
import {Jumbotron, Image, Row, Col} from "react-bootstrap";
import graphic from '../images/bg-graphics/graphics/black-top-large-left.png'

const HeroDivider = ({img}) => {

    return (
        <>
            <Row className='HeroDivider_wrap'>
                <Col xs={12}
                     // style={{img}}
                     className='
                     align-items-center
                     d-flex
                     HeroDivider_img-title-wrap
                     m-0
                     p-0
                     justify-content-lg-center
                     justify-content-sm-start
                     '>
                    <p className='HeroDivider_title'>Ask the experts!</p>
                </Col>
                <Col xs={12}
                     className='
                     bg-transparent
                     HeroDivider_graphic
                     m-0
                     p-0
                     border
                     '>
                </Col>
            </Row>


        </>
    )
};

export default HeroDivider