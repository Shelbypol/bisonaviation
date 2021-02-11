import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import '../../style/1/HomeHero.css'
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

const HomeHero = () => {
    return (
        <Jumbotron className='HomeHero_bg-img m-0 p-0 d-flex align-items-center' fluid>
            <Row className='HomeHero_text-box'>
                <Col xs={12} className=' d-flex justify-content-start align-content-center'>
                    <h1 className='HomeHero_title text-center ml-n2'>
                        <span className='HomeHero_letter global_blood-red'>B</span>ison
                        &nbsp;
                        <span className='HomeHero_letter global_blood-red mr-n2'>A</span>viation

                    </h1>
                </Col>
                <Col xs={12} className='d-flex justify-content-start'>
                    <h3 className='text-center m-0 p-0'>we work hard on the ground</h3>
                </Col>
                <Col xs={12} className='d-flex justify-content-start'>
                    <h3 className='text-center m-0 p-0'>so you can
                        <Fade duration={5000}>
                            <div className='d-inline'>
                                <span
                                    className='global_blood-red font-weight-bolder HomeHero_span'><i> fly with confidence</i>
                                </span>
                            </div>
                        </Fade>
                    </h3>
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default HomeHero;