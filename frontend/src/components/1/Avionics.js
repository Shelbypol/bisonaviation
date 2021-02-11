import {Col, Container, Row} from "react-bootstrap";
import '../../style/1/Avionics.css';
import JumboCardImgs from "../JumboCardImgs";
import panel from "../../images/bg-graphics/avionics/avionics-bg.png";
import tayseerAvionics from "../../images/avionics/tayseer-avionics-1500.png";
import cncMachine from "../../images/avionics/cnc-machine.png";
import React from "react";
import {Jumbotron} from "reactstrap";
import jeff from '../../images/Jeff -Michael-1500.png'
import roel from '../../images/avionics/roelavionics.jpg'
import john from '../../images/avionics/john-panel.jpg'
import Zoom from 'react-reveal/Zoom';

const Avionics = () => {


    return (
        <Jumbotron id='home-avionics' className='Avionics_bg global_light-grey-bg global_eerie-black m-0 px-0 pt-0 pb-5' fluid>

            <Row>
                <Col xs={6}>

                    <Col className='d-flex justify-content-center Avionics_title'>
                        <h1 className=' global_title'><span className='global_title-letter mr-n2'>A</span>vionics</h1>
                    </Col>

                    <Col className=' d-flex justify-content-start mb-5 text-center mx-5'>
                        <p className='Avionics_text'>
                            Bison Aviation is proud to have a full-time avionics team in-house. While many shops
                            “sub out” their avionics work, Bison Aviation maintains a <span
                            className='global_blood-red bold'>full service avionics staff</span> as
                            a part of our workforce. Our capabilities range from basic troubleshooting to
                            complete panel installations and by having all services in-house (including CNC panel
                            fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs
                            for our customers.
                        </p>
                    </Col>

                    <Col className='d-flex justify-content-start Avionics_icon-box ml-5 my-0'>
                        <Col xs={2}>
                            <i className='fas fa-bolt global_blood-red Avionics_icon'> </i>
                        </Col>
                        <Col xs={10}>
                            <p className='mt-3 Avionics_icon-text'>30+ years of experience</p>
                        </Col>
                    </Col>

                    <Col className='d-flex justify-content-start Avionics_icon-box ml-5 my-0 p-0'>
                        <Col xs={2}>
                            <i className='fas fa-bug global_blood-red Avionics_icon'> </i>
                        </Col>
                        <Col xs={10}>
                            <p className='Avionics_icon-text'>Lorem ipsum dolor.</p>
                        </Col>
                    </Col>

                    <Col className='d-flex justify-content-start Avionics_icon-box ml-5 my-0'>
                        <Col xs={2} className='text-center rounded-circle global_blood-red-bg'>
                            <i className='far fa-check-square global_cultured Avionics_icon'> </i>
                        </Col>
                        <Col xs={10}>
                            <p className='Avionics_icon-text text-center'>Lorem ipsum dolor sit</p>
                        </Col>
                    </Col>

                    <Col className='d-flex justify-content-start Avionics_icon-box ml-5 my-0'>
                        <Col xs={2}>
                            <i className='far fa-window-restore global_blood-red Avionics_icon text-center'> </i>
                        </Col>
                        <Col xs={10}>
                            <p className='Avionics_icon-text'>Lorem ipsum dolor sit adhns </p>
                        </Col>
                    </Col>

                </Col>

                <Col xs={6} className='Avionics_img' >

                    <JumboCardImgs
                        imgSrc1={tayseerAvionics}
                        imgSrc4={jeff}
                        imgSrc3={roel}
                        imgSrc2={cncMachine}
                        imgSrc5={john}
                    >
                    </JumboCardImgs>
                </Col>
            </Row>

        </Jumbotron>

    )
};

export default Avionics