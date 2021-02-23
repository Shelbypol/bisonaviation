import React from 'react'
import {Container} from "react-bootstrap";
import MechanicsHero from "../components/1/mechanics-screen/MechanicsHero";


const MaintenanceScreen = () => {
    return (
        <>
            <Container className='m-0 p-0 fluid'>
                <MechanicsHero/>
            </Container>
        </>
    )
};

export default MaintenanceScreen