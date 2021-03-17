import React from 'react'
import {Jumbotron, Container} from "reactstrap";


const TermHero = () => {

    return (

        <Jumbotron className='TermsScreen_hero-img'
                   fluid>
            <Container className='text-center border-5 TermHero_title-box'>
                <p className='TermsHero_title'>Terms & Conditions</p>
            </Container>
        </Jumbotron>

    )
};

export default TermHero