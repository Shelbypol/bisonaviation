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
                            img={}
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

                    <Col className='col-lg-3 col-md-2 col-sm-1'>
                        {/*   LESLIE   */}
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