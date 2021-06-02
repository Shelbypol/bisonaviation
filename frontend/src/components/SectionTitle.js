import React from "react";
import {Col, Row} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const SectionTitle = ({titleText}) => {

        const title = {
            textAlign: "center",
            fontSize: "5vh"
        };

        const rowHeight = {
            height: "45vh"
        };


    return (

        <Row style={rowHeight} className='
                                d-flex
                                align-content-center'>
            <Col md={12} xs={12}
                 className='
                 p-0
                 mx-0
                 mb-sm-5
                 mb-md-n5
                 global_goldenrod-border-right
                 global_goldenrod-border-left
                 global_black-bg'>
                <p style={title} className='global_white pt-3'>
                    <Fade top>
                       {titleText}
                    </Fade>
                </p>
            </Col>
        </Row>

    )
};
export default SectionTitle;

