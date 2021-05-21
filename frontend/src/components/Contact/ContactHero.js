import React from 'react'
import './Contact.css'
import HeroJumbotron from "../HeroJumbotron/HeroJumbotron";



const ContactHero = () => {

    return (
        <HeroJumbotron
            img={'Contact_hero-img'}
            showImg={true}
            title={'Contact'}
            leftTitle={false}
        />

    )
};

export default ContactHero