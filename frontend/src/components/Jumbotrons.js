import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import '../style/Jumbotrons.css'

const Jumbotrons = ({jumboClass, jumboStyle ,img, imgAlt, imgClassName , textContainerClass, textContainerStyle ,title, titleClassName , textClassName, text}) => {
    return (
            <Jumbotron className={jumboClass} style={jumboStyle} fluid>
                {/*<Container fluid className={textContainerClass} style={textContainerStyle}>*/}
                {/*    /!*<h1 className={titleClassName} >{title}</h1>*!/*/}
                {/*    /!*<p className={textClassName} >{text}</p>*!/*/}
                {/*</Container>*/}
                <img src={img} alt={imgAlt} className={imgClassName} />
            </Jumbotron>
    );
};

export default Jumbotrons;