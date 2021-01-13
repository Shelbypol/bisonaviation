import React from "react";
import '../style/SummaryNav.css'
import {Button, Col, Row} from "react-bootstrap";

const SummaryNav = ({title1, title2, title3, title4, img1, img2, img3, img4, showTag}) => {
    return (
        <Row>
            <Col xs={12}>
                <h1>Services</h1>
            </Col>
            <Col xs={12} >
                <Row>
                    <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                        <Button className='p-0 rounded-left '>
                            <img src={img1} alt="" className='h-100 w-100'/>
                        </Button>
                        <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                            {showTag ?
                                <>
                                    <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                                    <p className='summary_nav_text global_accentFont'>{title1}</p>
                                </>
                                : (
                                    <p className='summary_nav_text global_accentFont'>{title1}</p>
                                )
                            }
                        </Button>
                    </Col>

                    <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                        <Button className='p-0 rounded-left '>
                            <img src={img2} alt="" className='h-100 w-100'/>
                        </Button>
                        <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                            <p className='summary_nav_text global_accentFont'>{title2}</p>
                        </Button>
                    </Col>

                    <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                        <Button className='p-0 rounded-left '>
                            <img src={img3} alt="" className='h-100 w-100'/>
                        </Button>
                        <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                            <p className='summary_nav_text global_accentFont'>{title3}</p>
                        </Button>
                    </Col>

                    <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                        <Button className='p-0 rounded-left '>
                            <img src={img4} alt="" className='h-100 w-100'/>
                        </Button>
                        <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                            <p className='summary_nav_text global_accentFont'>{title4}</p>
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default SummaryNav