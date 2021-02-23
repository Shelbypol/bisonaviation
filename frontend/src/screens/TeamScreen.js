import React from 'react'
import {Container} from "react-bootstrap";
import TeamHero from "../components/1/team-screen/TeamHero";

const TeamScreen = () => {
    return (
        <>
            <Container className='m-0 p-0 fluid'>
                <TeamHero/>
            </Container>
        </>
    )
};

export default TeamScreen