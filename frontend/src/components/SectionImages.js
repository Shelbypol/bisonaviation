import React from "react";
import {Col, Image} from "react-bootstrap";


const SectionImages = ({img1, img2, img3}) => {

    const colHeight = {
        height: '25vh'
    };

    return (
        <>
            <Col md={4} xs={11} className='d-flex justify-content-center my-2 pl-md-0' style={colHeight}>
                <Image src={img1} className='h-100 w-100' fluid/>
            </Col>

            <Col md={4} xs={11} className='d-flex justify-content-center my-2 mx-0' style={colHeight}>
                <Image variant="top" src={img2} className='h-100 w-100' fluid/>
            </Col>

            <Col md={4} xs={11} className='d-flex justify-content-center my-2 pr-md-0' style={colHeight}>
                <Image variant="top" src={img3} className='h-100 w-100' fluid/>
            </Col>
        </>

    )
};
export default SectionImages;
