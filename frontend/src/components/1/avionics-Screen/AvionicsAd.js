import React, {useState} from 'react';
import {Col, Button, Row} from "react-bootstrap";
import {Jumbotron} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import '../../../style/avionicsScreen/AvionicsAd.css';
import {LinkContainer} from "react-router-bootstrap";
import AvionicsProducts from "../../1/AvionicsProducts";

const AvionicsAd = () => {

        return (
            <Jumbotron className='m-0 p-0 global_blood-red-bg AvionicsAd_jumbo' fluid>

            <Row className='AvionicsAd_jumbo AvionicsProducts_row'>
                <Col xs={7} className=''>
                    <Fade duration={1500} left>
                      <Row clasName='AvionicsProducts_img-left'>

                          {/*<AvionicsProducts/>*/}

                          <Col>
                              <h1>AD HERE</h1>
                          </Col>
                          <Col>
                              <p>Lorem ipsum dolor</p>
                          </Col>
                      </Row>
                    </Fade>
                </Col>
                <Col xs={5} className='AvionicsProducts_searchBtn-col global_blood-red-bg'>
                    <Fade duration={1500} right>
                        {/*<p>lorem</p>*/}
                        {/*<LinkContainer to={`/products`}>*/}
                        {/*    <div className='global_cultured d-flex justify-content-end align-items-center'>*/}
                        {/*        <Button className='AvionicsProducts_searchBtn'>Browse Products</Button>*/}
                        {/*    </div>*/}
                        {/*</LinkContainer>*/}
                    </Fade>
                </Col>

            </Row>


             </Jumbotron>
        );
    }
;

export default AvionicsAd