import React, {useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Jumbotrons from "../components/Jumbotrons";
import JumboCard from "../components/JumboCard";
import '../style/flag.scss'
import panel from '../images/avionics/panel-divider.jpeg'
import avionics from '../images/avionics/panal-avionics.JPG'
import maintenance from '../images/mechanics/robin-cirrus-divider.png'
import flir from '../images/flir/flir-1.jpg'
import cncMachine from "../images/avionics/cnc-machine-divider.png"
import tayseerAvionics from "../images/avionics/tayseer-1.jpg"
import garmin from '../images/avionics/garmin-dealership.png'
import hangar from '../images/general/hangar.png'
import heroImg from '../images/general/aircraft-double-decker-red-belt_1500.png'
import MultiCarouselPage from "../components/MulitCarouselPage";


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

            {/*<main className='mx-auto'>*/}
            {/*  =============   ICONS ROW - DESKTOP  =============== */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={6} className='mb-5'>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <h4 className='accentFont'> FAA Part 145 Repair Station</h4>
                            </Col>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <Button className='rounded-circle px-4 bisonWhiteBtn my-2'>
                                    <i className="fal fa-tools" style={{fontSize: '2em'}}> </i>
                                </Button>
                            </Col>
                            <Col xs={12}>
                                <p> Bison Aviation is a fully licensed FAA Part 145 Repair Station with Airframe,
                                    Instrument and Radio capabilities, an accreditation which is extremely difficult to
                                    attain and sets Bison Aviation apart from most other general aviation shops. Among
                                    other privileges, this licensure allows Bison Aviation to conduct testing and
                                    recertification of aircraft static systems and transponder equipment. Bison Aviation
                                    is the holder of FAA Air Agency Certificate Number 85NR497D.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <h4 className='accentFont'>FAA Diamond Award Recipient</h4>
                            </Col>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <Button className='rounded-circle px-4 bisonWhiteBtn my-2'>
                                    <i className="fal fa-award" style={{fontSize: '2em'}}> </i>
                                </Button>
                            </Col>
                            <Col xs={12}>
                                <p> Bison Aviation is a proud recipient of the prestigious FAA Diamond Award for
                                    excellence in maintenance training & safety. This award is the highest conferred by
                                    the FAA for aircraft maintenance organizations in recognition of their dedication to
                                    employee training and safety. Our technicians regularly participate in online and
                                    face-to-face training programs put on by industry professionals, owner / type
                                    organizations (ABS, AOPA, TCF, COPA, etc.) and of course the FAA, resulting in a
                                    training curriculum which vastly exceeds the regulatory requirements.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/*</main>*/}

            {/*  =============  SUMMARY NAV  =============  */}
            <Container style={{marginTop: '15vh'}}>
                <Row>
                    <Col xs={12}>
                        <h1>Services</h1>
                    </Col>
                    <Col xs={12} className=''>
                        <Row>
                            <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                <Button className='p-0 rounded-left '>
                                    <img src={garmin} alt="" className='h-100 w-100'/>
                                </Button>
                                <Button className='overlay w-75 h-50 mx-auto'>
                                    <p className='flag red accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                                    <p className='text accentFont'>GARMIN DEALER</p>
                                </Button>
                            </Col>

                            <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                <Button className='p-0 rounded-left '>
                                    <img src={avionics} alt="" className='h-100 w-100'/>
                                </Button>
                                <Button className='overlay w-75 h-50 mx-auto'>
                                    <p className='text accentFont'>AVIONICS</p>
                                </Button>
                            </Col>

                            <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                <Button className='p-0 rounded-left '>
                                    <img src={maintenance} alt="" className='h-100 w-100 hoverImage'/>
                                </Button>
                                <Button className='overlay w-75  h-50 mx-auto'>
                                    <p className='text accentFont'>MECHANICS</p>
                                </Button>
                            </Col>

                            <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 hoverTitle'>
                                <Button className='p-0 rounded-left '>
                                    <img src={flir} alt="" className='h-100 w-100'/>
                                </Button>
                                <Button className='overlay w-75 h-50 mx-auto'>
                                    <p className='text accentFont'>EO/IR FLIR</p>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <main className='mx-auto' style={{marginTop: '35vh'}}>
                {/*  =============  WHY BISON  =============  */}
                <Container>
                    <JumboCard
                        // lgRow={}
                        // mdRow={}
                        xsRow={12}
                        lgImgCol={4}
                        // mdImgCol={}
                        xsImgCol={12}
                        imgSrc={hangar}
                        imgClassName={'h-100 w-100'}
                        lgTextCol={8}
                        // mdTextCol={}
                        xsTextCol={12}
                        lgTitleCol={12}
                        // mdTitleCol={}
                        // xsTitleCol={}
                        // lgIconTextCol={}
                        mdIconTextCol={12}
                        // xsIconTextCol={}
                        iconSymbol={'far fa-plane bisonRedTxt'}
                        lgIconCol={1}
                        // mdIconCol={}
                        // xsIconCol={}
                        lgSubtextCol={11}
                        // mdSubtextCol={}
                        // xsSubtextCol={}
                        // lgBlockTextCol={}
                        mdBlockTextCol={12}
                        // xsBlockTextCol={}
                        title={'Why Choose Bison Aviation'}
                        subText={'AVIONICS & AIRCRAFT MAINTENANCE & FLIR'}
                        paragraph={'Bison Aviation is an FAA certificated Part 145 Repair Station serving the general aviation community. Founded by an avid general aviation pilot and fellow aircraft owner, we operate with the unique perspective of an organization which is intimately familiar not only with the world of professional aircraft maintenance, but also with the world of aircraft ownership and operation. We know that our customers rely on us to provide them with an honest and frank assessment of the condition of their aircraft, and we are honored to accept that charge.'}
                    />
                </Container>
            </main>

            <main className='mx-5' style={{marginTop: '-15vh'}}>

                {/*   =============   AVIONICS SECTION   =============    */}
                <Container style={{marginTop: '20vh'}}>
                    <JumboCard
                        // lgRow={}
                        // mdRow={}
                        xsRow={12}
                        lgImgCol={4}
                        // mdImgCol={}
                        xsImgCol={{order: 'last'}}
                        imgSrc={panel}
                        imgClassName={'h-75 w-75 mt-5'}
                        lgTextCol={8}
                        // mdTextCol={}
                        xsTextCol={12}
                        lgTitleCol={12}
                        // mdTitleCol={}
                        // xsTitleCol={}
                        // lgIconTextCol={}
                        mdIconTextCol={12}
                        // xsIconTextCol={}
                        iconSymbol={'fal fa-tachometer-alt-slow bisonRedTxt'}
                        lgIconCol={1}
                        // mdIconCol={}
                        // xsIconCol={}
                        lgSubtextCol={11}
                        // mdSubtextCol={}
                        // xsSubtextCol={}
                        // lgBlockTextCol={}
                        mdBlockTextCol={12}
                        // xsBlockTextCol={}
                        title={'AVIONICS'}
                        subText={'full service avionics staff'}
                        paragraph={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}

                    />
                    <JumboCard
                        // lgRow={}
                        // mdRow={}
                        xsRow={12}
                        lgImgCol={4}
                        // mdImgCol={}
                        xsImgCol={12}
                        imgSrc={tayseerAvionics}
                        imgClassName={'h-75 w-75 mt-5'}
                        lgTextCol={8}
                        // mdTextCol={}
                        xsTextCol={12}
                        lgTitleCol={12}
                        // mdTitleCol={}
                        // xsTitleCol={}
                        // lgIconTextCol={}
                        mdIconTextCol={12}
                        // xsIconTextCol={}
                        iconSymbol={'fal fa-tachometer-alt-fast bisonRedTxt'}
                        lgIconCol={1}
                        // mdIconCol={}
                        // xsIconCol={}
                        lgSubtextCol={11}
                        // mdSubtextCol={}
                        // xsSubtextCol={}
                        // lgBlockTextCol={}
                        // xsBlockTextCol={}
                        mdBlockTextCol={12}
                        subText={'installers for virtually all major avionics manufacturers'}
                        paragraph={'Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century! We are installers for virtually all major avionics manufacturers, so we can build you the very best panel for your mission and budget. Cutting-edge technology, such as CNC machining, laser engraving, and 3D printing, put our installations in a class of their own!'}
                    />


                    <JumboCard
                        // lgRow={}
                        // mdRow={}
                        xsRow={12}
                        lgImgCol={4}
                        // mdImgCol={}
                        xsImgCol={{order: 'last'}}
                        imgSrc={cncMachine}
                        imgClassName={'h-75 w-75 mt-5'}
                        lgTextCol={8}
                        // mdTextCol={}
                        xsTextCol={12}
                        lgTitleCol={12}
                        // mdTitleCol={}
                        // xsTitleCol={}
                        // lgIconTextCol={}
                        mdIconTextCol={12}
                        // xsIconTextCol={}
                        iconSymbol={'fal fa-tachometer-alt-slow bisonRedTxt'}
                        lgIconCol={1}
                        // mdIconCol={}
                        // xsIconCol={}
                        lgSubtextCol={11}
                        // mdSubtextCol={}
                        // xsSubtextCol={}
                        // lgBlockTextCol={}
                        mdBlockTextCol={12}
                        // xsBlockTextCol={}
                        subText={'CNC machining, laser engraving, 3D printing and more'}
                        paragraph={'When avionics systems stop working correctly, you need a team with the tools and experience necessary to efficiently diagnose the issues and repair the system. Whether the fault is a data bus communications error on a new glass panel PFD or a weak transmitter on a legacy com radio, Bison Aviation\'s skilled technicians can locate the fault and return those systems to operational condition quickly!'}
                    />

                </Container>

                <Container style={{marginTop: '20vh'}}>
                    <Row>
                        <Col>
                            <h1 className='flag red accentFont mt-n2 mb-0 mx-0'>NEW!</h1>
                            <h1>Certified Garmin Dealer</h1>
                        </Col>
                    </Row>
                    <Container/>
                    <Container>
                        <MultiCarouselPage/>
                    </Container>
                </Container>

                    <Container>
                        {/*   =============   MECHANICS SECTION    =============   */}
                        <JumboCard
                            rowStyle={{marginTop: '35vh'}}
                            // lgRow={}
                            // mdRow={}
                            xsRow={12}
                            lgImgCol={4}
                            // mdImgCol={}
                            xsImgCol={{order: 'last'}}
                            imgSrc={cncMachine}
                            imgClassName={'h-75 w-75 mt-5'}
                            lgTextCol={8}
                            // mdTextCol={}
                            xsTextCol={12}
                            lgTitleCol={12}
                            // mdTitleCol={}
                            // xsTitleCol={}
                            // lgIconTextCol={}
                            mdIconTextCol={12}
                            // xsIconTextCol={}
                            iconSymbol={'far fa-plane bisonRedTxt'}
                            lgIconCol={1}
                            // mdIconCol={}
                            // xsIconCol={}
                            lgSubtextCol={11}
                            // mdSubtextCol={}
                            // xsSubtextCol={}
                            // lgBlockTextCol={}
                            mdBlockTextCol={12}
                            // xsBlockTextCol={}
                            title={'Mechanics'}
                            subText={'full service avionics staff'}
                            paragraph={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}
                        />

                        <JumboCard
                            // lgRow={}
                            // mdRow={}
                            xsRow={12}
                            lgImgCol={4}
                            // mdImgCol={}
                            xsImgCol={12}
                            imgSrc={tayseerAvionics}
                            imgClassName={'h-75 w-75 mt-5'}
                            lgTextCol={8}
                            // mdTextCol={}
                            xsTextCol={12}
                            lgTitleCol={12}
                            // mdTitleCol={}
                            // xsTitleCol={}
                            // lgIconTextCol={}
                            mdIconTextCol={12}
                            // xsIconTextCol={}
                            iconSymbol={'far fa-plane bisonRedTxt'}
                            lgIconCol={1}
                            // mdIconCol={}
                            // xsIconCol={}
                            lgSubtextCol={11}
                            // mdSubtextCol={}
                            // xsSubtextCol={}
                            // lgBlockTextCol={}
                            mdBlockTextCol={12}
                            // xsBlockTextCol={}
                            subText={'full service avionics staff'}
                            paragraph={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}

                        />


                    </Container>
            </main>

        </>
)
};

export default HomeScreen