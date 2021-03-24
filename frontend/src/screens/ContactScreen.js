import React, {useLayoutEffect} from 'react'
import ContactHero from "../components/2/contact-screen/ContactHero";
import ContactInfo from "../components/2/contact-screen/ContactInfo";

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