import React, {useLayoutEffect} from 'react'
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";

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