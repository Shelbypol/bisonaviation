import React from 'react'
import {Container} from "react-bootstrap";
import TeamHero from "../components/2/team-screen/TeamHero";
import TeamCard from "../components/2/team-screen/TeamCard";

const TeamScreen = () => {
    return (
        <>
            <Container className='m-0 p-0 fluid'>
                <TeamHero/>
                <TeamCard/>
            </Container>
        </>
    )
};

export default TeamScreen