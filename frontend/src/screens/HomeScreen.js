import React, {useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Jumbotrons from "../components/Jumbotrons";
import JumboCardImgAndText from "../components/JumboCardImgAndText";
import '../style/flag.scss'
import panel from '../images/avionics/panal-avionics.JPG'
import panel2 from '../images/avionics/20190218_155138 (1).jpg'
import avionics from '../images/avionics/panal-avionics.JPG'
import maintenance from '../images/mechanics/robin-cirrus-divider.png'
import flir from '../images/flir/flir-1.jpg'
import cncMachine from "../images/avionics/cnc-machine.png"
import tayseerAvionics from "../images/avionics/tayseer-1.jpg"
import garmin from '../images/avionics/garmin-dealership.png'
import hangar from '../images/general/hangar.png'
import heroImg from '../images/general/aircraft-double-decker-red-belt_1500.png'
import about from '../images/general/about_home.png'
import MultiCarouselPage from "../components/MulitCarouselPage";
import ProductCarousel from "../components/ProductCarousel";
import JumboCardImgs from "../components/JumboCardImgs";
import '../style/animations.css'
import SummaryNav from "../components/SummaryNav";
import TestimonialCarousel from "../components/TestimonialCarousel";


const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons
                jumboClass={'m-0 p-0 animations_img-hover-zoom-out'}
                img={heroImg}
                imgClassName={'col-12 p-0 mx-0 mb-0'}
                textContainerStyle={{backgroundColor: 'rgba(01, 02, 03, 1)'}}
                textContainerClass={'col-12 mt-n2 py-0 my-0'}
                title={'Bison Aviation'}
                titleClassName={'text-light py-0 my-0'}
                // text={'We work hard on the ground so you can fly with confidence'}
                // textClassName={'text-light py-0 my-0'}
            />

            {/*<Jumbotrons jumboClass={'p-0 global_black-horizontal-gradient-top'}*/}
            {/*            jumboStyle={{height: '180%'}}*/}
            {/*            imgClassName={'col-12 p-0 m-0'}*/}
            {/*/>*/}

            <Jumbotrons
                // jumboStyle={{backgroundColor:'white'}}
                jumboClass={'mt-n3 pt-0 mb-5 pb-5 global_black-horizontal-gradient'}
                // img={heroImg}
                // imgClassName={'col-12 p-0 mx-0 mb-0'}
                // textContainerStyle={{backgroundColor: 'white'}}
                textContainerClass={'col-12 pt-n5 mt-n2 d-flex justify-content-center '}
                // title={'Bison Aviation'}
                // titleClassName={'text-light py-0 my-0'}
                text={<h4>We work hard on the ground so you can fly with confidence</h4>}
                textClassName={'text-center py-0 '}
            />

            {/*<main className='mx-auto'>*/}
            {/*  =============   ICONS ROW - DESKTOP  =============== */}
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col xs={12} md={6} className=''>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <h4 className='global_accentFont'> FAA Part 145 Repair Station</h4>
                            </Col>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <i className='fal fa-tools global_bisonRedFontWhiteBg animations_icon-font-size animations_icon-spin'> </i>
                            </Col>
                            {/*<Col xs={12}>*/}
                            {/*    <p> Bison Aviation is a fully licensed FAA Part 145 Repair Station with Airframe,*/}
                            {/*        Instrument and Radio capabilities, an accreditation which is extremely difficult to*/}
                            {/*        attain and sets Bison Aviation apart from most other general aviation shops. Among*/}
                            {/*        other privileges, this licensure allows Bison Aviation to conduct testing and*/}
                            {/*        recertification of aircraft static systems and transponder equipment. Bison Aviation*/}
                            {/*        is the holder of FAA Air Agency Certificate Number 85NR497D.</p>*/}
                            {/*</Col>*/}
                        </Row>
                    </Col>

                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <h4 className='global_accentFont'>FAA Diamond Award Recipient</h4>
                            </Col>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <i className='fal fa-award global_bisonRedFontWhiteBg animations_icon-font-size animations_icon-spin'> </i>
                            </Col>
                            {/*<Col xs={12}>*/}
                            {/*    <p> Bison Aviation is a proud recipient of the prestigious FAA Diamond Award for*/}
                            {/*        excellence in maintenance training & safety. This award is the highest conferred by*/}
                            {/*        the FAA for aircraft maintenance organizations in recognition of their dedication to*/}
                            {/*        employee training and safety. Our technicians regularly participate in online and*/}
                            {/*        face-to-face training programs put on by industry professionals, owner / type*/}
                            {/*        organizations (ABS, AOPA, TCF, COPA, etc.) and of course the FAA, resulting in a*/}
                            {/*        training curriculum which vastly exceeds the regulatory requirements.</p>*/}
                            {/*</Col>*/}
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/*</main>*/}

            {/*  =============  SUMMARY NAV  =============  */}
            <Container style={{marginTop: '10vh'}}>
                <SummaryNav
                    showTag={true}
                    title1={'GARMIN DEALER'}
                    title2={'AVIONICS'}
                    title3={'MAINTENANCE'}
                    title4={'EO/IR FLIR'}
                    img1={garmin}
                    img2={avionics}
                    img3={maintenance}
                    img4={flir}
                />
            </Container>


            {/*  =============  WHY BISON  =============  */}
            <main className='mx-auto' style={{marginTop: '25vh'}}>
                <Container>
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
            </main>

            {/*   =============   GARMIN SECTION   =============    */}
            <Container className='mt-lg-0 pt-lg-0 mt-sm-5 pt-sm-5 pt-5 mb-5 pb-5'>
                <Row xs={12}>
                    <Col className='d-flex justify-content-center '>
                        <h1 className='flag red global_accentFont shadow'>&nbsp; &nbsp; NEW! &nbsp; &nbsp;   </h1>
                        <h1>Certified Avionics Garmin Dealer</h1>
                    </Col>
                </Row>
                <MultiCarouselPage/>
            </Container>

            {/*   =============   AVIONICS SECTION   =============    */}
            <Container className='mt-5 pt-5'>
                <Row xs={12}>
                    <Col className='d-flex justify-content-center'>
                        <h1>Avionics</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center mb-3 text-center'>
                        <p>
                            {/*Bison Aviation is proud to have a full-time avionics team in-house.<br/> While many shops*/}
                            {/*“sub out” their avionics work, Bison Aviation maintains a full service avionics staff as*/}
                            {/*a part of our workforce.<br/> Our capabilities range from basic troubleshooting to*/}
                            {/*complete panel installations and by having all services in-house (including CNC panel*/}
                            {/*fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs*/}
                            {/*for our customers.*/}
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
                <Row xs={12} className='mt-5 '>
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
            <Container style={{marginTop: '20vh'}} className='global_bisonRedFadedBgColor'>
                <TestimonialCarousel/>
            </Container>


            <Container>
                {/*   =============   MAINTENANCE SECTION   =============   */}
                <JumboCardImgAndText
                    rowStyle={{marginTop: '35vh'}}
                    xsRow={12}
                    lgImgCol={4}
                    xsImgCol={{order: 'last'}}
                    imgSrc={cncMachine}
                    imgClassName={'h-75 w-75 mt-5'}
                    lgTextCol={8}
                    xsTextCol={12}
                    lgTitleCol={12}
                    mdIconTextCol={12}
                    iconSymbol={'far fa-plane global_bisonRedFontWhiteBg animations_icon-spin'}
                    lgIconCol={1}
                    lgSubtextCol={11}
                    mdBlockTextCol={12}
                    title={'MAINTENANCE'}
                    subText={'full service avionics staff'}
                    paragraph={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}
                />

                <JumboCardImgAndText
                    xsRow={12}
                    lgImgCol={4}
                    xsImgCol={12}
                    imgSrc={tayseerAvionics}
                    imgClassName={'h-75 w-75 mt-5'}
                    lgTextCol={8}
                    xsTextCol={12}
                    lgTitleCol={12}
                    mdIconTextCol={12}
                    iconSymbol={'far fa-plane global_bisonRedFontWhiteBg animations_icon-spin'}
                    lgIconCol={1}
                    lgSubtextCol={11}
                    mdBlockTextCol={12}
                    subText={'full service avionics staff'}
                    paragraph={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}

                />

            </Container>

        </>
    )
};

export default HomeScreen