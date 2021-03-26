import React, {useLayoutEffect} from 'react'
import AvionicsHero from "../components/2/avionics-Screen/AvionicsHero";

const AvionicsScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <AvionicsHero/>
        </>
    )
};

export default AvionicsScreen

