import React, {useState} from 'react'
import {Container, Row} from "react-bootstrap";
import jumbotron from 'reactstrap';
import TermHero from '../components/2/term-screen/TermHero';
import '../style/2/termsScreen/Terms.css';
import FlirTermsText from "../components/2/term-screen/FlirTermsText";


const TermsFlirScreen = () => {
    return (
        <>
            <TermHero/>
            <FlirTermsText/>
        </>

    )

};

export default TermsFlirScreen