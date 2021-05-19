import React from 'react';
import {Col, Button, Row} from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import {LinkContainer} from "react-router-bootstrap";



const GarminAd = () => {

        return (
            <>
                <Row className='AvionicsProducts_row d-flex align-content-center'>
                    <Fade duration={1500} left>
                        <Col md={12} xs={8} className='AvionicsProducts_img-left '>
                            <p className='Avionics_flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                            <Fade duration={1500} right>
                                <LinkContainer to={`/products`}>
                                    <div
                                        className='AvionicsProducts_jumbo global_cultured d-flex justify-content-center align-items-center'>
                                        <Button className='AvionicsProducts_searchBtn global_blood-red-bg py-2 px-5'>Browse
                                            Products</Button>
                                    </div>
                                </LinkContainer>
                            </Fade>
                        </Col>
                    </Fade>

                </Row>
            </>
        );
    }
;

export default GarminAd;