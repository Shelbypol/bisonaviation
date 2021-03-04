import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TeamHero from "../components/2/team-screen/TeamHero";
import TeamCard from "../components/2/team-screen/TeamCard";
import {Jumbotron} from "reactstrap";
import johnAtkin from '../images/bg-graphics/screen-team/john_atkin.png'
import leslieBanner from '../images/bg-graphics/screen-team/leslie_banner.png'
import deenaSmith from '../images/bg-graphics/screen-team/deena_smith.png'
import jdPhillips from '../images/bg-graphics/screen-team/jd_phillips.png'
import roelRogerio from '../images/bg-graphics/screen-team/roel_rogerio.png'
import jeffRossell from '../images/bg-graphics/screen-team/jeffrey_rossell.png'
import chadBrooks from '../images/bg-graphics/screen-team/chad_brooks.png'
import codyStrack from '../images/bg-graphics/screen-team/cody_strack.png'
import robinRodriguez from '../images/bg-graphics/screen-team/robin_rodriguez.png'
import shelbyPolasek from '../images/bg-graphics/screen-team/shelby_polasek.png'
import jerryFitzgerald from '../images/bg-graphics/screen-team/jerry_fitzgerald.png'
import johnSenecal from '../images/bg-graphics/screen-team/john_senecal.png'
import halibut from '../images/bg-graphics/screen-team/halibut.png'
import tuna from '../images/bg-graphics/screen-team/tuna.png'
import mackerel from '../images/bg-graphics/screen-team/mackeral.png'


const TeamScreen = () => {
    return (
        <>
            <TeamHero/>

            <Jumbotron className='mx-auto bg-transparent border'
                       fluid>

                <Row className='px-auto'>
                    <Col className='col-lg-3 col-md-2 col-sm-1'>
                        {/*   JOHN ATKIN   */}
                        <TeamCard
                            eventKey={'0'}
                            img={johnAtkin}
                            headerName={'John D. Atkin IV'}
                            headerPosition={'ATP / MEII'}
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

                    <Col className='col-lg-3 col-sm-1'>
                        {/*   LESLIE   */}
                        <TeamCard
                            eventKey={'1'}
                            img={leslieBanner}
                            headerName={'Leslie D. Banner'}
                            headerPosition={'Operations Manager'}
                            name={'Leslie D. Banner'}
                            position={'Operations Manager'}
                            certifications={''}
                            locations={'All'}
                            specialTraining={''}
                            bio={'Lesli\'s father, a pilot and aircraft owner, introduced her to general aviation at a very young age. As an avid traveler, Lesli has spent a great deal of time in general aviation aircraft exploring the United States. After spending many years in sales and operations management for major corporations, Lesli was hired as Bison Aviation\'s first employee. Today she oversees the "behind-the-scenes" functions which keep Bison Aviation running smoothly and efficiently.'}

                        />
                    </Col>

                    <Col className='col-lg-3 col-sm-1'>
                        {/*   DEENA SMITH   */}
                        <TeamCard
                            eventKey={'2'}
                            img={deenaSmith}
                            headerName={'Deena Smith'}
                            headerPosition={'Shop Manager, A&P'}
                            name={'Deena Smith'}
                            position={'Shop Manager, A&P'}
                            certifications={' FAA: Mechanic - Airframe & Powerplant'}
                            locations={'Boerne Stage Airfield - 5C1'}
                            specialTraining={''}
                            bio={'After earning her Bachelor\'s and Master\'s degrees in English Literature, Deena taught at the collegiate level for three years, including an aviation university which kindled her interest in aircraft. She pursued and earned her FAA airframe and powerplant mechanic\'s license, planning to travel the world as a contract mechanic. Deena subsequently joined Bison Aviation where she began working as an aircraft mechanic, prior to taking a leave of absence in order to hike the Appalachian Trail in its entirety. After completing her 2,200 mile trek, Deena returned to Bison Aviation where she currently serves as Shop Manager Lead Expeditor, facilitating parts procurement and scheduling operations for the company.'}
                            favAircraft={'Cessna 206'}
                        />
                    </Col>

                </Row>
            </Jumbotron>

        </>
    )
};

export default TeamScreen