import React from 'react';
import {Col, Button, Row, Image} from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import {LinkContainer} from "react-router-bootstrap";

import garminad from './garmin-ad.png'


const GarminAd = () => {

        return (
            <>
                <Row className=' d-flex align-content-center pb-2'>
                    <Col xs={12}>
                        <Fade duration={1500} top>
                            <p className='GarminAd_flag red global_accentFont mt-n3 mb-0 mx-0'>NEW!</p>
                            <Image src={garminad} fluid/>
                        </Fade>
                    </Col>
                    <Col md={10} xs={12} className='d-flex justify-content-center'>
                        <Fade duration={1500} top>
                            <LinkContainer to={`/products`}>
                                <Button className='GarminAd_browse-products-btn global_blood-red-bg py-3  '>Browse
                                    Products</Button>
                            </LinkContainer>
                        </Fade>
                    </Col>

                </Row>
            </>
        );
    }
;

export default GarminAd;