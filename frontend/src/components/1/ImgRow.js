import React from "react";
import {Col, Jumbotron, Row} from "reactstrap";
import '../../style/1/ImgRow.css';

const ImgRow = () => {

    return (

        <>
            <Jumbotron className='global_cultured-bg mb-0' fluid>
                <Row>
                    <Col xs={2} className='ImgRow_row-bg-1 Flir_shadow'> </Col>
                    <Col xs={2} className='ImgRow_row-bg-2 Flir_shadow'> </Col>
                    <Col xs={2} className='ImgRow_row-bg-3 Flir_shadow'> </Col>
                    <Col xs={2} className='ImgRow_row-bg-4 Flir_shadow'> </Col>
                    <Col xs={2} className='ImgRow_row-bg-5 Flir_shadow'> </Col>
                    <Col xs={2} className='ImgRow_row-bg-6 Flir_shadow'> </Col>
                </Row>
            </Jumbotron>

        </>
    )
};

export default ImgRow