import React, {useState} from 'react'
import '../style/global-2.css'
import HomeHero from '../components/2/HomeHero'
import RepairAward from '../components/2/RepairAward'
import Services from "../components/2/Services";
import Team from "../components/2/Team";
import Avionics from "../components/2/Avionics";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Mechanics from "../components/2/Mechanics";
import Flir from "../components/2/Flir";
import {Button, Container} from 'react-bootstrap';
import ImgRow from "../components/2/ImgRow";
import Garmin from "../components/2/Garmin";
import {Col, Jumbotron, Row} from "reactstrap";
import {LinkContainer} from "react-router-bootstrap";
import Fade from "react-reveal/Fade";

const HomeScreen2 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>

            <HomeHero/>
            <Jumbotron className='Global_graphic bg-transparent m-0 p-0' fluid>

            </Jumbotron>


            <RepairAward/>

            <Container className='p-0 fluid'>
                <hr className='global_cultured-bg'/>
            </Container>


            <Container className='p-o py-5 fluid'>
                <Services
                    showTag={true}
                />
            </Container>
            <hr className='global_blood-red-bg'/>

            <Jumbotron className='Global_Avionics_bg-img p-0 mb-1 mt-n3 d-flex align-content-stretch bg-transparent'
                       fluid>
                <Container className='p-0 fluid'>
                    <Avionics/>
                </Container>
            </Jumbotron>

            <hr className='global_blood-red-bg mt-n1'/>
            <Container className='p-0 fluid'>
                <Mechanics/>
            </Container>


            <hr className='global_blood-red-bg mt-n1'/>
            <Jumbotron className='Global_Flir_bg-img mt-n3 mb-0 p-0 pb-5 d-flex align-content-stretch bg-transparent'
                       fluid>
                <Container className='p-0 fluid'>
                    <Flir/>
                </Container>
            </Jumbotron>

        </>

    )
};
export default HomeScreen2