import React, {useState} from 'react'
import '../../../style/1/teamScreen/TeamHero.css'
import {Button, Col, Row, Card, Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {LinkContainer} from "react-router-bootstrap";

const TeamHero = () => {

    return (
        <Container className='p-0 fluid'>

            <Jumbotron className='TeamHero_hero-img global_rich-black-bg '
                       fluid>
            </Jumbotron>

        </Container>
    )
};

export default TeamHero