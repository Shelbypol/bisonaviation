import React from 'react'
import {Container} from "react-bootstrap";
import MechanicsHero from "../components/2/mechanics-screen/MechanicsHero";
import {Jumbotron} from "reactstrap";


const MaintenanceScreen = () => {
    return (
        <>
            <Jumbotron className='MechanicsScreen_dots bg-transparent mb-0 pb-0' fluid>
                <MechanicsHero/>
            </Jumbotron>
        </>
    )
};

export default MaintenanceScreen