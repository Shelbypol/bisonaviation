import React, {useLayoutEffect} from 'react'
import TermsHero from '../components/Terms/TermsHero';
import '../style/2/termsScreen/Terms.css';
import TermsFlir from "../components/Terms/TermsFlir";


const TermsFlirScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <TermsHero/>
            <TermsFlir/>
        </>

    )

};

export default TermsFlirScreen