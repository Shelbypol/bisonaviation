import React, {useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Jumbotrons from "../components/Jumbotrons";
import CardFlippedLeft from "../components/CardFlippedLeft";
import CardFlippedRight from "../components/CardFlippedRight"
import AlertDismissible from "../components/AlertDismissible";
import CardOverlay from "../components/CardOverlay";
import aboutImg from '../images/jumbotron/hangar.png'
import panel from '../images/activeImg/panel-divider.jpeg'
import avionics from '../images/activeImg/panal-avionics.JPG'
import maintenance from '../images/activeImg/robin-cirrus-divider.png'
import flir from '../images/homeSlider/fullscreen-slider1.jpg'
import cncMachine from "../images/jumbotron/cnc-machine-divider.png"
import tayseerAvionics from "../images/activeImg/tayseer-1.jpg"
import panelCard from '../images/jumbotron/fullscreen-slider2.jpg'
import garmin from '../images/activeImg/garmin-dealership.png'
import {CardBody} from "reactstrap";


const HomeScreen = () => {
    // const [show, setShow] = useState(false);

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons imgClass={'heroJumbo '}/>
            <Jumbotrons imgClass={'fadeJumbo '}/>

            <main className='mx-auto' style={{marginTop: '-40vh', marginBottom: '30vh'}}>
                <Container>

                    {/*  =============   ICONS ROW  =============== */}
                    <Row className='justify-content-center' style={{marginBottom: '20vh', marginTop: '20vh'}} xs={12}>
                        <Col xs={6}>
                            <Button className='display-inline-block py-2 px-3 rounded-circle'
                                    variant='danger'><i className="fal fa-tools"> </i></Button>
                            <h4> FAA Part 145 Repair Station</h4>
                        </Col>
                        <Col xs={6}>
                            <Button className='display-inline-block py-2 px-3 rounded-circle'
                                    variant='danger'><i className="fal fa-award"> </i></Button>
                            <h4> FAA Diamond Award Recipient</h4>
                        </Col>
                    </Row>


                    {/*   CARD NAV  */}
                    <Row className='mx-auto' style={{marginBottom: '30vh'}}>
                        <Link to='#'>

                        </Link>
                        <Col>
                            <CardOverlay
                                imgSrc={avionics}
                                cardTitle={'AVIONICS'}
                            >
                            </CardOverlay>
                        </Col>
                        <Col>
                            <CardOverlay
                                imgSrc={maintenance}
                                cardTitle={'MAINTENANCE'}
                            >
                            </CardOverlay>
                        </Col>
                        <Col>
                            <CardOverlay
                                imgSrc={flir}
                                cardTitle={'EO / IR FLIR'}
                            >
                            </CardOverlay>
                        </Col>

                        <Col>
                            <CardOverlay
                                imgSrc={garmin}
                                cardTitle={'Certified Garmin Dealer!'}
                            >
                            </CardOverlay>
                        </Col>
                    </Row>


                    {/*   WHY BISON   */}
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


            {/*      AVIONICS SECTION       */}

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


            {/*      MECHANICS SECTION       */}

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


            <div className='fadeCardLeft'> </div>


            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            {/*<div className='fadeCardRight'> </div>*/}
        </>
    )
};

export default HomeScreen