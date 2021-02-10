import {Col, Container, Row} from "react-bootstrap";
import '../../style/1/Avionics.css';
import JumboCardImgs from "../JumboCardImgs";
import panel from "../../images/avionics/panal-avionics.JPG";
import tayseerAvionics from "../../images/avionics/tayseer-avionics-1500.png";
import cncMachine from "../../images/avionics/cnc-machine.png";
import panel2 from "../../images/avionics/20190218_155138 (1).jpg";
import React from "react";
import {Jumbotron} from "reactstrap";

const Avionics = () => {


    return (
        <Jumbotron className='global_eerie-black-bg global_light-grey m-0 p-0' fluid>
            <Row xs={12}>
                <Col xs={12} className='d-flex justify-content-center Avionics_title'>
                    <h1 className='global_light-grey'><strong style={{fontSize:'30px'}} className='global_blood-red-bg px-2 mr-n4'>A</strong> vionics</h1>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mb-3 text-center mx-5'>
                    <p className='global_light-grey Avionics_text'>
                        Bison Aviation is proud to have a full-time avionics team in-house. While many shops
                        “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as
                        a part of our workforce. Our capabilities range from basic troubleshooting to
                        complete panel installations and by having all services in-house (including CNC panel
                        fabrication, laser engraving, and 3D printing) we are able to save time and reduce costs
                        for our customers.
                    </p>
                </Col>
            </Row>

            <div className='mx-5'>
                <JumboCardImgs imgSrc1={panel}
                               imgSrc2={tayseerAvionics}
                               imgSrc3={cncMachine}
                               imgSrc4={panel2}>
                </JumboCardImgs>
            </div>

            {/*   =============  AVIONICS ICONS  =============   */}
            <Row xs={12} className='mt-5 mb-3'>
                <Col className='d-flex justify-content-center '>
                    <i className='fas fa-bolt global_cultured Avionics_icon'> </i>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <i className='fas fa-bug global_cultured Avionics_icon'> </i>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <i className='far fa-check-square global_cultured Avionics_icon'> </i>
                </Col>
            </Row>
            <Row xs={12}>
                <Col className='d-flex justify-content-center text-center ml-5'>
                    <p className='text-muted'>AVIONICS INSTALLATIONS</p>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in rem. Asperiores commodi dicta, fugit iusto magnam mollitia pariatur quibusdam quidem quo recusandae sed vitae?</p>*/}
                </Col>
                <Col className='d-flex justify-content-center text-center'>
                    <p className='text-muted'>AVIONICS REPAIR</p>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in rem. Asperiores commodi dicta, fugit iusto magnam mollitia pariatur quibusdam quidem quo recusandae sed vitae?</p>*/}

                </Col>
                <Col className='d-flex justify-content-center text-center mr-5'>
                    <p className='text-muted'>RE-CERTIFICATION</p>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in rem. Asperiores commodi dicta, fugit iusto magnam mollitia pariatur quibusdam quidem quo recusandae sed vitae?</p>*/}

                </Col>
            </Row>
        </Jumbotron>

    )
};

export default Avionics