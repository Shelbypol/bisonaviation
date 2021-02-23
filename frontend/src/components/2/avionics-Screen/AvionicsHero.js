import React, {useState} from 'react'
import '../../../style/avionicsScreen/AvionicsHero.css'
import {Button, Col, Row, Card, Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {LinkContainer} from "react-router-bootstrap";

const AvionicsHero = () => {

    return (
        <Container className='p-0 fluid'>

            <Jumbotron className='AvionicsHero_hero-img global_rich-black-bg '
                       fluid>
            </Jumbotron>
         </Container>
    )
};

export default AvionicsHero