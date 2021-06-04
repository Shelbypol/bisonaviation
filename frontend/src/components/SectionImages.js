import React from "react";
import {Card, Col, Row} from "react-bootstrap";


const SectionImages = ({img1, img2, img3}) => {

    const SectionImages = {
        height: '10vh'
    };

    return (
        <Row className='d-flex justify-content-around'>
                <Col md={4} xs={9} className='d-flex justify-content-center my-2'>
                    <Card className='border-0 bg-transparent' style={{SectionImages}}>
                        <Card.Img variant="top" src={img1} className='h-100 w-100'/>
                    </Card>
                </Col>

                <Col md={4} xs={9} className='d-flex justify-content-center my-2'>
                    <Card className='border-0 bg-transparent' style={{SectionImages}}>
                        <Card.Img variant="top" src={img2} className='h-100 w-100'/>
                    </Card>
                </Col>

                <Col md={4} xs={9} className='d-flex justify-content-center my-2'>
                    <Card className='border-0 bg-transparent' style={{SectionImages}}>
                        <Card.Img variant="top" src={img3} className='h-100 w-100'/>
                    </Card>
                </Col>
        </Row>

    )
};
export default SectionImages;
