import React, {useState} from 'react';
import {Col, Button, Row} from "react-bootstrap";
import {Jumbotron} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import '../../style/1/AvionicsProducts.css';
import '../../style/1/AvionicsProductsFlag.scss';
import {LinkContainer} from "react-router-bootstrap";
import ProductCarousel from "../ProductCarousel";

const AvionicsProducts = () => {

        return (
            // <Jumbotron className='global_cultured mx-0 mb-0 p-0 AvionicsProducts_jumbo' fluid>
            <>

            <Row className='AvionicsProducts_row bg-white'>
            <Col xs={6}>
                    <Fade duration={1500} left>
                        <div className='AvionicsProducts_jumbo AvionicsProducts_img-left'>
                            <p className='Avionics_flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                            {/*<h1 className='text-center global_cultured AvionicProducts_jumbo-left'>Certified Garmin Dealers</h1>*/}
                        </div>
                    </Fade>
                </Col>
                <Col xs={6} className='AvionicsProducts_searchBtn-col'>
                    <Fade duration={1500} right>
                        <LinkContainer to={`/products`}>
                            <div
                                className='AvionicsProducts_jumbo global_cultured d-flex justify-content-end align-items-center'>
                                <Button className='AvionicsProducts_searchBtn'>Browse Products</Button>
                            </div>
                        </LinkContainer>
                    </Fade>
                </Col>
                {/*<Col xs={6}>*/}
                {/*    <Fade duration={2000} right>*/}
                {/*        <div className='AvionicsProducts_jumbo AvionicsProducts_img-right global_blood-red-bg'>*/}
                {/*        </div>*/}
                {/*    </Fade>*/}
                {/*</Col>*/}

            </Row>


            </>
            // </Jumbotron>
        );
    }
;

export default AvionicsProducts;