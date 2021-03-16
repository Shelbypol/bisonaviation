import React, {useState} from 'react'
import {Container, Row} from "react-bootstrap";
import jumbotron from 'reactstrap';
import ContactHero from "../components/2/contact-screen/ContactHero";
import ContactInfo from "../components/2/contact-screen/ContactInfo";

const ContactScreen = () => {
    return (
        <>

            <ContactHero/>
            <ContactInfo/>


        </>

    )

};

export default ContactScreen