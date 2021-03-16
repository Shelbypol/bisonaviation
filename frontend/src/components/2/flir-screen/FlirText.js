import React from 'react'
import {Jumbotron} from "reactstrap";

const FlirScreen = () => {
    return (
        <>
            <FlirHero/>

            <Jumbotron className='mx-5 bg-transparent' fluid>
                <FlirTable/>
            </Jumbotron>

        </>
    )
};

export default FlirScreen