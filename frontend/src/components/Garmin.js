import React from "react";
import Fade from 'react-reveal/Fade';
import { Col, Row} from "react-bootstrap";
import AvionicsProducts from "./AvionicsProducts";
import '../style/2/GarminHomeFlag.scss'
import ProductCarousel from "./ProductCarousel";


const Garmin = () => {


    return (
            <Row className='d-flex justify-content-center Garmin_card-row m-0 p-3'>
                <Col xs={8} className='d-flex align-content-center justify-content-end m-0'>
                    <AvionicsProducts/>
                </Col>
                <Col xs={4} className='bg-white d-flex justify-content-center m-0'>
                    <Fade duration={1500} right>
                        {/*<Card style={{width: '18rem'}} className='border-0 bg-white'>*/}
                        {/*    <Card.Body>*/}
                                <ProductCarousel/>
                            {/*</Card.Body>*/}
                        {/*</Card>*/}
                    </Fade>
                </Col>


            </Row>

    )
};
export default Garmin