import React from 'react'
import {Container} from "react-bootstrap";
import FlirHero from "../components/2/flir-screen/FlirHero";
import FlirTable from "../components/2/flir-screen/FlirTable";
import {Jumbotron} from "reactstrap";

const FlirScreen = () => {
    return (
        <>
            <FlirHero/>

                <Jumbotron className='FlirScreen_style bg-transparent' fluid>
                    <FlirTable/>
                </Jumbotron>

        </>
    )
};

export default FlirScreen