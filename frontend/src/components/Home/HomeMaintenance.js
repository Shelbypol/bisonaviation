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


const HomeMaintenance = () => {

    return (
        <>

            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='HomeMaintenance_image p-0 mt-5 mb-0 mx-0 global_goldenrod-border-right'>

                    <SectionTitle titleText={'MAINTENANCE'}/>

                    {/*<Row className='d-flex align-items-center mr-0 my-0 py-0 ml-n1 HomeAvionics_title-row '>*/}
                    {/*    <Col lg={6} md={10} xs={12}*/}
                    {/*         className='p-0 mx-0 mb-sm-5 mb-md-n2 global_goldenrod-border-right global_black-bg d-flex justify-content-center'>*/}
                    {/*        <h2 className='HomeMaintenance_title global_white text-center'>*/}
                    {/*            <Fade top>*/}
                    {/*                Maintenance*/}
                    {/*            </Fade>*/}
                    {/*        </h2>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    <Row
                        className='pb-0 px-2 pt-3 mx-n1 mb-n1 my-0 global_black-bg d-flex justify-content-between'>

                        {/*MOBILE IMAGE*/}
                        {/*<Col xs={11}*/}
                        {/*     className='HomeAvionics_panel-img HomeAvionics_img mx-auto my-0 py-0 d-sm-block d-md-none'> </Col>*/}


                        <Col lg={6} md={6} xs={12} className='mx-0 mt-auto'>
                            <Col xs={12} className='mb-2 pr-4 d-none d-md-block'>
                                <Zoom>
                                    <h1 className='global_white'>You depend on your aircraft to carry you and your
                                        passengers safely.</h1>
                                </Zoom>
                            </Col>

                            <Col xs={12} className='global_cursor mt-4 text-center text-md-left'>
                                <Zoom>
                                    <p className='pr-3 global_white'>
                                        Whether you need to add ADS-B OUT capabilities in order to meet the December
                                        31,
                                        2019 deadline, a routine pitot-static / transponder certification, or it's
                                        time
                                        for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                        your avionics systems into the 21st century!
                                    </p>
                                </Zoom>
                            </Col>

                            <Col xs={10} md={12}
                                 className='global_cursor mb-5 py-2 mx-auto d-flex justify-content-center global_dark-bg-btn'>
                                <LinkContainer to={`/maintenance`}>
                                    <Button className=' text-center'>
                                        LEARN MORE
                                    </Button>
                                </LinkContainer>
                            </Col>
                        </Col>

                        {/*<Col xs={12} className='HomeAvionics_panel-img HomeAvionics_img mx-auto my-0 py-0 d-sm-block d-md-none'> </Col>*/}
                        <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mx-auto '>
                            <Card className='border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img1} className=' h-100 w-100'/>
                            </Card>
                        </Col>

                        <TenItemList
                            lg={6}
                            md={5}
                            xs={12}
                            link={`/avionics`}
                            item1={'Annual Inspections'}
                            item2={'Propeller Balance'}
                            item3={'Pre-Buy Inspections'}
                        />

                {/*    </Row>*/}
                {/*</Col>*/}

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

{/*<Row className=' global_cultured m-0 p-0'>*/
}

{/*    <Col xs={12} className=' p-0 mt-5 mx-0 mb-0'>*/
}

{/*        <Row className='HomeMaintenance_image d-flex justify-content-between align-content-center mb-5'>*/
}
{/*            <Fade top>*/
}
{/*                <Col xs={12}*/
}
{/*                     className=' AvionicsHome_title-col d-sm-flex justify-content-sm-center global_blood-red-bg my-5'>*/
}
{/*                    <h1 className='AvionicsHome_title text-white '>Maintenance</h1>*/
}
{/*                </Col>*/
}
{/*            </Fade>*/
}

{/*            <Col md={8} xs={12} className='pt-5 mx-0 global_black-bg'>*/
}
{/*                <Zoom>*/
}
{/*                    <Col xs={10} className='mb-2 mx-0 px-0'>*/
}
{/*                        <h1 className='global_white global_black-bg'>You depend on your aircraft to carry*/
}
{/*                            you and your*/
}
{/*                            passengers safely.</h1>*/
}

{/*                    </Col>*/
}
{/*                </Zoom>*/
}

{/*                <Col xs={10} className='global_cursor mt-4 mx-0 px-0'>*/
}
{/*                    <Zoom>*/
}
{/*                        <p className='global_white'>*/
}
{/*                            Whether it's time for a routine annual, a complete series of phase inspections*/
}
{/*                            or a*/
}
{/*                            pre-purchase inspection, Bison Aviation's team of FAA licensed technicians is*/
}
{/*                            ready*/
}
{/*                            to ensure that your aircraft is safe and airworthy for your next flight!*/
}

{/*                        </p>*/
}
{/*                    </Zoom>*/
}
{/*                </Col>*/
}

{/*                <Col xs={12} className='py-1 global_cursor mx-0 px-0'>*/
}
{/*                    <LinkContainer to={`/maintenance`}>*/
}
{/*                        <Zoom>*/
}
{/*                            <Button className=' global_goldenrodtxtborder-btn'>*/
}
{/*                                Learn More*/
}
{/*                            </Button>*/
}
{/*                        </Zoom>*/
}
{/*                    </LinkContainer>*/
}
{/*                </Col>*/
}

{/*            </Col>*/
}

{/*            /!*<Col md={4} xs={12}>*!/*/
}
{/*            /!*    <Row>*!/*/
}
{/*                    <TenItemList*/
}
{/*                        link={`/mechanics`}*/
}
{/*                        lg={4}*/
}
{/*                        md={4}*/
}
{/*                        xs={12}*/
}
{/*                        item1={'Annual Inspections'}*/
}
{/*                        item2={'Propeller Balance'}*/
}
{/*                        item3={'Pre-Buy Inspections'}*/
}
{/*                    />*/
}
{/*            /!*    </Row>*!/*/
}
{/*            /!*</Col>*!/*/
}

{/*            /!*<Col md={4} className='pt-5 d-none d-md-block global_black-bg global_white mx-0 px-0'>*!/*/
}
{/*            /!*    <LinkContainer to={`/mechanics`}>*!/*/
}
{/*            /!*        <Col xs={12}*!/*/
}
{/*            /!*             className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-end justify-content-center global_goldenrodtxtborder-btn'>*!/*/
}
{/*            /!*            <Zoom>*!/*/
}
{/*            /!*                <p className='Avionics_text-titles'>Annual Inspections</p>*!/*/
}
{/*            /!*            </Zoom>*!/*/
}
{/*            /!*        </Col>*!/*/
}
{/*            /!*    </LinkContainer>*!/*/
}

{/*            /!*    <LinkContainer to={`/mechanics`}>*!/*/
}
{/*            /!*        <Col xs={12}*!/*/
}
{/*            /!*             className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-center justify-content-center global_goldenrodtxtborder-btn'>*!/*/
}
{/*            /!*            <Zoom>*!/*/
}
{/*            /!*                <p className='Avionics_text-titles'>Propeller Balance</p>*!/*/
}
{/*            /!*            </Zoom>*!/*/
}
{/*            /!*        </Col>*!/*/
}
{/*            /!*    </LinkContainer>*!/*/
}

{/*            /!*    <LinkContainer to={`/mechanics`}>*!/*/
}
{/*            /!*        <Col xs={12}*!/*/
}
{/*            /!*             className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-start justify-content-center global_goldenrodtxtborder-btn'>*!/*/
}
{/*            /!*            <Zoom>*!/*/
}
{/*            /!*                <p className='Avionics_text-titles'> Pre-Buy Inspections</p>*!/*/
}
{/*            /!*            </Zoom>*!/*/
}
{/*            /!*        </Col>*!/*/
}
{/*            /!*    </LinkContainer>*!/*/
}
{/*            /!*</Col>*!/*/
}

{/*        </Row>*/
}

{/*        <Row className='d-flex justify-content-between mb-5 p-0'>*/
}
{/*            <Col md={4} xs={12} className='d-flex justify-content-center pl-0 m-0'>*/
}
{/*                <Card className='Avionics_card border-0 bg-transparent rounded'>*/
}
{/*                    <Card.Img variant="top" src={img1} className=' Avionics_card-img h-100 w-100'/>*/
}
{/*                </Card>*/
}
{/*            </Col>*/
}

{/*            <Col md={4} xs={12} className='d-flex justify-content-center p-0 m-0'>*/
}
{/*                <Card className='Avionics_card border-0 bg-transparent rounded'>*/
}
{/*                    <Card.Img variant="top" src={img2} className='Avionics_card-img h-100 w-100'/>*/
}
{/*                </Card>*/
}
{/*            </Col>*/
}

{/*            <Col md={4} xs={12} className='d-flex justify-content-center pr-0 m-0'>*/
}
{/*                <Card className='Avionics_card border-0 bg-transparent rounded'>*/
}
{/*                    <Card.Img variant="top" src={img3} className='Avionics_card-img h-100 w-100'/>*/
}
{/*                </Card>*/
}
{/*            </Col>*/
}
{/*        </Row>*/
}

{/*    </Col>*/
}
{/*</Row>*/
}


// </>

