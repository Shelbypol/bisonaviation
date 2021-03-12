import React from 'react'
import MechanicsHero from "../components/2/mechanics-screen/MechanicsHero";
import {Jumbotron} from "reactstrap";
import AvionicsIcons from "../components/2/avionics-Screen/AvionicsIcons";


const MaintenanceScreen = () => {
    return (
        <>
                <MechanicsHero/>
                <AvionicsIcons/>
        </>
    )
};

export default MaintenanceScreen