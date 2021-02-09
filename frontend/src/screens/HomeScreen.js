import React, {useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Jumbotrons from "../components/Jumbotrons";
import JumboCardImgAndText from "../components/JumboCardImgAndText";
import '../style/flag.scss'
import '../style/SummaryNav.css'
import panel from '../images/avionics/panal-avionics.JPG'
import panel2 from '../images/avionics/20190218_155138 (1).jpg'
import avionics from '../images/avionics/panal-avionics.JPG'
import maintenance from '../images/mechanics/robin-cirrus-divider.png'
import flir from '../images/flir/flir-1.jpg'
import cncMachine from "../images/avionics/cnc-machine.png"
import tayseerAvionics from "../images/avionics/tayseer-avionics-1500.png"
import garmin from '../images/avionics/garmin-dealership.png'
import abouthero from '../images/about_home-1500.png'
import hangar from '../images/general/hangar.png'
import jeffmichael from '../images/Jeff -Michael-1500.png'
import codyrobin from '../images/cody-robin.jpeg'
import heroImg from '../images/general/aircraft-double-decker-red-belt_1500.png'
import about from '../images/general/about_home.png'
import mechanics1 from '../images/mechanics/cirrusrobin2.jpg'
import mechanics2 from '../images/mechanics/riveting.jpg'
import MultiCarouselPage from "../components/MulitCarouselPage";
import ProductCarousel from "../components/ProductCarousel";
import JumboCardImgs from "../components/JumboCardImgs";
import hero from '../images/bg-graphics/hero/hero-legs.png'
import repair_award from '../images/bg-graphics/repair-award/r-dark-contrast.png'
// import repair_award from '../images/bg-graphics/repair-award/r-1.png'
// import services from '../images/bg-graphics/services/hangar.png'
import services from '../images/bg-graphics/services/white-service.png'
import textured from '../images/bg-graphics/services/textured-1.png'
import '../style/animations.css'
import SummaryNav from "../components/Headers-Nav-Footer/SummaryNav";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ScrollToTop from "../components/ScrollToTop";
import jeffmicheal from '../images/Jeff -Michael.jpeg';


const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons
                jumboClass={'mx-0 p-0 border-0 mb-0'}
                img={hero}
                imgClassName={'m-0 h-150 w-100 '}
            />


            {/*  =============   ICONS ROW - DESKTOP  =============== */}

            <Jumbotrons
                jumboClass={'mx-0 p-0 border-0 mb-0'}
                jumboStyle={{backgroundColor: 'transparent'}}
                img={repair_award}
                imgClassName={'m-0 h-150 w-100 '}
            />



            {/*  =============  SUMMARY NAV  =============  */}



            {/*<Jumbotrons*/}
            {/*    jumboClass={'mx-0 p-0 border-0 mb-0 global_gradient'}*/}
            {/*    img={services}*/}
            {/*    imgClassName={'m-0 h-150 w-100 '}*/}
            {/*/>*/}

            {/*<Container style={{marginTop: '-15vh', marginBottom: '25vh'}}>*/}
                <SummaryNav
                    img={services}
                    jumboStyle={{height: '80vh'}}
                    jumboClass={'d-flex align-items-center justify-content-center SummaryNavBg'}
                    summaryClass={'mx-2'}
                    // summaryStyle={{marginTop: '150vh'}}
                    // summaryStyle={'marginTop'}
                    showTag={true}
                    title1={'GARMIN DEALER'}
                    title2={'AVIONICS'}
                    title3={'MAINTENANCE'}
                    title4={'EO/IR FLIR'}
                    // img1={garmin}
                    // img2={avionics}
                    // img3={maintenance}
                    // img4={flir}
                    img1={textured}
                    img2={textured}
                    img3={textured}
                    img4={textured}
                />

            {/*</Container>*/}


            {/*  =============  WHY BISON  =============  */}
            {/*<main className='mx-auto' style={{marginTop: '25vh'}}>*/}
                <Container  className='mx-auto' style={{marginTop: '25vh', marginBottom: '25vh'}}>
                    <JumboCardImgAndText
                        xsRow={12}
                        lgImgCol={4}
                        xsImgCol={12}
                        imgSrc={about}
                        imgClassName={'h-100 w-100 rounded'}
                        lgTextCol={8}
                        xsTextCol={12}
                        lgTitleCol={12}
                        mdIconTextCol={12}
                        iconSymbol={'far fa-plane global_bisonRedFontWhiteBg animations_icon-spin'}
                        lgIconCol={1}
                        lgSubtextCol={11}
                        mdBlockTextCol={12}
                        title={'Why Choose Bison Aviation'}
                        subText={'AVIONICS & AIRCRAFT MAINTENANCE & FLIR'}
                        paragraph={'Bison Aviation is an FAA certificated Part 145 Repair Station serving the general aviation community. Founded by an avid general aviation pilot and fellow aircraft owner, we operate with the unique perspective of an organization which is intimately familiar not only with the world of professional aircraft maintenance, but also with the world of aircraft ownership and operation. We know that our customers rely on us to provide them with an honest and frank assessment of the condition of their aircraft, and we are honored to accept that charge.'}
                    />
                </Container>
            {/*</main>*/}

            {/*   =============   GARMIN SECTION   =============    */}
            <Container style={{marginTop: '25vh', marginBottom: '25vh'}}>
                <Row xs={12}>
                    <Col className='d-flex justify-content-center'>
                        <h1 className='flag red global_accentFont shadow'>&nbsp; &nbsp; NEW! &nbsp; &nbsp;   </h1>
                        <h1>Certified Avionics Garmin Dealer</h1>
                    </Col>
                </Row>
                <MultiCarouselPage/>
            </Container>

            {/*   =============   AVIONICS SECTION   =============    */}
            <Container style={{marginTop: '25vh', marginBottom: '25vh'}}>
                <Row xs={12}>
                    <Col className='d-flex justify-content-center'>
                        <h1>Avionics</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center mb-3 text-center'>
                        <p>
                            Bison Aviation is proud to have a full-time avionics team in-house. While many shops
                            “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as
                            a part of our workforce. Our capabilities range from basic troubleshooting to
                            complete panel installations and by having all services in-house (including CNC panel
                            fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs
                            for our customers.
                        </p>
                    </Col>
                </Row>

                <JumboCardImgs imgSrc1={panel}
                               imgSrc2={tayseerAvionics}
                               imgSrc3={cncMachine}
                               imgSrc4={panel2}>
                </JumboCardImgs>

                {/*   =============  AVIONICS ICONS  =============   */}
                <Row xs={12} className='mt-5'>
                    <Col className='d-flex justify-content-center '>
                        <i className='fas fa-bolt global_bisonRedFontWhiteBg animations_icon-spin animations_icon-font-size'> </i>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <i className='fas fa-bug global_bisonRedFontWhiteBg animations_icon-spin animations_icon-font-size'> </i>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <i className='far fa-check-square global_bisonRedFontWhiteBg animations_icon-spin animations_icon-font-size'> </i>
                    </Col>
                </Row>
                <Row xs={12}>
                    <Col className='d-flex justify-content-center'>
                        <p className='text-muted'>AVIONICS INSTALLATIONS</p>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <p className='text-muted'>AVIONICS REPAIR</p>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <p className='text-muted'>RE-CERTIFICATION</p>
                    </Col>
                </Row>
                {/*   ICON ROW TWO   */}
                <Row xs={12} className='mt-4'>
                    <Col className='d-flex justify-content-center'>
                        <i className='fas fa-bullseye global_bisonRedFontWhiteBg animations_icon-spin animations_icon-font-size'> </i>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <i className='fas fa-cogs global_bisonRedFontWhiteBg animations_icon-spin animations_icon-font-size'> </i>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <i className='fas fa-tachometer-alt global_bisonRedFontWhiteBg animations_icon-spin animations_icon-font-size'> </i>
                    </Col>
                </Row>
                <Row xs={12}>
                    <Col className='d-flex justify-content-center'>
                        <p className='text-muted'>ADS-B UPGRADES</p>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <p className='text-muted'>CUTTING-EDGE TECHNOLOGY</p>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <p className='text-muted'>RVSM READY</p>
                    </Col>
                </Row>
            </Container>

            {/*   =============   TESTIMONIAL CAROUSEL   =============   */}
            <Container style={{marginTop: '25vh', marginBottom: '25vh'}} className='global_bisonRedFadedBgColor'>
                <TestimonialCarousel/>
            </Container>

            {/*   =============   MAINTENANCE SECTION   =============   */}
            <Container style={{marginTop: '25vh', marginBottom: '25vh'}} >
                <h1>Maintenance</h1>
                <Row xs={12} className='d-flex justify-content-end ml-3'>
                    <Col xs={6}>

                        <Row xs={12} className='mt-4 px-auto'>
                            <Row xs={12}>
                                <Col xs={2} className='d-flex justify-content-start' >
                                    <i className='far fa-plane global_bisonRedFontWhiteBg animations_icon-spin'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={10} className='d-flex justify-content-end'>
                                    <p className='text-muted mt-1 global_accentFont'>AOG Response</p>
                                </Col>
                            </Row>
                        </Row>
                        <Row xs={12} className='mt-4 px-auto'>
                            <Row xs={12}>
                                <Col xs={2} className='d-flex justify-content-start'>
                                    <i className='fal fa-tools global_bisonRedFontWhiteBg animations_icon-spin'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={10} className='d-flex justify-content-end'>
                                    <p className='text-muted mt-1 global_accentFont'>Routine Annual</p>
                                </Col>
                            </Row>
                        </Row>
                        <Row xs={12} className='mt-4 px-auto'>
                            <Row xs={12}>
                                <Col xs={2} className='d-flex justify-content-start'>
                                    <i className='fal fa-clipboard-list-check global_bisonRedFontWhiteBg animations_icon-spin'
                                       style={{fontSize: '2.5em'}}> </i>
                                </Col>
                                <Col xs={10} className='d-flex justify-content-end'>
                                    <p className='text-muted mt-1 global_accentFont'>Pre-purchase Inspections</p>
                                </Col>
                            </Row>
                        </Row>
                        <Row xs={12} className='mt-4 px-auto'>
                            <Row xs={12}>
                                <Col xs={2} className='d-flex justify-content-start'>
                                    <i className='fal fa-file-certificate global_bisonRedFontWhiteBg animations_icon-spin'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={10} className='d-flex justify-content-end'>
                                    <p className='text-muted mt-1 global_accentFont'>FAA Licensed Technicians</p>
                                </Col>
                            </Row>
                        </Row>
                        <Row xs={12} className='mt-4 px-auto'>
                            <Row xs={12}>
                                <Col xs={2} className='d-flex justify-content-start' >
                                    <i className='far fa-angle-right global_bisonRedFontWhiteBg animations_icon-spin'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={10} className='d-flex justify-content-end'>
                                    <p className='text-muted mt-1 global_accentFont'>...and much more</p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                    <Col xs={6} className='mt-lg-n5 mt-sm-5'>
                        <Row xs={12} className='mb-3'>
                            <Col xs={6} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo'>
                                <img src={mechanics1} className='h-100 w-100 rounded-left' alt=""/>
                            </Col>
                            <Col xs={6} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo d-none d-sm-block'>
                                <img src={mechanics2} className='h-100 w-100 rounded-right' alt=""/>
                            </Col>
                        </Row>
                        <Row xs={12} className='mb-3'>
                            <Col xs={6} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo'>
                                <img src={mechanics2} className='h-100 w-100 rounded-left' alt=""/>
                            </Col>
                            <Col xs={6} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo d-none d-sm-block'>
                                <img src={mechanics1} className='h-100 w-100 rounded-right' alt=""/>
                            </Col>
                        </Row>

                        {/*==================*/}

                        <Row xs={12} className='mb-3'>
                            <Col xs={6} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo d-block d-sm-none'>
                                <img src={mechanics1} className='h-100 w-100 rounded-left' alt=""/>
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={6} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo d-block d-sm-none'>
                                <img src={mechanics1} className='h-100 w-100 rounded-right' alt=""/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

            <Container style={{marginTop: '25vh', marginBottom: '25vh'}}>
                <JumboCardImgAndText
                    // rowStyle={{marginTop: '20vh'}}
                    xsRow={12}
                    lgImgCol={4}
                    xsImgCol={{order: 'last'}}
                    imgSrc={flir}
                    imgClassName={'h-100 w-100 mt-5 rounded'}
                    lgTextCol={8}
                    xsTextCol={12}
                    lgTitleCol={12}
                    mdIconTextCol={12}
                    iconSymbol={'fal fa-video global_bisonRedFontWhiteBg animations_icon-spin'}
                    lgIconCol={1}
                    lgSubtextCol={11}
                    mdBlockTextCol={12}
                    title={'EO / IR FLIR'}
                    subText={'World\'s largest in-house inventory of legacy airborne EO/IR FLIR equipment/parts'}
                    paragraph={'Bison Aviation maintains the world\'s largest in-house inventory of legacy airborne EO/IR and FLIR equipment and parts. Our system inventory includes units from FLIR Systems, Inc., L3 Wescam, Gyrocam, Polytech, and SweSystems. Our overhauled systems are providing reliable service at agencies throughout the United States in addition to countries around the globe. From complete flight-ready systems, to major LRUs, mounting kits, and ISR mission support equipment, Bison Aviation is able to respond quickly to our customer\'s airborne ISR system needs.'}
                />
            </Container>

        </>
    )
};

export default HomeScreen