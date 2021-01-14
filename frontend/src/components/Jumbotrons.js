import React from 'react';
import {Jumbotron, Container} from 'reactstrap';

const Jumbotrons = ({jumboClass, jumboStyle ,img, imgAlt, imgClassName, imgStyle , textContainerClass, textContainerStyle ,title, titleClassName , textClassName, text}) => {
    return (
            <Jumbotron className={jumboClass} style={jumboStyle} fluid>
                <img src={img} alt={imgAlt} className={imgClassName} style={imgStyle} />
                <Container fluid className={textContainerClass} style={textContainerStyle}>
                    <h1 className={titleClassName} >{title}</h1>
                    <p className={textClassName} >{text}</p>
                </Container>
            </Jumbotron>
    );
};

export default Jumbotrons;