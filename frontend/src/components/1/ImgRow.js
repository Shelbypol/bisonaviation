import React from "react";
import {Col, Jumbotron, Row} from "reactstrap";
import '../../style/1/ImgRow.css';
import {Container} from "react-bootstrap";

const ImgRow = () => {

    return (

        <>

            <Jumbotron id='home-avionics' className='py-4 global_rich-black-bg m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron className='global_cultured-bg m-0 p-0' fluid>
                {/*<Container className='p-0 fluid'>*/}
                    <Row>
                        <Col xs={2} className='ImgRow_row-bg-1 Flir_shadow'> </Col>
                        <Col xs={2} className='ImgRow_row-bg-2 Flir_shadow'> </Col>
                        <Col xs={2} className='ImgRow_row-bg-3 Flir_shadow'> </Col>
                        <Col xs={2} className='ImgRow_row-bg-4 Flir_shadow'> </Col>
                        <Col xs={2} className='ImgRow_row-bg-5 Flir_shadow'> </Col>
                        <Col xs={2} className='ImgRow_row-bg-6 Flir_shadow'> </Col>
                    </Row>
                {/*</Container>*/}
            </Jumbotron>

        </>
    )
};

export default ImgRow