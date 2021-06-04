import React from 'react';
import {Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import {Button, Card} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Fade from "react-reveal/Fade";
import TenItemList from "../TenItemList";
import './HomeFlir.css';
import img2 from "../Maintenance/images/maintenance5.png";
import img3 from "../Maintenance/images/maintenance4.png";
import flir1 from '../Flir/images/flirinventory.png'
import flir2 from '../Flir/images/acessories.png'
import flir3 from '../Flir/images/flir-multiple.jpg'
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";


const HomeFlir = () => {
    return (

        <>
            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='HomeFlir_bg-img p-0 mt-5 mb-0 mx-0'>

                    <SectionTitle titleText={'EO / IR FLIR'}/>

                    <Row className='pb-0 px-2 pt-md-3 pt-sm-0 mx-n1 mb-n1 my-0 global_black-bg d-flex justify-content-between'>

                        <TenItemList
                            lg={4}
                            md={6}
                            xs={12}
                            link={`/flir`}
                            item1={'World\'s largest inventory'}
                            item2={'In-house sensor service team'}
                            borderLeftTrue={true}
                        />

                        <SectionText
                            lg={8}
                            md={6}
                            xs={12}
                            headerText={'You depend on your aircraft to carry you and your passengers safely.'}
                            paragraphText={' Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century!'}
                            btn={'LEARN MORE'}
                        />

                    </Row>
                </Col>

                <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mx-auto '>
                    <Card className=' border-0 bg-transparent rounded'>
                        <Card.Img variant="top" src={flir2} className=' '/>
                    </Card>
                </Col>

                <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mx-auto d-none d-md-block'>
                    <Card className='border-0 bg-transparent rounded'>
                        <Card.Img variant="top" src={flir1} className=''/>
                    </Card>
                </Col>


                <Col md={4} xs={9} className='d-flex justify-content-center mt-2 mb-5 mx-auto d-none d-md-block'>
                    <Card className=' border-0 bg-transparent rounded'>
                        <Card.Img variant="top" src={flir3} className=' '/>
                    </Card>
                </Col>

            </Row>

        </>

    )
};

export default HomeFlir