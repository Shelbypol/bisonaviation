import React from "react";
import Fade from 'react-reveal/Fade';
import {Card, Col, Row, Jumbotron} from "react-bootstrap";
// import product from '../images/bg-graphics/home-screen/GTN625_HR_820.jpg'
// import product from '../images/bg-graphics/avionics/GTN625_HR_820.jpg'
import AvionicsProducts from "./AvionicsProducts";
import '../style/2/GarminHomeFlag.scss'
import ProductCarousel from "./ProductCarousel";


const Garmin = () => {


    return (

        // <Jumbotron className=' m-0 pt-4 pb-0 px-0 bg-transparent' fluid>

            <Row className='d-flex justify-content-around m-0 p-0 Garmin_card-row border'>

                <Col xs={5} className='bg-transparent d-flex justify-content-center'>
                    <Fade duration={1500} right>
                        {/*<Row>*/}
                        {/*    <Col className='m-0 p-0'>*/}
                        {/*<Card className='border-0 bg-transparent'>*/}
                        <Card style={{width: '18rem'}} className='border-0 bg-transparent'>
                            <Card.Body>
                                <ProductCarousel/>
                                {/*<Card.Title className='global_blood-red'>5% OFF Tagged Products</Card.Title>*/}
                                {/*<Card.Text>*/}
                                {/*    Any products marked with a red flag receive a 5% discount!*/}
                                {/*</Card.Text>*/}
                                {/*<Card.Subtitle className="mb-2 text-muted"> PROMO ENDS March 1st, 2021</Card.Subtitle>*/}
                                {/*<Card.Link href="#">Browse Products</Card.Link>*/}
                            </Card.Body>
                        </Card>
                        {/*</Col>*/}
                        {/*<Col className=''>*/}
                        {/*    <Card style={{width: '18.2rem'}} className='border-0 bg-transparent'>*/}
                        {/*        /!*<Card.Subtitle className='Garmin_flag red global_accentFont mt-n1 mb-0 mx-0'>sale</Card.Subtitle>*!/*/}
                        {/*        /!*<Card.Img variant="top" src=/>*!/*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}

                        {/*</Row>*/}
                    </Fade>
                </Col>


                <Col xs={7} className=''>
                    <AvionicsProducts/>
                </Col>




            </Row>


        // </Jumbotron>

    )
};
export default Garmin