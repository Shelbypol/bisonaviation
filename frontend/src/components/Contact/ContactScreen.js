import React, {useLayoutEffect} from 'react'
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import HeroJumbotron from "../HeroJumbotron/HeroJumbotron";
import hero from "../Home/images/large-flir.png";

const ContactScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <ContactHero/>
            {/*<HeroJumbotron*/}
            {/*    img={hero}*/}
            {/*    showImg={true}*/}
            {/*    title={'Contact'}*/}
            {/*    leftTitle={true}*/}
            {/*/>*/}
            <ContactInfo/>
        </>

    )

};

export default ContactScreen