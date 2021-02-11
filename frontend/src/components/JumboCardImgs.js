import React from 'react';
import {Row, Col} from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';


const JumboCardImgs = ({imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5}) => {
    return (
        <>

                <Col xs={12} className='d-flex justify-content-center mb-3'>
                    <Zoom duration={1000}>
                        <img src={imgSrc1} alt="" className='rounded h-50 w-50'/>
                    </Zoom>
                </Col>
                <Col xs={12} className='d-flex justify-content-center mb-3'>
                    <Zoom duration={2000}>
                        <img src={imgSrc2} alt="" className='rounded h-50 w-50'/>
                    </Zoom>
                </Col>
                <Col xs={12} className='d-flex justify-content-center mb-3'>
                    <Zoom duration={3000}>
                        <img src={imgSrc3} alt="" className='rounded h-50 w-50'/>
                    </Zoom>
                </Col>
                <Col xs={12}
                     className='d-flex justify-content-center mb-3'>
                    <Zoom duration={4000}>
                        <img src={imgSrc4} alt="" className='rounded h-50 w-50'/>
                    </Zoom>
                </Col>
            <Col xs={12}
                 className='d-flex justify-content-center mb-3'>
                <Zoom duration={4000}>
                    <img src={imgSrc5} alt="" className='rounded h-50 w-50'/>
                </Zoom>
            </Col>

        </>
    );
};

export default JumboCardImgs;