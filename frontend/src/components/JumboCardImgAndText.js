import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import panel from "../images/avionics/panel-divider.jpeg";
import tayseerAvionics from "../images/avionics/tayseer-1.jpg";
import cncMachine from "../images/avionics/cnc-machine-divider.png";


const JumboCardImgAndText = ({rowClassName, rowStyle, lgRow, mdRow, xsRow, lgImgCol, mdImgCol, xsImgCol, imgSrc, imgClassName,lgTextCol, mdTextCol, xsTextCol,lgTitleCol, mdTitleCol, xsTitleCol, lgIconTextCol, mdIconTextCol, xsIconTextCol, iconSymbol, lgIconCol, mdIconCol, xsIconCol, lgSubtextCol, mdSubtextCol, xsSubtextCol, lgBlockTextCol, mdBlockTextCol, xsBlockTextCol, title, subText, paragraph}) => {
    return (

            <Row className={rowClassName} style={rowStyle} lg={lgRow} md={mdRow} xs={xsRow}>
                <Col lg={lgImgCol} md={mdImgCol} xs={xsImgCol} className='img-hover-zoom img-hover-zoom--slowmo'>
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
                        <Col lg={lgBlockTextCol} md={mdBlockTextCol} xs={xsBlockTextCol}>
                            <p>{paragraph}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
};

export default JumboCardImgAndText;

// AVIONICS SCREEN INFO
//
// <Container style={{marginTop: '20vh'}}>
//     <JumboCardImgAndText
//         // lgRow={}
//         // mdRow={}
//         xsRow={12}
//         lgImgCol={4}
//         // mdImgCol={}
//         xsImgCol={{order: 'last'}}
//         imgSrc={panel}
//         imgClassName={'h-75 w-75 mt-5'}
//         lgTextCol={8}
//         // mdTextCol={}
//         xsTextCol={12}
//         lgTitleCol={12}
//         // mdTitleCol={}
//         // xsTitleCol={}
//         // lgIconTextCol={}
//         mdIconTextCol={12}
//         // xsIconTextCol={}
//         iconSymbol={'fal fa-tachometer-alt-slow bisonRedTxt'}
//         lgIconCol={1}
//         // mdIconCol={}
//         // xsIconCol={}
//         lgSubtextCol={11}
//         // mdSubtextCol={}
//         // xsSubtextCol={}
//         // lgBlockTextCol={}
//         mdBlockTextCol={12}
//         // xsBlockTextCol={}
//         subText={'full service avionics staff'}
//         paragraph={'Bison Aviation is proud to have a full-time avionics team in-house. While many shops “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as a part of our workforce. Our capabilities range from basic troubleshooting to complete panel installations and by having all services in-house (including CNC panel fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs for our customers.'}
//
//     />
//     <JumboCardImgAndText
//         // lgRow={}
//         // mdRow={}
//         xsRow={12}
//         lgImgCol={4}
//         // mdImgCol={}
//         xsImgCol={12}
//         imgSrc={tayseerAvionics}
//         imgClassName={'h-75 w-75 mt-5'}
//         lgTextCol={8}
//         // mdTextCol={}
//         xsTextCol={12}
//         lgTitleCol={12}
//         // mdTitleCol={}
//         // xsTitleCol={}
//         // lgIconTextCol={}
//         mdIconTextCol={12}
//         // xsIconTextCol={}
//         iconSymbol={'fal fa-tachometer-alt-fast bisonRedTxt'}
//         lgIconCol={1}
//         // mdIconCol={}
//         // xsIconCol={}
//         lgSubtextCol={11}
//         // mdSubtextCol={}
//         // xsSubtextCol={}
//         // lgBlockTextCol={}
//         // xsBlockTextCol={}
//         mdBlockTextCol={12}
//         subText={'installers for virtually all major avionics manufacturers'}
//         paragraph={'Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century! We are installers for virtually all major avionics manufacturers, so we can build you the very best panel for your mission and budget. Cutting-edge technology, such as CNC machining, laser engraving, and 3D printing, put our installations in a class of their own!'}
//     />
//
//
//     <JumboCardImgAndText
//         // lgRow={}
//         // mdRow={}
//         xsRow={12}
//         lgImgCol={4}
//         // mdImgCol={}
//         xsImgCol={{order: 'last'}}
//         imgSrc={cncMachine}
//         imgClassName={'h-75 w-75 mt-5'}
//         lgTextCol={8}
//         // mdTextCol={}
//         xsTextCol={12}
//         lgTitleCol={12}
//         // mdTitleCol={}
//         // xsTitleCol={}
//         // lgIconTextCol={}
//         mdIconTextCol={12}
//         // xsIconTextCol={}
//         iconSymbol={'fal fa-tachometer-alt-slow bisonRedTxt'}
//         lgIconCol={1}
//         // mdIconCol={}
//         // xsIconCol={}
//         lgSubtextCol={11}
//         // mdSubtextCol={}
//         // xsSubtextCol={}
//         // lgBlockTextCol={}
//         mdBlockTextCol={12}
//         // xsBlockTextCol={}
//         subText={'CNC machining, laser engraving, 3D printing and more'}
//         paragraph={'When avionics systems stop working correctly, you need a team with the tools and experience necessary to efficiently diagnose the issues and repair the system. Whether the fault is a data bus communications error on a new glass panel PFD or a weak transmitter on a legacy com radio, Bison Aviation\'s skilled technicians can locate the fault and return those systems to operational condition quickly!'}
//     />
//
// </Container>