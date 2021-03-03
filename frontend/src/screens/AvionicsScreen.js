import React, {useState} from 'react'
import AvionicsHero from "../components/1/avionics-Screen/AvionicsHero";
import {Container} from "react-bootstrap";
import AvionicsProducts from "../components/1/AvionicsProducts";
import AvionicsImg from "../components/1/avionics-Screen/AvionicsImg";
import AvionicsAd from "../components/1/avionics-Screen/AvionicsAd";

const AvionicsScreen = () => {
    return (
        <>
            <Container className='m-0 p-0 fluid'>
                <AvionicsHero/>
                {/*<AvionicsImg/>*/}
                {/*<AvionicsAd/>*/}
            </Container>
        </>
    )
};

export default AvionicsScreen

