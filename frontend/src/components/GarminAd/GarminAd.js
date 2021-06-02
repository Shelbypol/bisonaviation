import React from 'react';
import {Col, Button, Row, Image} from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import {LinkContainer} from "react-router-bootstrap";

import garminad from './garmin-ad.png'


const GarminAd = () => {

        return (
            <>
                <Fade duration={1500} top>
                    <Row className=' d-flex align-content-center pb-2'>
                        <Col xs={12}>
                            <p className='GarminAd_flag red global_accentFont mt-n3 mb-0 mx-0 global_white'>NEW!</p>
                            <Image src={garminad} fluid/>
                        </Col>
                        <Col md={10} xs={12} className='d-flex justify-content-center'>
                            <LinkContainer to={`/products`}>
                                <Button className='GarminAd_browse-products-btn global_goldenrodtxtborder-btn py-3  '>Browse
                                    Products</Button>
                            </LinkContainer>
                        </Col>

                    </Row>
                </Fade>
            </>
        );
    }
;

export default GarminAd;