import React from 'react'
import {Container} from "react-bootstrap";
import FlirHero from "../components/2/flir-screen/FlirHero";
import FlirTable from "../components/2/flir-screen/FlirTable";

const FlirScreen = () => {
    return (
        <>
            <FlirHero/>

            <Container className='p-0 m-0 fluid'>
                <FlirTable/>
            </Container>
        </>
    )
};

export default FlirScreen