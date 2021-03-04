import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TeamHero from "../components/2/team-screen/TeamHero";
import TeamCard from "../components/2/team-screen/TeamCard";
import {Jumbotron} from "reactstrap";

const TeamScreen = () => {
    return (
        <>
            <TeamHero/>

            <Jumbotron className='mx-auto bg-transparent border'
                       fluid>

                <Row className='px-auto'>
                    <Col xs={3}>
                        <TeamCard
                            name={'John D. Atkin IV, ATP / MEII'}
                            position={'President'}
                            certifications={' FAA: Airline Transport Pilot - ASEL, ASES, AMEL, CE500; Flight\n' +
                            '                                    Instructor - CFI, CFII, MEI; EPA Refrigerant'}
                            locations={'All'}
                            specialTraining={' CE500/550/560 Single Pilot Waiver; SW2, SW3, Advanced Pilot Seminar,\n' +
                            '                                    BPPP.'}
                            bio={' John earned his pilot\'s license in Kansas at the age of\n' +
                            '                                    seventeen. Since then, he has been obsessed with general\n' +
                            '                                    aviation. After working as a corporate pilot in San Antonio,\n' +
                            '                                    John started Bison Aviation with the goal of providing aircraft\n' +
                            '                                    operators an advocate in the aircraft maintenance industry. As\n' +
                            '                                    an avid general aviation pilot with over 9,000 flight hours (all\n' +
                            '                                    in GA aircraft) and as a fellow aircraft owner, John has spent\n' +
                            '                                    significant time on both sides of the aircraft maintenance\n' +
                            '                                    equation, providing him with the unique viewpoint of someone who\n' +
                            '                                    understands aircraft maintenance both as a pilot / owner, as\n' +
                            '                                    well as a repair station operator.'}


                        />

                    </Col>

                </Row>
            </Jumbotron>

        </>
    )
};

export default TeamScreen