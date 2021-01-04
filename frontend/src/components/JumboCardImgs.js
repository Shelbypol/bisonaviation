import React from 'react';
import {Row, Col} from "react-bootstrap";


const JumboCardImgs = ({ imgSrc1, imgSrc2, imgSrc3, imgSrc4}) => {
    return (
        <>
            <Row xs={12} className='d-flex justify-content-center'>
                <Col xs={3} className='d-md'>
                    <img src={imgSrc1} alt="" className='h-100 w-100'/>
                </Col>
                <Col xs={3} className="d-none d-md-block">
                    <img src={imgSrc2} alt="" className='h-100 w-100'/>
                </Col>
                <Col xs={3} className="d-none d-md-block">
                    <img src={imgSrc3} alt="" className='h-100 w-100'/>
                </Col>
                <Col xs={3} >
                    <img src={imgSrc4} alt="" className='h-100 w-100'/>
                </Col>
            </Row>
        </>
    );
};

export default JumboCardImgs;