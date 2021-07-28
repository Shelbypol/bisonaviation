import React from 'react'
import {Row, Col,} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../images/bg-graphics/graphics/Final-Logo-Horizontal.png";
import './Footer.css'
import {Jumbotron} from "reactstrap";
import SocialIcons from "../SocialIcons/SocialIcons";
import Fade from 'react-reveal';
import Zoom from 'react-reveal';

const Footer = () => {
    return (
        <footer className='Footer_margin mb-n5 mt-0 mx-0 p-0'>

            <Zoom bottom duration={10000}>
                <Jumbotron className='m-0 p-0 global_blood-red-bg global_white Footer_social-icons ' fluid>
                    {/*<Row>*/}
                    {/*    <Col xs={12} className=' Footer_social-icons-col'>*/}
                            <Fade duration={1500} right>
                                <SocialIcons contactClassName={'d-none'}/>
                            </Fade>
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Jumbotron>

                <Jumbotron className=' global_black-bg' fluid>
                    <Row className='mt-4'>
                        <Col md={4} xs={12}>
                            <LinkContainer to='/avionics'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont '>Avionics</p>
                            </LinkContainer>
                            <LinkContainer to='/products'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont '>Products</p>
                            </LinkContainer>
                            <LinkContainer to='/maintenance'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>Maintenance</p>
                            </LinkContainer>

                            <LinkContainer to='/flir'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>EO/IR Flir</p>
                            </LinkContainer>

                            <LinkContainer to='/team'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>Team</p>
                            </LinkContainer>
                            <LinkContainer to='/contact'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>Contact</p>
                            </LinkContainer>


                        </Col>


                        <Col md={4} xs={12}>
                            <div className='global_whiteFontHover'>
                                <p className='d-flex justify-content-center global_accentFont global_smallFont p-0 m-0'>
                                    Bison Aviation, LLC
                                </p>
                                <p className='d-flex justify-content-center global_accentFont global_smallFont p-0 m-0'>
                                    400 Boerne Stage Airfield
                                </p>
                                {/*p<br/>*/}
                                <p className='d-flex justify-content-center global_accentFont global_smallFont  pt-0 mt-0'>
                                    Boerne, TX 78006
                                </p>
                            </div>

                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                P: 800-BISON-99 (800-247-6699)
                            </p>
                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                P: 210-876-JETS (210-876-5387)
                            </p>
                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                F: 888-224-2127
                            </p>


                        </Col>

                        <Col xs={12} md={4}>



                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                24hr AOG Emergency Hotline:
                                <br/>
                                888-SOS-BISON (888-767-2476)
                            </p>

                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                info@BisonAviation.com
                            </p>

                            <LinkContainer to='/terms'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>General Terms and Conditions</p>
                            </LinkContainer>
                            <LinkContainer to='/flir-terms'
                                           className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>EO/IR Flir Terms and Conditions</p>
                            </LinkContainer>
                        </Col>


                    </Row>

                    <Row>
                        <Col className='text-center mt-5'>
                            <p className='global_accentFont global_smallFont global_whiteFontHover'>
                                <LinkContainer to='/'>
                                    <img src={logo}
                                         className='DesktopHeader_logo'
                                         alt="Bison Aviation"
                                    />
                                </LinkContainer>
                            </p>
                            &copy; Bison Aviation 2021
                        </Col>
                    </Row>

                </Jumbotron>
            </Zoom>
        </footer>
    )
};

export default Footer