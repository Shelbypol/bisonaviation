import React from 'react'
import MechanicsHero from "../components/2/mechanics-screen/MechanicsHero";
import {Jumbotron} from "reactstrap";
import AvionicsIcons from "../components/2/avionics-Screen/AvionicsIcons";


const MaintenanceScreen = () => {
    return (
        <>
            <Jumbotron className='MechanicsScreen_dots bg-transparentv p-0 m-0' fluid>
                <MechanicsHero/>
            </Jumbotron>
                <AvionicsIcons/>
        </>
    )
};

export default MaintenanceScreen