import React from "react";
import '../../style/1/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

const Services = ({title1, title2, title3, title4, showTag}) => {
    return (
        <Jumbotron
            className='m-0 p-0 d-flex align-items-center bg-white justify-content-center SummaryNavBg global_silver-chalice-bg'
            fluid>
            <Row className='text-center'>
                <Col xs={12} className='mb-5'>
                    <h1>Services</h1>
                    {/*<div className='Services_lines-img '> </div>*/}
                </Col>
                <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                    {/*<Button className='p-0 rounded-left '>*/}
                    {/*    <img src={img1} alt="" className='h-100 w-100'/>*/}
                    {/*</Button>*/}
                    <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                        {showTag ?
                            <>
                                <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>NEW!</p>
                                <p className=' summary_nav_text global_accentFont'>{title1}</p>
                            </>
                            : (
                                <p className=' summary_nav_text global_accentFont'>{title1}</p>
                            )
                        }
                    </Button>
                </Col>

                <Col lg={3} xs={6}
                     className='d-flex align-items-center justify-content-center mb-3 summary_nav_hoverTitle'>
                    {/*<Button className='p-0 rounded-left '>*/}
                    {/*    <img src={img2} alt="" className='h-100 w-100'/>*/}
                    {/*</Button>*/}
                    <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                        <p className='summary_nav_text global_accentFont'>{title2}</p>
                    </Button>
                </Col>
                <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                    {/*<Button className='p-0 rounded-left '>*/}
                    {/*    <img src={img3} alt="" className='h-100 w-100'/>*/}
                    {/*</Button>*/}
                    <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                        <p className='summary_nav_text global_accentFont'>{title3}</p>
                    </Button>
                </Col>

                <Col lg={3} xs={6} className='d-flex justify-content-center mb-3 summary_nav_hoverTitle'>
                    {/*<Button className='p-0 rounded-left '>*/}
                    {/*    <img src={img4} alt="" className='h-100 w-100'/>*/}
                    {/*</Button>*/}
                    <Button className='summary_nav_overlay w-75 h-50 mx-auto'>
                        <p className='summary_nav_text global_accentFont'>{title4}</p>
                    </Button>
                </Col>
            </Row>

            {/*</Col>*/}
        </Jumbotron>
    )
};

export default Services