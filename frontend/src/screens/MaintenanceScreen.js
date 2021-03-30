import React, {useLayoutEffect} from 'react'
import MechanicsHero from "../components/mechanics-screen/MechanicsHero";
import AvionicsIcons from "../components/avionics-Screen/AvionicsIcons";


const MaintenanceScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
                <MechanicsHero/>
                <AvionicsIcons/>
        </>
    )
};

export default MaintenanceScreen