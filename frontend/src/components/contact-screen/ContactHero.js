import React from 'react'
import '../../style/2/contactScreen/Contact.css'
import {Jumbotron, Container} from "reactstrap";


const ContactHero = () => {

    return (

        <Jumbotron className='ContactScreen_hero-img '
                   fluid>
            <Container className='text-center border-5 ContactHero_title-box'>
                <p className='ContactHero_title'>Get In Touch!</p>
            </Container>
        </Jumbotron>

    )
};

export default ContactHero