import React, {useLayoutEffect} from 'react'
import TermHero from '../components/2/term-screen/TermHero';
import '../style/2/termsScreen/Terms.css';
import FlirTermsText from "../components/2/term-screen/FlirTermsText";


const TermsFlirScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <TermHero/>
            <FlirTermsText/>
        </>

    )

};

export default TermsFlirScreen