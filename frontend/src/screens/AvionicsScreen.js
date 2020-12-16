import React, {useState} from 'react'
import {Col} from 'react-bootstrap';
import AlertDismissible from '../components/AlertDismissible';


const AvionicsScreen = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>Avionics Services</h1>
            <p>Bison Aviation's avionics department offers cutting edge aircraft and radio system services.</p>

            <div className='d-inline-flex col-sm-12'>
                <Col className='col-sm-6'>

                    <Col className='my-4 pb-4'>
                        <AlertDismissible icon={<i className='fas fa-bolt' style={{color: 'white'}}/>}
                                          title={'Avionics Installations'}
                                          note={'From transponder' +
                                          ' upgrades to glass panel retrofits, the Bison Aviation avionics team is ready to take on your next ' +
                                          'avionics project.'}/>
                    </Col>

                    <Col className='my-4 pb-4'>
                        <AlertDismissible icon={<i className='fas fa-bug' style={{color: 'white'}}/>}
                                          title={'Avionics Repair'}
                                          note={'Already have a great panel, but things aren\'t working the way they should?' +
                                          ' Stop flying "partial panel" and let the Bison Aviation avionics team bring your ' +
                                          'equipment back to life.'}/>
                    </Col>

                    <Col className='my-4 pb-4'>
                        <AlertDismissible icon={<i className='far fa-check-square' style={{color: 'white'}}/>}
                                          title={'Biennial 91.411 & 91.413'}
                                          title2={'Re-certification'}
                                          note={'It happens like clockwork - every 24 months your static system and ' +
                                          'transponders require testing and re-certification. The Bison Aviation avionics ' +
                                          'team has the equipment and qualifications to test and re-certify the systems in ' +
                                          'your aircraft.'}/>
                    </Col>

                </Col>

                <Col className='col-sm-6'>

                    <Col className='my-4 pb-4'>
                        <AlertDismissible icon={<i className='fas fa-bullseye' style={{color: 'white'}}/>}
                                          title={'Avionics Installations'}
                                          note={'From transponder' +
                                          ' upgrades to glass panel retrofits, the Bison Aviation avionics team is ready to take on your next ' +
                                          'avionics project.'}/>
                    </Col>

                    <Col className='my-4 pb-4'>
                        <AlertDismissible icon={<i className='fas fa-cogs' style={{color: 'white'}}/>}
                                          title={'Avionics Repair'}
                                          note={'Already have a great panel, but things aren\'t working the way they should?' +
                                          ' Stop flying "partial panel" and let the Bison Aviation avionics team bring your ' +
                                          'equipment back to life.'}/>
                    </Col>

                    <Col className='my-4 pb-4'>
                        <AlertDismissible icon={<i className='fas fa-tachometer-alt' style={{color: 'white'}}/>}
                                          title={'Biennial 91.411 & 91.413'}
                                          title2={'Re-certification'}
                                          note={'It happens like clockwork - every 24 months your static system and ' +
                                          'transponders require testing and re-certification. The Bison Aviation avionics ' +
                                          'team has the equipment and qualifications to test and re-certify the systems in ' +
                                          'your aircraft.'}/>
                    </Col>

                </Col>
            </div>

        </>
    )
};

export default AvionicsScreen
