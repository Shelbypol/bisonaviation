import React, {useLayoutEffect} from 'react'
import MechanicsHero from "../components/2/mechanics-screen/MechanicsHero";
import AvionicsIcons from "../components/2/avionics-Screen/AvionicsIcons";


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