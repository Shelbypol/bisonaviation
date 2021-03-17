import React, {useState} from 'react'
import {Container, Row} from "react-bootstrap";
import jumbotron from 'reactstrap';
import TermHero from '../components/2/term-screen/TermHero';
import TermText from '../components/2/term-screen/TermText';
import '../style/2/termsScreen/Terms.css';


const TermsScreen = () => {
    return (
        <>
            <TermHero/>
            <TermText/>
        </>

    )

};

export default TermsScreen