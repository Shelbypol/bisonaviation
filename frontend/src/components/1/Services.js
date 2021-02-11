import React from "react";
import '../../style/1/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

const Services = ({title1, title2, title3, title4, showTag}) => {
    return (

        <Jumbotron className='m-0 p-0 bg-white Services_NavBg global_silver-chalice-bg d-flex align-content-stretch'
            fluid>

                <Col xs={6} className='border d-flex align-items-center justify-content-center'>
                    <h1 className='global_title'>Services</h1>
                </Col>

                <Row xs={6} className='border d-flex align-items-end align-content-center'>
                    <Col xs={12} className='mb-3 Services_nav_hoverTitle d-flex justify-content-center'>
                        <Button className='Services_nav_overlay'>
                            {showTag ?
                                <>
                                    <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                                    <p className='Services_nav_text global_accentFont'>{title1}</p>
                                </>
                                : (
                                    <p className='Services_nav_text global_accentFont'>{title1}</p>
                                )
                            }
                        </Button>
                    </Col>

                    <Col xs={12} className='Services_nav_hoverTitle mb-3 d-flex justify-content-center'>
                        <Button className='Services_nav_overlay'>
                            <p className='Services_nav_text global_accentFont'>{title2}</p>
                        </Button>
                    </Col>

                    <Col xs={12} className='Services_nav_hoverTitle mb-3 d-flex justify-content-center'>
                        <Button className='Services_nav_overlay '>
                            <p className='Services_nav_text global_accentFont'>{title3}</p>
                        </Button>
                    </Col>

                    <Col xs={12} className='Services_nav_hoverTitle mb-3 d-flex justify-content-center'>
                        <Button className='Services_nav_overlay'>
                            <p className='Services_nav_text global_accentFont'>{title4}</p>
                        </Button>
                    </Col>

                </Row>

        </Jumbotron>

    )
};

export default Services