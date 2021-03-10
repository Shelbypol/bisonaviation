import React, {useState} from 'react'
import '../../../style/flirScreen/FlirHero.css'
import { Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

const FlirHero = () => {

    return (
        <Container className='p-0 fluid'>

            <Jumbotron className='FlirHero_hero-img global_rich-black-bg '
                       fluid>
            </Jumbotron>

        </Container>
    )
};

export default FlirHero