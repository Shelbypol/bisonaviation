import React, {useState} from 'react';
import {Col, Button, Row} from "react-bootstrap";
import {Jumbotron} from 'reactstrap';
import Fade from 'react-reveal/Zoom';
import '../../style/1/AvionicsProducts.css'
import '../../style/1/AvionicsProductsFlag.scss'

const AvionicsProducts = () => {


        return (
            <Jumbotron className='global_cultured mt-2 mx-0 mb-0 p-0 AvionicsProducts_jumbo' fluid>

                <Row>
                    <Col xs={8}>
                        <Fade duration={1500} left>
                            <div className='AvionicsProducts_jumbo AvionicsProducts_img-left global_eerie-black-bg'>
                                <p className='Avionics_flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                                {/*<h1 className='text-center global_cultured AvionicProducts_jumbo-left'>Certified Garmin Dealers</h1>*/}
                            </div>
                        </Fade>
                    </Col>
                    <Col xs={4}>
                        <Fade duration={1500} right>
                            <div className='AvionicsProducts_jumbo global_cultured d-flex justify-content-center align-items-center'>
                                <Button className='AvionicsProducts_searchBtn'>Browse Products</Button>
                            </div>
                        </Fade>
                    </Col>
                    {/*<Col xs={6}>*/}
                    {/*    <Fade duration={2000} right>*/}
                    {/*        <div className='AvionicsProducts_jumbo AvionicsProducts_img-right global_blood-red-bg'>*/}
                    {/*        </div>*/}
                    {/*    </Fade>*/}
                    {/*</Col>*/}

                </Row>


            </Jumbotron>
        );
    }
;

export default AvionicsProducts;