import React from 'react'
import { Row, Col, } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../images/general/Final-Logo-Horizontal.png";
import '../../style/Footer.css'
import {Jumbotron} from "reactstrap";
import SocialIcons from "../SocialIcons";
import Fade from 'react-reveal';
import Zoom from 'react-reveal';

const Footer = () => {
    return (
        <footer className='Footer_margin m-0 p-0'>

<Zoom bottom duration={10000}>
            <Jumbotron className='m-0 p-0 global_blood-red-bg global_cultured Footer_social-icons' fluid>
                <Row>
                    <Col xs={12} className='d-flex justify-content-center px-5'>
                        <Fade duration={1500} right>
                            <SocialIcons contactClassName={'d-none'}/>
                        </Fade>
                    </Col>
                </Row>
            </Jumbotron>

            <Jumbotron className=' global_rich-black-bg' fluid>
                <Row className='mt-4'>
                        <Col>
                            <LinkContainer to='/avionics' className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont '>Avionics</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont '>Avionics Products</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>Maintenance</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>Team</p>
                            </LinkContainer>
                            <LinkContainer to='/' className='d-flex justify-content-center global_whiteFontHover py-0'>
                                <p className='global_accentFont global_smallFont'>Contact</p>
                            </LinkContainer>
                        </Col>

                    <Col className=' text-center'>
                        <p className='global_accentFont global_smallFont global_whiteFontHover'>
                            <LinkContainer to='/'>
                                <img src={logo}
                                     className='DesktopHeader_logo'
                                     alt="Bison Aviation"
                                />
                            </LinkContainer>
                        </p>
                        <p className='pt-2 d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                            Bison Aviation, LLC
                            <br/>
                            400 Boerne Stage Airfield
                            <br/>
                            Boerne, TX 78006
                        </p>

                    </Col>


                        <Col>
                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                P: 800-BISON-99 (800-247-6699)
                                <br/>
                                P: 210-876-JETS (210-876-5387)
                                <br/>
                                F: 888-224-2127
                            </p>
                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                24hr AOG Emergency Hotline:
                                <br/>
                                888-SOS-BISON (888-767-2476)
                            </p>
                            <p className='d-flex justify-content-center global_accentFont global_smallFont global_whiteFontHover'>
                                info@BisonAviation.com
                            </p>
                        </Col>


                </Row>

                <Row>
                    <Col className='text-center mt-5'>
                        &copy; Bison Aviation 2021
                    </Col>
                </Row>

            </Jumbotron>
</Zoom>
        </footer>
    )
};

export default Footer