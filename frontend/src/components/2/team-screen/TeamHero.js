import React, {useState} from 'react'
import '../../../style/2/teamScreen/TeamHero.css'
import {Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";


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