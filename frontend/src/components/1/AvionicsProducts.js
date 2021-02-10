import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Jumbotron} from 'reactstrap';
import '../../style/1/AvionicsProducts.css'
import Fade from 'react-reveal/Zoom';

const AvionicsProducts = () => {


        return (
            <Jumbotron className='global_cultured mt-4 mx-0 mb-0 p-0 AvionicsProducts_jumbo' fluid>

                <Row>
                    <Col xs={6}>
                        <Fade duration={3000} left>
                            <div className='AvionicsProducts_jumbo-1 global_eerie-black-bg'>
                                <h1>from left</h1>
                            </div>
                        </Fade>
                    </Col>
                    <Col xs={6}>
                        <Fade duration={3000} right>
                            <div className='AvionicsProducts_jumbo-1 global_blood-red-bg'>
                                <h1>from left</h1>
                            </div>
                        </Fade>
                    </Col>

                </Row>


            </Jumbotron>
        );
    }
;

export default AvionicsProducts;