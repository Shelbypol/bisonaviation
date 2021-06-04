import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import './HomeMaintenance.css';
import Zoom from 'react-reveal/Zoom';
import TenItemList from '../../components/TenItemList'
import {LinkContainer} from "react-router-bootstrap";
import img1 from "../Maintenance/images/maintenance2.png";
import img2 from "../Maintenance/images/maintenance5.png";
import img3 from "../Maintenance/images/maintenance4.png";
import Fade from "react-reveal/Fade";
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";


const HomeMaintenance = () => {

    return (
        <>

            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='HomeMaintenance_image p-0 mt-5 mb-0 mx-0 global_goldenrod-border-right'>

                    <SectionTitle titleText={'MAINTENANCE'}/>

                    <Row className='pb-0 px-2 pt-3 mx-n1 mb-n1 my-0 global_black-bg d-flex justify-content-between'>

                        {/*MOBILE IMAGE*/}
                        {/*<Col xs={11}*/}
                        {/*     className='HomeAvionics_panel-img HomeAvionics_img mx-auto my-0 py-0 d-sm-block d-md-none'> </Col>*/}

                        <SectionText
                            lg={6}
                            md={6}
                            xs={12}
                            headerText={'You depend on your aircraft to carry you and your passengers safely.'}
                            paragraphText={' Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century!'}
                            btn={'LEARN MORE'}
                        />

                        {/*<Col xs={12} className='HomeAvionics_panel-img HomeAvionics_img mx-auto my-0 py-0 d-sm-block d-md-none'> </Col>*/}

                        <TenItemList
                            lg={6}
                            md={5}
                            xs={12}
                            link={`/avionics`}
                            item1={'Annual Inspections'}
                            item2={'Propeller Balance'}
                            item3={'Pre-Buy Inspections'}
                        />

                        <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mx-auto '>
                            <Card className='border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img1} className=' h-100 w-100'/>
                            </Card>
                        </Col>

                        <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mx-auto '>
                            <Card className='border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img2} className='h-100 w-100'/>
                            </Card>
                        </Col>

                        <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mx-auto '>
                            <Card className=' border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img3} className=' h-100 w-100'/>
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default HomeMaintenance

