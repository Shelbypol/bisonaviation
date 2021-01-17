import React from 'react'
//row and column to use bootstrap grid
import {Container, Row, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../images/general/Final-Logo-Horizontal.png";
import ScrollToTop from "./ScrollToTop";
import '../style/Headers.css'

const Footer = () => {
    return (
        <footer style={{backgroundColor: 'black', marginTop: '20vh'}}>
            <Container>
                <Row xs={12}>
                    <Row xs={6} className='mx-auto px-auto mt-4'>
                        <Col xs={12}>
                            <LinkContainer to='/' className='global_whiteFontHover'>
                                <p className='global_accentFont'>AOG Response</p>
                            </LinkContainer>
                            <LinkContainer to='/avionics' className='global_whiteFontHover'>
                                <p className='global_accentFont'>Avionics</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='global_whiteFontHover'>
                                <p className='global_accentFont'>Browse Avionics Products</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='global_whiteFontHover'>
                                <p className='global_accentFont'>Maintenance</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='global_whiteFontHover'>
                                <p className='global_accentFont'>Team</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='global_whiteFontHover'>
                                <p className='global_accentFont'>Contact</p>
                            </LinkContainer>
                        </Col>
                    </Row>
                    <Row xs={6} className='mx-auto px-auto mt-4'>
                        <Col xs={12}>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                Bison Aviation, LLC
                                <br/>
                                400 Boerne Stage Airfield
                                <br/>
                                Boerne, TX 78006
                            </p>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                P: 800-BISON-99 (800-247-6699)
                            </p>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                P: 210-876-JETS (210-876-5387)
                            </p>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                F: 888-224-2127
                            </p>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                24hr AOG Emergency Hotline:
                                <br/>
                                &nbsp; 888-SOS-BISON (888-767-2476)
                            </p>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                info@BisonAviation.com
                            </p>

                        </Col>
                    </Row>
                </Row>
                <Row xs={12}>
                    <Col xs={7} className='pt-3 d-flex justify-content-end'>
                        <LinkContainer to='/'>
                            <img src={logo}
                                 className='DesktopHeader_logo'
                                 alt="Bison Aviation"
                            />
                        </LinkContainer>
                    </Col>
                    <Col xs={5} className='d-flex justify-content-end'>
                        <ScrollToTop/>
                    </Col>
                </Row>
                <Row xs={12}>
                    <Col className='text-center pb-3'>
                        Copyright &copy; Bison Aviation 2021
                    </Col>
                </Row>
                {/*<Row xs={12} className='mt-n5'>*/}
                {/*    <Col xs={12} className='d-flex justify-content-end'>*/}
                {/*        <ScrollToTop/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

            </Container>
        </footer>
    )
};

export default Footer