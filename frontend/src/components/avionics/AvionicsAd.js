import React, {useState} from 'react';
import {Col, Button, Row} from "react-bootstrap";
import {Jumbotron} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import '../../style/avionicsScreen/AvionicsAd.css';
import {LinkContainer} from "react-router-bootstrap";

const AvionicsAd = () => {

        return (
            <Jumbotron className='global_cultured mx-0 mb-0 p-0 global_blood-red-bg AvionicsAd_jumbo' fluid>

            <Row className='AvionicsAd_jumbo'>
                <Col xs={6} className='global_cultured-bg'>
                    <Fade duration={1500} left>
                      <Row clasName='AvionicsProducts_img-left'>
                          {/*<Col>*/}
                          {/*    <h1>AD HERE</h1>*/}
                          {/*</Col>*/}
                          {/*<Col>*/}
                          {/*    <p>Lorem ipsum dolor</p>*/}
                          {/*</Col>*/}
                      </Row>
                    </Fade>
                </Col>
                <Col xs={6} className='AvionicsProducts_searchBtn-col global_blood-red-bg'>
                    <Fade duration={1500} right>
                        <LinkContainer to={`/products`}>
                            <div className='global_cultured d-flex justify-content-end align-items-center'>
                                <Button className='AvionicsProducts_searchBtn'>Browse Products</Button>
                            </div>
                        </LinkContainer>
                    </Fade>
                </Col>

            </Row>


             </Jumbotron>
        );
    }
;

export default AvionicsAd