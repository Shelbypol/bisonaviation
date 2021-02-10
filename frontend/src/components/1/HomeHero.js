import React from 'react';
import {Jumbotron} from 'reactstrap';
import '../../style/1/HomeHero.css'

const HomeHero = ({title, text1, text2}) => {
    return (
        <Jumbotron className='HomeHero_bg-img' fluid>
            <h1 className='text-center'>{title}</h1>
                <h5 className='text-center'>{text1}</h5>
                <h5 className='text-center'>{text2}</h5>
        </Jumbotron>
    );
};

export default HomeHero;