import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import './HomeAvionics.css';
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import TenItemList from '../../components/TenItemList';
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";

const HomeAvionics = () => {

    return (
        <>
            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='HomeAvionics_image p-0 mt-5 mb-0 mx-0'>

                    <SectionTitle titleText={'AVIONICS'}/>


                    <Row className='pb-0 px-2 pt-md-3 pt-sm-0 mx-n1 mb-n1 my-0 global_black-bg d-flex justify-content-between'>

                        <Col lg={6} md={5} xs={12} className=' m-0 p-0'>

                            <TenItemList
                                // lg={12}
                                // md={5}
                                xs={12}
                                link={`/avionics`}
                                item1={'Annual Inspections'}
                                item2={'Propeller Balance'}
                                item3={'Pre-Buy Inspections'}
                                item4={'Annual Inspections'}
                            />
                        </Col>

                        {/*MOBILE IMAGE*/}
                        <Col xs={11} className='HomeAvionics_panel-img HomeAvionics_img mx-auto my-0 py-0 d-sm-block d-md-none'> </Col>

                        <SectionText
                            lg={6}
                            md={6}
                            xs={12}
                            headerText={'You depend on your aircraft to carry you and your passengers safely.'}
                            paragraphText={' Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century!'}
                            btn={'LEARN MORE'}
                        />

                    </Row>
                </Col>

                <Col xs={9} className='HomeAvionics_panel-glow-img HomeAvionics_img mx-auto mb-5 mt-0 py-0 d-sm-block d-md-none'> </Col>
                <Col xs={9} className='HomeAvionics_tayseer-img HomeAvionics_img mx-auto mb-5 mt-0 py-0 d-sm-block d-md-none'> </Col>

                <Col xs={12}
                     className='HomeAvionics_panel-img HomeAvionics_img d-none d-md-block global_goldenrod-border-right'> </Col>


            </Row>
        </>

    )
};

export default HomeAvionics