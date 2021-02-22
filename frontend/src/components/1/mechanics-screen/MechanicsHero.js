import React, {useState} from 'react'
import '../../../style/mechanicsScreen/MechanicsHero.css'
import {Button, Col, Row, Card, Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {LinkContainer} from "react-router-bootstrap";

const MechanicsHero = () => {

    return (
        <Container className='p-0 fluid'>

            <Jumbotron className='MechanicsHero_hero-img global_rich-black-bg '
                       fluid>

            </Jumbotron>
        </Container>
    )
};

export default MechanicsHero