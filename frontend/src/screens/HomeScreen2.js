import React, {useLayoutEffect} from 'react'
import '../style/global-2.css'
import HomeHero from '../components/HomeHero'
import RepairAward from '../components/home-screen/RepairAward'
import Services from "../components/home-screen/Services";
import Avionics from "../components/home-screen/Avionics";
import Mechanics from "../components/home-screen/Mechanics";
import Flir from "../components/home-screen/Flir";
import {Container} from 'react-bootstrap';
import {Jumbotron} from "reactstrap";


const HomeScreen2 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>

            <HomeHero/>

            <Container className='m-0 p-0' fluid>
                <RepairAward/>

                <Container className='m-5 p-0' fluid>
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
                <Jumbotron
                    className='Global_Flir_bg-img mt-n3 mb-0 p-0 pb-5 d-flex align-content-stretch bg-transparent'
                    fluid>
                    <Container className='p-0 fluid'>
                        <Flir/>
                    </Container>
                </Jumbotron>

            </Container>

        </>

    )
};
export default HomeScreen2