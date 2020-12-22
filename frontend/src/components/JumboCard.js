import React from 'react';
import {Row, Col, Container} from "react-bootstrap";


const JumboCard = ({rowClassName, rowStyle, lgRow, mdRow, xsRow, lgImgCol, mdImgCol, xsImgCol, imgSrc, imgClassName,lgTextCol, mdTextCol, xsTextCol,lgTitleCol, mdTitleCol, xsTitleCol, lgIconTextCol, mdIconTextCol, xsIconTextCol, iconSymbol, lgIconCol, mdIconCol, xsIconCol, lgSubtextCol, mdSubtextCol, xsSubtextCol, lgBlockTextCol, mdBlockTextCol, xsBlockTextCol, title, subText, paragraph}) => {
    return (

            <Row className={rowClassName} style={rowStyle} lg={lgRow} md={mdRow} xs={xsRow}>
                <Col lg={lgImgCol} md={mdImgCol} xs={xsImgCol}>
                    <img src={imgSrc} alt="" className={imgClassName} />
                </Col>
                <Col lg={lgTextCol} md={mdTextCol} xs={xsTextCol}>
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
                        <Col lg={lgBlockTextCol} md={mdBlockTextCol} xs={xsBlockTextCol}>
                            <p>{paragraph}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
};

export default JumboCard;