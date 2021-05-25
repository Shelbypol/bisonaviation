import React from 'react';
import './Flir.css';
import FlirTable from "../../components/Flir/FlirTable";
import {Jumbotron, Container} from "reactstrap";
import FlirText from "../../components/Flir/FlirText";
import HeroJumbotron from "../HeroJumbotron/HeroJumbotron";
import {Col} from "react-bootstrap";

const FlirScreen = () => {

    return (
        <>
            <HeroJumbotron
                img={'FlirHero_img'}
                showImg={true}
                title={'EO/IR - FLIR'}
                leftTitle={false}
            />

            <Container className=' pt-5'>


                <h1 className='global_whiteFontHover px-0 mx-0'>Airborne FLIR, EO/IR, & Thermography Systems</h1>
                <FlirText/>

                <Jumbotron className='FlirScreen_style bg-transparent p-0 m-0' fluid>
                    <Col xs={12} className='d-flex justify-content-start d-lg-none d-block global_blood-red-bg mt-5'>
                        <h3 className='global_white text-center'>rotate phone to view entire chart</h3>
                    </Col>
                    <FlirTable/>
                </Jumbotron>
            </Container>
        </>
    )
};

export default FlirScreen