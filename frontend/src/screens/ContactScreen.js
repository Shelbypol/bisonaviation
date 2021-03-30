import React, {useLayoutEffect} from 'react'
import ContactHero from "../components/contact-screen/ContactHero";
import ContactInfo from "../components/contact-screen/ContactInfo";

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