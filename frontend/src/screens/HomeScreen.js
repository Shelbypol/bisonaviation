import React, {useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Jumbotrons from "../components/Jumbotrons";
import CardFlippedLeft from "../components/CardFlippedLeft";
import CardFlippedRight from "../components/CardFlippedRight"
import aboutImg from '../images/jumbotron/hangar.png'
import panel from '../images/activeImg/panel-divider.jpeg'
import maintenance from '../images/activeImg/robin-cirrus-divider.png'
import AlertDismissible from "../components/AlertDismissible";
import CardOverlay from "../components/CardImgOverlay";


const HomeScreen = () => {
    const [show, setShow] = useState(false);

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons imgClass={'heroJumbo '}/>
            <Jumbotrons imgClass={'fadeJumbo '}/>

            <Row className='' style={{marginTop: '-40vh', marginBottom: '20vh' }} xs={12}>
                <Col className=''>
                    <AlertDismissible icon={<i className='fas fa-tools' style={{color: 'white'}}/>}
                                      title={<h5 className='' style={{color: 'white'}}>FAA Part 145 Repair Station </h5>}
                                      note={'Bison Aviation is a fully licensed FAA Part 145 Repair Station with Airframe, Instrument and Radio capabilities, an accreditation which is extremely difficult to attain and sets Bison Aviation apart from most other general aviation shops. Among other privileges, this licensure allows Bison Aviation to conduct testing and re-certification of aircraft static systems and transponder equipment. Bison Aviation is the holder of FAA Air Agency Certificate Number 85NR497D.'}/>
                </Col>
                <Col className='m-auto'>
                    <AlertDismissible icon={<i className='fas fa-tools' style={{color: 'white'}}/>}
                                      title={<h5 style={{color: 'white'}}>FAA Diamond Award Recipient </h5>}
                                      note={'Bison Aviation is a fully licensed FAA Part 145 Repair Station with Airframe, Instrument and Radio capabilities, an accreditation which is extremely difficult to attain and sets Bison Aviation apart from most other general aviation shops. Among other privileges, this licensure allows Bison Aviation to conduct testing and re-certification of aircraft static systems and transponder equipment. Bison Aviation is the holder of FAA Air Agency Certificate Number 85NR497D.'}/>
                </Col>
            </Row>


            <main className='mt-5 mx-5 '>
                <Container>
                    <CardFlippedLeft imgSrc={aboutImg}
                                     imgClassName={'img-fluid float-left imgCardAbout'}
                                     imgAlt={''}
                                     title={'Why choose Bison Aviation?'}
                                     titleStyle={{borderBottom: '3px solid darkred'}}
                                     subTitle={'AVIONICS & AIRCRAFT MAINTENANCE & FLIR'}
                                     text={'Bison Aviation is an FAA certificated Part 145 Repair Station serving the general aviation community. Founded by an avid general aviation pilot and fellow aircraft owner, we operate with the unique perspective of an organization which is intimately familiar not only with the world of professional aircraft maintenance, but also with the world of aircraft ownership and operation. We know that our customers rely on us to provide them with an honest and frank assessment of the condition of their aircraft, and we are honored to accept that charge.'}
                                     btnTitle={''}
                                     btnClassName={'none'}
                    />
                </Container>
            </main>

            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            {/*<div className='fadeCardRight'> </div>*/}

            <CardFlippedLeft imgSrc={panel}
                             imgClassName={'img-fluid float-left imgCardAvionics'}
                             titleStyle={''}
                             imgAlt={''}
                             title={'Avionics'}
                             subTitle={'who are we'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consectetur deleniti dicta dignissimos eligendi laborum, maiores neque, nesciunt nisi non odit perferendis quasi quidem quos recusandae soluta veniam voluptatum.'}
                             btnTitle={'Avionics'}
            />
            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            <div className='fadeCardLeft'> </div>






            <Row className='' style={{ marginBottom: '20vh' }} xs={12}>
                <Col className=''>
                    <CardOverlay />
                </Col>
                <Col className='m-auto'>
                    <CardOverlay />
                </Col>
                <Col className='m-auto'>
                    <CardOverlay />
                </Col>
            </Row>







            <CardFlippedRight imgSrc={maintenance}
                              imgAlt={''}
                              title={'Maintenance'}
                              subTitle={'who are we'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consectetur deleniti dicta dignissimos eligendi laborum, maiores neque, nesciunt nisi non odit perferendis quasi quidem quos recusandae soluta veniam voluptatum.'}
                              btnTitle={'test button'}
            />
            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            <div className='fadeCardRight'> </div>
        </>
    )
};

export default HomeScreen