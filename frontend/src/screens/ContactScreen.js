import React, {useLayoutEffect} from 'react'
import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";

const ContactScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <ContactHero/>
            <ContactInfo/>
        </>

    )

};

export default ContactScreen