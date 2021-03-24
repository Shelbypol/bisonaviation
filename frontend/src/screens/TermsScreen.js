import React, {useLayoutEffect} from 'react'
import TermHero from '../components/2/term-screen/TermHero';
import TermText from '../components/2/term-screen/TermText';
import '../style/2/termsScreen/Terms.css';


const TermsScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <TermHero/>
            <TermText/>
        </>

    )

};

export default TermsScreen