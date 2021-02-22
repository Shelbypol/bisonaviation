import React, {useState} from 'react'
import AvionicsHero from "../components/1/avionics-Screen/AvionicsHero";
import {Container} from "react-bootstrap";

const AvionicsScreen = () => {
    return (
        <>
            <Container className='m-0 p-0 fluid'>
                <AvionicsHero/>
            </Container>
        </>
    )
};

export default AvionicsScreen

