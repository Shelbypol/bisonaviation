import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import {LinkContainer} from "react-router-bootstrap";

const SectionText = ({lg, md, xs, headerText, paragraphText, btn}) => {


    return (
            <Col lg={lg} md={md} xs={xs} className='mx-0 mt-auto'>
                <Col xs={12} className='mb-2 pr-4 d-none d-md-block'>
                    <Zoom>
                        <h1 className='global_white'>{headerText}</h1>
                    </Zoom>
                </Col>

                <Col xs={12} className='global_cursor mt-4 text-center text-md-left'>
                    <Zoom>
                        <p className='pr-3 global_white'>
                            {paragraphText}
                        </p>
                    </Zoom>
                </Col>

                <Col xs={10} md={12} className='global_cursor mb-5 py-2 mx-auto d-flex justify-content-center global_dark-bg-btn'>
                    <LinkContainer to={`/avionics`}>
                        <Button className=' text-center'>
                            {btn}
                        </Button>
                    </LinkContainer>
                </Col>
            </Col>
    )
};
export default SectionText;
