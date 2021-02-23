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
import {Container} from 'react-bootstrap';
import ImgRow from "../components/2/ImgRow";
import Garmin from "../components/2/Garmin";
import {Jumbotron} from "reactstrap";

const HomeScreen2 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HomeHero/>


            <RepairAward/>

            <Container className='p-0 fluid'>
                <Services
                    showTag={true}
                />
                <hr className='global_cultured-bg'/>
            </Container>

            <Jumbotron className='Global_Avionics_bg-img m-0 p-0 d-flex align-content-stretch bg-transparent'
                       fluid>
                <Container className='p-0 fluid'>
                    <Avionics/>
                </Container>
            </Jumbotron>

                <Mechanics/>

                <TestimonialCarousel/>

                <Flir/>

        </>

    )
};
export default HomeScreen2