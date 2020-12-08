import React, {useState} from 'react'
import {Accordion, Card, Button, Row, Col} from 'react-bootstrap';
import AlertDismissible from '../components/AlertDismissible';


const AvionicsScreen = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>Avionics Services</h1>
            <p>Bison Aviation's avionics department offers cutting edge aircraft and radio system services.</p>
            <Row>
                {/*<Accordion defaultActiveKey="0">*/}
                {/*    <Col md={6}>*/}
                {/*        <Card>*/}
                {/*            <Col xs={1}>*/}
                {/*                <Card.Header className='sm'>*/}
                {/*                    <Accordion.Toggle as={Button} variant="link" eventKey="0">*/}
                {/*                        <i className="fas fa-plane"> </i>*/}
                {/*                    </Accordion.Toggle>*/}
                {/*                </Card.Header>*/}
                {/*            </Col>*/}
                {/*            <Accordion.Collapse eventKey="0">*/}
                {/*                <Card.Body>*/}
                {/*                    From transponder upgrades to glass panel retrofits, the Bison Aviation avionics*/}
                {/*                    team is ready to take on your next avionics project.*/}
                {/*                </Card.Body>*/}
                {/*            </Accordion.Collapse>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}

                {/*</Accordion>*/}
                {/*<Col xs={6}>*/}
                {/*    <AlertDismissible icon={<i className='fas fa-bolt' style={{color: "white"}}/>}*/}
                {/*                      note={'From transponder' +*/}
                {/*                      ' upgrades to glass panel retrofits, the Bison Aviation avionics team is ready to take on your next ' +*/}
                {/*                      'avionics project.'}/>*/}
                {/*</Col>*/}
            </Row>
            <Row>
                <Col xs={6}>
                    <AlertDismissible icon={<i className='fas fa-bolt' style={{color: 'white'}} />}
                                      title={'Avionics Installations'}
                                      note={'From transponder' +
                                      ' upgrades to glass panel retrofits, the Bison Aviation avionics team is ready to take on your next ' +
                                      'avionics project.'}/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <AlertDismissible icon={<i className='fas fa-bug' style={{color: 'white'}} />}
                                      title={'Avionics Repair'}
                                      note={'Already have a great panel, but things aren\'t working the way they should?' +
                                      ' Stop flying "partial panel" and let the Bison Aviation avionics team bring your ' +
                                      'equipment back to life.'}/>
                </Col>
            </Row>
        </>
    )
};

export default AvionicsScreen
