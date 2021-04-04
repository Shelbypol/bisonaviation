import React, {useLayoutEffect, useState} from 'react'
import {Container, Row} from "react-bootstrap";
import TeamHero from "../components/team-screen/TeamHero";
import TeamCard from "../components/team-screen/TeamCard";
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
import jerryFitzgerald from '../images/bg-graphics/screen-team/jerry_fitzgerald.png'
import johnSenecal from '../images/bg-graphics/screen-team/john_senecal.png'
import matthewGurniak from '../images/bg-graphics/screen-team/matthew_gurniak.png'
import halibut from '../images/bg-graphics/screen-team/halibut.png'
import tuna from '../images/bg-graphics/screen-team/tuna.png'
import mackerel from '../images/bg-graphics/screen-team/mackeral.png'


const TeamScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <TeamHero/>

            {/*<Container className='p-0 fluid'>*/}

                <Jumbotron className='px-3 mt-n5 bg-transparent global_cultured'
                           fluid>
                    <h1 className='px-md-5 px-sm-0 m-0' style={{color: 'red'}}>Meet the Bison Team</h1>
                    <br/>
                    <p className='px-md-5 px-sm-0 m-0'>The Bison Aviation team is made up of professionally trained, highly skilled individuals, selected specifically for their particular expertise in the fields of general aviation maintenance and avionics. All of our primary technicians are fully FAA licensed (something which isn't true in most maintenance shops). The experience and skills of our team members is what makes Bison Aviation a leader in the aircraft service industry and we are proud to have each of these individuals as a part of the Bison Aviation Team!</p>
                </Jumbotron>

                <Jumbotron className='mt-n5 mx-3 bg-transparent px-md-5 px-sm-0'
                           fluid>

                    <Row>
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
                                favAircraft={false}


                            />

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

                            {/*   DEENA SMITH   */}
                            <TeamCard
                                eventKey={'0'}
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

                            {/*   Robin Rodriguez */}
                            <TeamCard
                                eventKey={'3'}
                                img={robinRodriguez}
                                headerName={'Robin Rodriguez'}
                                headerPosition={'A&P'}
                                name={'Robin Rodriguez'}
                                position={''}
                                certifications={'FAA: Mechanic - Airframe & Powerplant'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Cirrus SR20 & SR22 Factory Certified; American Bonanza Society Bonanza & Baron series.'}
                                bio={
                                    'After spending most of his life in the culinary industry, Robin decided that it was time to take his career to a new level. Robin enrolled in college and subsequently graduated with honors (Phi Theta Kappa National Honor Society) earning two associate\'s degrees along with his FAA Airframe & Powerplant mechanic\'s license. Robin found his landing spot at Bison Aviation and continues to pursue his career in aviation near his home and family.'
                                }
                                favAircraft={'Cirrus SR20 & SR22'}
                            />

                    </Row>

                    {/*============   ROW TWO  ==========*/}
                    <Row className='px-auto d-flex justify-content-center'>

                            {/*   JD PHILIPS   */}
                            <TeamCard
                                eventKey={'4'}
                                img={jdPhillips}
                                headerName={'JD Phillips'}
                                headerPosition={'Director of Maintenance (5C1)'}
                                name={'JD Phillips'}
                                position={'Director of Maintenance, A&P / IA'}
                                certifications={' FAA: Mechanic - Airframe & Powerplant / Inspection Authorization'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'NDT Level 2, EPA Refrigeration, Learjet 31A, 35, 36 40, 45, 45XR Maintenance, TFE731 Maintenance, Challenger 601 Maintenance & Ground Ops, Philips 66 Fuel Quality Management, JET Autopilot Maintenance, Honeywell / Garrett Fuel Control Maintenance, Cessna 208 Maintenance, Cessna 300 & 400 Series Maintenance, DEEC Setup & Adjustment, JT15D Maintenance & Troubleshooting, Flight Safety Avionics for AMTs.'}
                                bio={'' +
                                'Growing up in the flight path of Ellington Air Force Base during the space race instilled JD with a great interest in technology and aviation. After working as a commercial photographer for fifteen years, JD decided to become an A&P mechanic in order to earn additional money so that he could purchase his own plane and tour the world by air. After earning his A&P certificate in 1992, JD discovered that he enjoyed working on aircraft so much that he wanted to make that his primary career. He has been diligently serving the general aviation community ever since. His extensive background includes experience with virtually every make and model of GA aircraft in the Part 91 and Part 135 environment, as well as significant work history in major Part 145 MROs and aircraft manufacturers.'
                                }
                                favAircraft={'Cessna 310'}
                            />

                            {/*   ROEL ROGERIO   */}
                            <TeamCard
                                eventKey={'5'}
                                img={roelRogerio}
                                headerName={'Roel Rogerio'}
                                headerPosition={'Avionics Manager'}
                                name={'Roel Rogerio'}
                                position={'Avionics Manager, AET'}
                                certifications={'FAA: Repairman'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Garmin G500, G600, G1000 Line Maintenance, Raytheon Aircraft Maintenance Professionalism & Resource Management, Rockwell Collins Proline Maintenance'}
                                bio={
                                    'After earning his degree as an Electronics Technician at Texas A&M Extension Service in San Antonio, Roel joined the United States Army in 1988 where he served as an aircraft electronics technician maintaining avionics systems on aircraft such as the OV-1D and RC-12. Upon transitioning into the civilian world, Roel worked as Lead Avionics Technician for Raytheon (later called Hawker-Beechcraft) Services servicing Beechcraft, Hawker, Mitsubishi, Falcon, and various other aircraft for fourteen years. After Hawker-Beechcraft closed their San Antonio location, Roel worked at Sierra Industries, again serving as Avionics Crew Chief performing avionics repairs and installations on everything from Cessna 172s through Citations. When Sierra Industries was bought-out and subsequently closed, Roel found a new home at Bison Aviation where he serves as Lead Avionics Technician and Chief Installer.'
                                }
                                favAircraft={'Beechcraft King Air series'}
                            />

                            {/*   Jeffrey Rossell   */}
                            <TeamCard
                                eventKey={'6'}
                                img={jeffRossell}
                                headerName={'Jeffrey Rossell'}
                                headerPosition={'AET'}
                                name={'Jeffery Rossell'}
                                position={'Avionics Technician / CNC Operator'}
                                certifications={'FAA: Repairman; FCC: GROL w/ Radar'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Garmin G500, G600, G1000 Line Maintenance, Raytheon Aircraft Maintenance Professionalism & Resource Management, Rockwell Collins Proline Maintenance'}
                                bio={
                                    'Jeffrey began his avionics career in the United States Army as an AH-64 Armament / Electrical Systems Repairman and FARP Pad Chief.  After serving three tours of duty in Iraq and one in Korea, Jeffrey returned to civilian life and began his extensive career installing, repairing and troubleshooting avionics systems in general aviation and corporate aircraft.  Jeffrey also has significant experience maintaining and installing airborne EO/IR, FLIR, electronic countermeasure, sighting and tracking systems on military aircraft.  During his career, Jeffrey has gained a tremendous amount of experience working with avionics systems from almost every major manufacturer and continues to enjoy the challenges of integrating complex avionics equipment.\n' +
                                    '\n'
                                }
                                favAircraft={'King Air 350 & AH-64D Apache'}
                            />

                            {/*   CHAD BROOKS   */}
                            <TeamCard
                                eventKey={'7'}
                                img={chadBrooks}
                                headerName={'Chad Brooks'}
                                headerPosition={'AET'}
                                name={'Chad Brooks'}
                                position={''}
                                certifications={''}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Mooney M20 Series, Aircraft Wiring, Garmin G1000, GFC Series.'}
                                bio={
                                    'Chad began his avionics career with Mooney Aircraft in Kerrville, TX where he earned his certification as an aircraft assembler. He has more than twenty years of experience designing and fabricating wiring harnesses and structural components for avionics installations. In 2006 Chad went to work for Boeing performing electrical and avionics installations on the 737 and 787 series aircraft. He returned to Mooney four years later where he continued to work as the Lead Electrical and Avionics installer until the factory closed in late 2019.'
                                }
                                favAircraft={'Boeing 787 Dreamliner'}
                            />

                    </Row>

                    <Row className='px-auto d-flex justify-content-center'>
                            {/*  Cody Strack  */}
                            <TeamCard
                                eventKey={'8'}
                                img={codyStrack}
                                headerName={'Cody Strack'}
                                headerPosition={'A&P / IA'}
                                name={'Cody Strack'}
                                position={''}
                                certifications={'FAA: Mechanic - Airframe & Powerplant, Inspection Authorization'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Cirrus SR20 & SR22 Factory Certified, American Bonanza Society Bonanza & Baron Series, Cessna 300 & 400 Series Maintenance, Advanced Pilot Seminar'}
                                bio={
                                    'Cody left a career in the oil and gas industry to pursue his goal of becoming an aircraft mechanic. Cody\'s hard work and dedication lead him to successful completion of his A&P training at the Aviation School of Maintenance in Houston, and later his FAA Inspection Authorization. In addition to his A&P license, Cody has undertaken extensive type-specific training, including the full Cirrus Factory Maintenance certification course at the Cirrus Factory in Duluth, MN. Cody is an avid UAV pilot and enjoys building and flying his own creative designs.'
                                }
                                favAircraft={'Cessna Twins'}
                            />

                            {/*  Jerry Fitzgerald */}
                            <TeamCard
                                eventKey={'9'}
                                img={jerryFitzgerald}
                                headerName={'Jerry Fitzgerald'}
                                headerPosition={''}
                                name={'Jerry Fitzgerald'}
                                position={''}
                                certifications={'FAA: Private Pilot - ASEL, Instrument Airplane'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={''}
                                bio={
                                    'An avid pilot and aircraft owner for many years; Jerry joined the Bison Aviation Apprentice Program after retiring from a successful career as a petroleum engineer. His extensive knowledge of mechanical systems and airmanship allow him to bring a new perspective on aircraft maintenance to the Bison Aviation Team.'
                                }
                                favAircraft={'PA-24 Comanche'}
                            />

                            {/*  John Senecal */}
                            <TeamCard
                                eventKey={'10'}
                                img={johnSenecal}
                                headerName={'John Senecal'}
                                headerPosition={'A&P / IA'}
                                name={'John Senecal'}
                                position={''}
                                certifications={'FAA: Mechanic - Airframe & Powerplant / Inspection Authorization; Airline Transport Pilot - AMEL, EMB-145, BE40, BE300; Commercial Pilot - ASEL, ASES, Glider, Helicopter; Certified Flight Instructor - CFI, CFII, MEI, CFIG; Flight Engineer - Turbojets'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Bell 206'}
                                bio={
                                    ' John\'s aviation career began during his senior year of high school when he took a job working for a local charter company, assisting with maintenance on their fleet of Cessna 310s and Piper Aztecs. After high school, John enlisted in the United States Army where he served as an OH-58 helicopter mechanic and later as an Aviation Maintenance Warrant Officer. After leaving the Army, John began his career as an airline pilot. John holds a Bachelor\'s degree in Aviation Maintenance Management from Embry-Riddle University.'
                                }
                                favAircraft={'Beechcraft Bonanza'}
                            />

                            {/*  Matthew Gurniak */}
                            <TeamCard
                                eventKey={'11'}
                                img={matthewGurniak}
                                headerName={'Matthew Gurniak'}
                                headerPosition={''}
                                name={'Matthew Gurniak'}
                                position={''}
                                certifications={'FAA: Mechanic - Airframe & Powerplant; Private Pilot - ASEL'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Bell 206'}
                                bio={
                                    ' Matthew\'s interest in aviation began when he was in the third-grade when his class went on a field trip to a local FBO that provided rides to the students. That trip around the pattern sparked a passion for aviation and Matthew earned his Private Pilot\'s License at age 17. After high school, Matthew joined the United States Air Force where he served as an aircraft mechanic, maintaining aircraft such as the F-15, F-16, A-10, F-117, C-130, C-141, C-17 and C-5. After twenty six years of service, Matthew retired in the top 1% of the enlisted corps as a Chief Master Sergeant. Matthew continues to enjoy flying and is working on his instrument rating. He joined the Bison Aviation team so that he could enjoy the camaraderie of the general aviation community.  Matt is also the first candidate to matriculate through the Bison Aviation A&P Apprentice Program and earn his FAA A&P license!'
                                }
                                favAircraft={'Cessna 100 & 200 series'}
                            />

                    </Row>

                    {/*============   ROW FOUR  ==========*/}
                    <Row className='px-auto d-flex justify-content-center'>

                            {/*  Halibut */}
                            <TeamCard
                                eventKey={'12'}
                                img={halibut}
                                headerName={'Halibut'}
                                headerPosition={'Hangar Security Consultant'}
                                name={'Halibut'}
                                position={'Hangar Security Consultant'}
                                certifications={'Feline'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Wing Walking, Bird Chasing, Cat Napping.'}
                                bio={
                                    'Halibut adopted Bison Aviation in early 2018; since then she has "grown" into her position, maintaining a pest free environment for the rest of her Bison teammates.'
                                }
                                favAircraft={'The one she happens to be sleeping under.'}
                            />

                            {/*  Tuna */}
                            <TeamCard
                                eventKey={'13'}
                                img={tuna}
                                headerName={'Tuna'}
                                headerPosition={'Hangar Security Consultant'}
                                name={'Tuna'}
                                position={'Hangar Security Consultant'}
                                certifications={'Feline'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Caterwauling, Cat Napping, Glaring From High Vantage Points.'}
                                bio={
                                    ' Tuna has been a fixture at the 5C1 service center for as long as any of us can remember; she enjoys singing loudly in her native tongue and stealing Halibut\'s bed.'
                                }
                                favAircraft={'The one that isn\'t making noise.'}
                            />

                            {/*  MACKERERL */}
                            <TeamCard
                                eventKey={'14'}
                                img={mackerel}
                                headerName={'Mackerel'}
                                headerPosition={'Hangar Security Consultant'}
                                name={'Mackerel'}
                                position={'Hangar Security Consultant'}
                                certifications={'Feline'}
                                locations={'Boerne Stage Airfield - 5C1'}
                                specialTraining={'Caterwauling, Cat Napping, Gluttony.'}
                                bio={
                                    'Mackerel is the latest addition to the Bison Hangar Security Team. While quite adept at dispatching prey found lingering about the hangar, Mackerel strongly prefers to have his food delivered to him by one of his human subordinates and is not shy about asking.'
                                }
                                favAircraft={'Mackerel is far too busy napping to worry about airplanes.'}
                            />



                    </Row>


                </Jumbotron>
            {/*</Container>*/}

        </>
    )
};

export default TeamScreen