import React, {useLayoutEffect} from 'react'
import TermsHero from './TermsHero';
import TermsGeneral from './TermsGeneral';
import './Terms.css';


const TermsScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <TermsHero/>
            <TermsGeneral/>
        </>

    )

};

export default TermsScreen