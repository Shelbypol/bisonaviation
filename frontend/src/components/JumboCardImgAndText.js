import React from 'react';
import {Row, Col, Container} from "react-bootstrap";



const JumboCardImgAndText = ({
                                 jumboClass,
                                 jumboStyle,
                                 rowClassName,
                                 rowStyle,
                                 lgRow,
                                 mdRow,
                                 xsRow,
                                 lgImgCol,
                                 mdImgCol,
                                 xsImgCol,
                                 imgSrc,
                                 imgClassName,
                                 lgTextCol,
                                 mdTextCol,
                                 xsTextCol,
                                 lgTitleCol,
                                 mdTitleCol,
                                 xsTitleCol,
                                 lgIconTextCol,
                                 mdIconTextCol,
                                 xsIconTextCol,
                                 iconSymbol,
                                 lgIconCol,
                                 mdIconCol,
                                 xsIconCol,
                                 lgSubtextCol,
                                 mdSubtextCol,
                                 xsSubtextCol,
                                 lgBlockTextCol,
                                 mdBlockTextCol,
                                 xsBlockTextCol,
                                 title,
                                 subText,
                                 paragraph}) => {
    return (
        // <Jumbotron className={jumboClass} style={jumboStyle} fluid>
            <Row className={rowClassName} style={rowStyle} lg={lgRow} md={mdRow} xs={xsRow}>
                <Col lg={lgImgCol} md={mdImgCol} xs={xsImgCol} className='animations_img-hover-zoom animations_img-hover-zoom--slowmo'>
                    <img src={imgSrc} alt="" className={imgClassName} />
                </Col>
                <Col lg={lgTextCol} md={mdTextCol} xs={xsTextCol} >
                    <Row>
                        <Col lg={lgTitleCol} md={mdTitleCol} xs={xsTitleCol}>
                            <h1>{title}</h1>
                        </Col>
                        <Col lg={lgIconTextCol} md={mdIconTextCol} xs={xsIconTextCol}>
                            <Row>
                                <Col lg={lgIconCol} md={mdIconCol} xs={xsIconCol}>
                                    <i className={iconSymbol} style={{fontSize: '1.8em'}}> </i>
                                </Col>
                                <Col lg={lgSubtextCol} md={mdSubtextCol} xs={xsSubtextCol}>
                                    <p className='text-muted mt-1 accentFont'>{subText}</p>

                                </Col>
                            </Row>
                        </Col>
                        <Col className='bg-white' lg={lgBlockTextCol} md={mdBlockTextCol} xs={xsBlockTextCol}>
                            <p>{paragraph}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        // </Jumbotron>
    );
};

export default JumboCardImgAndText;
