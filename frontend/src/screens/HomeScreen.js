import React, {useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Jumbotrons from "../components/Jumbotrons";
import CardFlippedLeft from "../components/CardFlippedLeft";
import CardFlippedRight from "../components/CardFlippedRight"
import AlertDismissible from "../components/AlertDismissible";
import CardOverlay from "../components/CardOverlay";
import aboutImg from '../images/general/hangar.png'
import panel from '../images/avionics/panel-divider.jpeg'
import avionics from '../images/avionics/panal-avionics.JPG'
import maintenance from '../images/mechanics/robin-cirrus-divider.png'
import flir from '../images/flir/flir-1.jpg'
import cncMachine from "../images/avionics/cnc-machine-divider.png"
import tayseerAvionics from "../images/avionics/tayseer-1.jpg"
import panelCard from '../images/avionics/panal-avionics.JPG'
import garmin from '../images/avionics/garmin-dealership.png'
import {CardBody} from "reactstrap";
import heroImg from '../images/general/aircraft-double-decker-red-belt_1500.png'

const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons jumboClass={'m-0 p-0'}
                        img={heroImg}
                        imgClassName={'col-12 p-0 mx-0 mb-0 '}
                        textContainerStyle={{backgroundColor: 'rgba(01, 02, 03, 1)'}}
                        textContainerClass={'col-12 mt-n2 py-0 my-0'}
                        title={'Bison Aviation'}
                        titleClassName={'text-light py-0 my-0'}
                        text={'We work hard on the ground so you can fly with confidence'}
                        textClassName={'text-light py-0 my-0'}
            />

            <Jumbotrons jumboClass={'p-0 horizontal-gradient'}
                        jumboStyle={{height: '180%'}}
                        imgClassName={'col-12 p-0 m-0'}
            />


            <main className='mx-auto' style={{ marginBottom: '30vh'}}>
                <Container style={{marginBottom: '20vh', marginTop: '20vh'}}>

                    {/*  =============   ICONS ROW  =============== */}
                    <Row>
                        <Col xs={12} md={6} >
                            <Row>
                                <Col xs={12} className='d-flex justify-content-center'>
                                    <h4> FAA Part 145 Repair Station</h4>
                                </Col>
                                <Col xs={12} className='d-flex justify-content-center'>
                                    <Button className='rounded-circle px-4 bisonWhiteBtn my-2'>
                                        <i className="fal fa-tools" style={{fontSize: '2em'}}> </i>
                                    </Button>
                                </Col>
                                <Col xs={12}>
                                    <p> Bison Aviation is a fully licensed FAA Part 145 Repair Station with Airframe, Instrument and Radio capabilities, an accreditation which is extremely difficult to attain and sets Bison Aviation apart from most other general aviation shops. Among other privileges, this licensure allows Bison Aviation to conduct testing and recertification of aircraft static systems and transponder equipment. Bison Aviation is the holder of FAA Air Agency Certificate Number 85NR497D.</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={12} md={6} >
                            <Row>
                                <Col xs={12} className='d-flex justify-content-center'>
                                    <h4>FAA Diamond Award Recipient</h4>
                                </Col>
                                <Col xs={12} className='d-flex justify-content-center'>
                                    <Button className='rounded-circle px-4 bisonWhiteBtn my-2'>
                                        <i className="fal fa-award" style={{fontSize: '2em'}}> </i>
                                    </Button>
                                </Col>
                                <Col xs={12}>
                                    <p> Bison Aviation is a proud recipient of the prestigious FAA Diamond Award for excellence in maintenance training & safety. This award is the highest conferred by the FAA for aircraft maintenance organizations in recognition of their dedication to employee training and safety. Our technicians regularly participate in online and face-to-face training programs put on by industry professionals, owner / type organizations (ABS, AOPA, TCF, COPA, etc.) and of course the FAA, resulting in a training curriculum which vastly exceeds the regulatory requirements.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                    {/*  =============  CARD NAV  =============  */}

                <Container  style={{marginBottom: '30vh', marginTop: '15vh'}} >

                    <Row>
                        <Col xs={12}>
                            <h1>Services</h1>
                        </Col>
                        <Col xs={12} className='' >
                            <Row>
                                <Col md={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                    <Button className='pt-0 pl-1 pb-0 pr-0 rounded-left '>
                                        <img src={avionics} alt="" className='h-100 w-100'/>
                                    </Button>
                                    <Button className='overlay w-75 h-50 mx-auto'>
                                        <p className='text'>AVIONICS</p>
                                    </Button>
                                </Col>

                                <Col md={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                    <Button className='pt-0 pl-1 pb-0 pr-0 rounded-left '>
                                        <img src={maintenance} alt="" className='h-100 w-100 hoverImage'/>
                                    </Button>
                                    <Button className='overlay w-75  h-50 mx-auto'>
                                        <p className='text'>MECHANICS</p>
                                    </Button>
                                </Col>

                                <Col md={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                    <Button className='pt-0 pl-1 pb-0 pr-0 rounded-left '>
                                        <img src={flir} alt="" className='h-100 w-100'/>
                                    </Button>
                                    <Button className='overlay w-75 h-50 mx-auto'>
                                        <p className='text'>EO/IR FLIR</p>
                                    </Button>
                                </Col>

                                <Col md={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                    <Button className='pt-0 pl-1 pb-0 pr-0 rounded-left '>
                                        <img src={garmin} alt="" className='h-100 w-100'/>
                                    </Button>
                                    <Button className='overlay w-75 h-50 mx-auto'>
                                        <p className='text'>GARMIN DEALER</p>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>



                    {/*  =============  WHY BISON  =============  */}
                <Container>
                    <CardFlippedLeft imgSrc={aboutImg}
                                     imgClassName={'img-fluid float-left imgCardAbout'}
                                     imgAlt={''}
                                     btnIconStyle={{display: 'hidden'}}
                                     btnIconVariant={'danger'}
                                     textIcon={<i className="far fa-plane"> </i>}
                                     title={'Why choose Bison Aviation?'}
                                     titleStyle={{borderBottom: '3px solid darkred'}}
                                     subTitle={'AVIONICS & AIRCRAFT MAINTENANCE & FLIR'}
                                     text={'Bison Aviation is an FAA certificated Part 145 Repair Station serving the general aviation community. Founded by an avid general aviation pilot and fellow aircraft owner, we operate with the unique perspective of an organization which is intimately familiar not only with the world of professional aircraft maintenance, but also with the world of aircraft ownership and operation. We know that our customers rely on us to provide them with an honest and frank assessment of the condition of their aircraft, and we are honored to accept that charge.'}
                                     btnTitle={''}
                                     btnClassName={'none'}
                    />

                </Container>
            </main>


            {/*   =============   AVIONICS SECTION   =============    */}

            <CardFlippedLeft imgSrc={panel}
                             imgClassName={'img-fluid float-left imgCardAvionics'}
                             titleStyle={''}
                             imgAlt={''}
                             title={'Avionics'}
                             subTitle={'full service avionics staff'}
                             btnIconStyle={''}
                             btnIconVariant={'danger'}
                             textIcon={<i className="fal fa-tachometer-alt-slow "> </i>}
                             text={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}
                             btnTitle={'Avionics'}
                             btnBottomStyle={{visibility: 'hidden'}}
                             btnBottomVariant={'none'}
            />

            <CardFlippedRight imgSrc={tayseerAvionics}
                              imgClassName={'img-fluid float-right imgCardAvionics'}
                              titleStyle={''}
                              imgAlt={''}
                              title={''}
                              subTitle={'installers for virtually all major avionics manufacturers'}
                              btnIconStyle={''}
                              btnIconVariant={'danger'}
                              textIcon={<i className="fal fa-tachometer-alt-slow "> </i>}
                              text={'Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century! We are installers for virtually all major avionics manufacturers, so we can build you the very best panel for your mission and budget. Cutting-edge technology, such as CNC machining, laser engraving, and 3D printing, put our installations in a class of their own!'}
                              btnTitle={'Avionics'}
                              btnBottomStyle={{visibility: 'hidden'}}
                              btnBottomVariant={'none'}
            />

            <CardFlippedLeft imgSrc={cncMachine}
                             imgClassName={'img-fluid float-left imgCardAvionics'}
                             titleStyle={''}
                             imgAlt={''}
                             title={''}
                             subTitle={'CNC machining, laser engraving, 3D printing and more'}
                             btnIconStyle={''}
                             btnIconVariant={'danger'}
                             textIcon={<i className="fal fa-tachometer-alt-slow "> </i>}
                             text={'When avionics systems stop working correctly, you need a team with the tools and experience necessary to efficiently diagnose the issues and repair the system. Whether the fault is a data bus communications error on a new glass panel PFD or a weak transmitter on a legacy com radio, Bison Aviation\'s skilled technicians can locate the fault and return those systems to operational condition quickly!'}
                             btnTitle={'Avionics'}
                             btnBottomStyle={{visibility: 'hidden'}}
                             btnBottomVariant={'none'}
            />

            <div className='fadeCardLeft'></div>


            {/*   =============   MECHANICS SECTION    =============   */}

            <CardFlippedRight imgSrc={tayseerAvionics}
                              imgClassName={'img-fluid float-right imgCardAvionics'}
                              titleStyle={''}
                              imgAlt={''}
                              title={'Mechanics'}
                              subTitle={'full service avionics staff'}
                              btnIconStyle={''}
                              btnIconVariant={'danger'}
                              textIcon={<i className="fal fa-tachometer-alt-slow "> </i>}
                              text={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}
                              btnTitle={'Avionics'}
                              btnBottomStyle={{visibility: 'hidden'}}
                              btnBottomVariant={'none'}
            />

            <CardFlippedLeft imgSrc={panel}
                             imgClassName={'img-fluid float-left imgCardAvionics'}
                             titleStyle={''}
                             imgAlt={''}
                             title={''}
                             subTitle={'installers for virtually all major avionics manufacturers'}
                             btnIconStyle={''}
                             btnIconVariant={'danger'}
                             textIcon={<i className="fal fa-tachometer-alt-slow "> </i>}
                             text={'Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century! We are installers for virtually all major avionics manufacturers, so we can build you the very best panel for your mission and budget. Cutting-edge technology, such as CNC machining, laser engraving, and 3D printing, put our installations in a class of their own!'}
                             btnTitle={'Avionics'}
                             btnBottomStyle={{visibility: 'hidden'}}
                             btnBottomVariant={'none'}
            />


            <div className='fadeCardLeft'></div>


            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            {/*<div className='fadeCardRight'> </div>*/}
        </>
    )
};

export default HomeScreen