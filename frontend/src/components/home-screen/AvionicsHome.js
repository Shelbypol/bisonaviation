import React from "react";
import {Button, Col, Row, Card, Container, Jumbotron, Image} from "react-bootstrap";
import '../../style/2/AvionicsHome.css';
import test from '../../images/bg-graphics/screen-avionics/avionics/avionics-hero-img.png'
// import tayseer from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics2.png'
import tests from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics4.png'
import roel from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics2.png'
import tayseer from '../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png'
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import MultiCarouselPage from "../MulitCarouselPage";
import AvionicsAd from "../avionics-Screen/AvionicsAd";
import ProductCarousel from "../ProductCarousel";

const AvionicsHome = () => {

    return (
        <>
            <Row className='AvionicsHome_row d-flex justify-content-center align-content-center'>
                <Col xs={12} className='AvionicsHome_bg pb-5'>
                    <Row className='d-flex justify-content-center'>
                        <Fade top>
                        <Col xs={12}
                             className=' AvionicsHome_title-col pb-5 d-flex justify-content-center align-content-center'>
                            <h1 className='AvionicsHome_title text-white'>Avionics</h1>
                        </Col>
                        </Fade>
                        <Fade bottom>
                            <Col md={10} xs={10} className='p-3 mx-auto'>
                                <p className='text-center AvionicsHome_text'>
                                    Whether you need to add ADS-B OUT capabilities in order to meet the December
                                    31,
                                    2019 deadline, a routine pitot-static / transponder certification, or it's
                                    time
                                    for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                    your avionics systems into the 21st century!
                                    <br/>
                                    <Button href="/avionics"
                                            className='py-1 px-2 border-0 mt-3 rounded-pill AvionicsHome_link'>learn
                                        more
                                    </Button>
                                </p>
                            </Col>
                        </Fade>

                        <Row className='mb-5'>

                            <Col xs={5} className='p-0 mx-0 m-0'>
                                <Row className='mx-0 mb-0 p-0'>

                                    <LinkContainer to={`/products`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_product-title p-0 m-0'>
                                                    {/*<Col className='p-0 m-0 d-flex justify-content-start'>*/}

                                                    {/*    <i className='Services_icon fal far fa-tools fa-stack-1x global_cultured '> </i>*/}
                                                    {/*</Col>*/}
                                                    <Col  className='px-0 py-2 m-0 Mechanics_col d-flex align-items-center justify-content-start '>
                                                        <p className='Avionics_text-titles '>Authorized avionics dealer</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    {/*<Col className='p-0 m-0 d-flex justify-content-start'>*/}
                                                    {/*    <i className='Services_icon fal far fa-tools fa-stack-1x global_cultured '> </i>*/}
                                                    {/*</Col>*/}
                                                    <Col className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>Annual Inspections</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    {/*<Col className='p-0 m-0 d-flex justify-content-start'>*/}

                                                    {/*    <i className='Services_icon fal far fa-tools fa-stack-1x global_cultured '> </i>*/}
                                                    {/*</Col>*/}
                                                    <Col  className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>Prop Balance</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    {/*<Col className='p-0 m-0 d-flex justify-content-start'>*/}

                                                    {/*    <i className='Services_icon fal far fa-tools fa-stack-1x global_cultured '> </i>*/}
                                                    {/*</Col>*/}
                                                    <Col className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>Pre-Buy Inspections</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    {/*<Col className='p-0 m-0 d-flex justify-content-start'>*/}

                                                    {/*    <i className='Services_icon fal far fa-tools fa-stack-1x global_cultured '> </i>*/}
                                                    {/*</Col>*/}
                                                    <Col  className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>30+ years of experience</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <Col xs={12}
                                         className='global_cursor Mechanics_col  '>
                                    <ProductCarousel/>
                                        {/*<Row className='AvionicsProducts_row d-flex align-content-center pr-3'>*/}
                                        {/*    <Fade duration={1500} left>*/}
                                        {/*        <Col xs={12} className='AvionicsProducts_img-left '>*/}
                                        {/*            <p className='Avionics_flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>*/}
                                        {/*            <Fade duration={1500} right>*/}
                                        {/*                <LinkContainer to={`/products`}>*/}
                                        {/*                    <div*/}
                                        {/*                        className='AvionicsProducts_jumbo global_cultured d-flex justify-content-center align-items-center'>*/}
                                        {/*                        <Button className='AvionicsProducts_searchBtn global_blood-red-bg py-2 px-5'>Browse*/}
                                        {/*                            Products</Button>*/}
                                        {/*                    </div>*/}
                                        {/*                </LinkContainer>*/}
                                        {/*            </Fade>*/}
                                        {/*        </Col>*/}
                                        {/*    </Fade>*/}
                                        {/*</Row>*/}
                                    </Col>









                                </Row>
                            </Col>


                            <Col xs={7} className=''>
                                {/*<Col md={10} sm={12} className='mb-0 pb-0'>*/}
                                <Row className='m-0 p-0'>
                                    <Col md={4} sm={12} className=' p-0'>
                                        <Image className=' AvionicsHome_img pr-md-2' src={tayseer} fluid/>
                                    </Col>
                                    <Col md={8} sm={12} className='p-0'>
                                        <Image className=' AvionicsHome_img' src={tests} fluid/>
                                    </Col>

                                </Row>
                                <Row className='m-0 p-0'>

                                    <Col md={8} sm={12} className='p-0 d-flex align-content-center justify-content-center align-content-center'>
                                        {/*<ProductCarousel/>*/}
                                        <Image className=' AvionicsHome_img pt-md-2' src={roel} fluid/>
                                    </Col>
                                    <Col md={4} sm={12} className=' p-0'>
                                        <Image className='AvionicsHome_img pl-md-2 pt-md-2' src={tayseer} fluid/>
                                    </Col>

                                </Row>

                                <Row className='AvionicsProducts_row mt-5 mx-0 p-0 d-flex justify-content-center'>
                                    <Fade duration={1500} left>
                                        <Col xs={12} className='AvionicsProducts_img-left'>
                                            <p className='Avionics_flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                                            <Fade duration={1500} right>
                                                <LinkContainer to={`/products`}>
                                                    <div
                                                        className='AvionicsProducts_jumbo global_cultured d-flex justify-content-center align-items-center'>
                                                        <Button
                                                            className='AvionicsProducts_searchBtn global_blood-red-bg py-2 px-5'>Browse
                                                            Products</Button>
                                                    </div>
                                                </LinkContainer>
                                            </Fade>
                                        </Col>
                                    </Fade>
                                </Row>


                            </Col>
                        </Row>








                    </Row>
                </Col>

            </Row>


            {/*</Container>*/
            }

        </>

    )
};

export default AvionicsHome