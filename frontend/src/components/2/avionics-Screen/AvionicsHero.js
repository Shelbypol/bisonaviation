import React from 'react'
import '../../../style/avionicsScreen/AvionicsHero.css'
import {Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

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