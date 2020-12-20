import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import '../style/jumbotron.css'

const Jumbotrons = ({jumboClass, jumboStyle ,img, imgAlt, imgClassName ,title, titleClassName, textClassName, text}) => {
    return (
        <div>
            <Jumbotron className={jumboClass} style={jumboStyle} fluid>
                <img src={img} alt={imgAlt} className={imgClassName} />
                <Container fluid className='col-12'>
                    <h1 className={titleClassName}>{title}</h1>
                    <p className={textClassName}>{text}</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbotrons;