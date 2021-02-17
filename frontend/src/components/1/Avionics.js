import {Button, Col, Container, Row} from "react-bootstrap";
import '../../style/1/Avionics.css';
import React from "react";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AvionicsProducts from "./AvionicsProducts";
import ProductCarousel from "../ProductCarousel";
import {LinkContainer} from "react-router-bootstrap";
import ImgRow from "./ImgRow";


const Avionics = () => {

    return (
        <>
            <Jumbotron id='home-avionics' className='global_light-grey-bg global_rich-black p-0 m-0'
                       fluid>

                <Row className='d-flex align-items-center pb-5 pl-5'>

                    <Col xs={6}>
                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Panel Upgrades</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>

                                        {/*NESTED LIST*/}
                                        <Row className=''>
                                            <Col xs={6}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className=''>CNC machining</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>

                                            <Col xs={6}>
                                                <Col xs={12} className=''>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>Laser engraving</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>
                                        </Row>


                                        <Row className=''>
                                            <Col xs={6}>
                                                <Col xs={12} className=''>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>3D Printing</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>
                                            <Col xs={6}>
                                                <Col xs={12} className=''>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>glass panel retrofits</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>
                                        </Row>

                                        <hr className='global_rich-black-bg'/>

                                    </Col>

                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Tests, Checks & Repairs</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-headset global_blood-red' style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>

                                        {/*NESTED LIST*/}
                                        <Row>
                                            <Col xs={12}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>Biennial 91.411 & 91.413
                                                                Recertification</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>

                                            <Col xs={12}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>routine static system</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>

                                            <Col xs={12}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>routine static system</p>
                                                        </Col>
                                                    </Zoom>
                                                    <hr className='global_rich-black-bg'/>
                                                </Col>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Software Updates</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Col>

                    <Col xs={6} className='global_light-grey-bg p-0 '>
                        <Row className='d-flex justify-content-center p-5'>
                            <Col xs={6} className='p-0'>
                                <Col xs={12} className='pr-2'>
                                    <Col xs={12} className='Avionics_img-1 '> </Col>
                                    <Col xs={12} className='Avionics_img-2 mt-2'> </Col>
                                </Col>
                            </Col>

                            <Col xs={6} className='pl-0 pr-2'>
                                <Col xs={12} className='p-0'>
                                    <Col xs={12} className='bg-transparent' style={{height: '150px'}}> </Col>
                                    <Col xs={12} className='Avionics_img-3 global_blood-red-bg my-2'> </Col>
                                    <Col xs={12} className='Avionics_img-4 global_light-grey-bg'> </Col>
                                </Col>
                            </Col>
                        </Row>
                    </Col>

                    <AvionicsProducts/>

                </Row>
            </Jumbotron>

            {/*<AvionicsProducts/>*/}
        </>

    )
};

export default Avionics

// {/*        // <Col xs={7}>*/
// }
// {/*            //*/
// }
// {/*            // <Col className=' Avionics_title'>*/
// }
// {/*            // <Zoom>*/
// }
// {/*            // <h3 className='global_title global_blood-red ml-5'>*/
// }
// {/*            // <span style={{fontSize: '75px'}} className='global_eerie-black  mr-n2'>A</span>vionics*/
// }
// {/*            // </h3>*/
// }
// {/*            // </Zoom>*/
// }
// {/*            // </Col>*/
// }
// {/*            //*/
// }
// {/*            // <Col className=' d-flex mt-n5 mb-5 ml-5'>*/
// }
// {/*            // <p className='Avionics_text'>*/
// }
// {/*            // Bison Aviation*/
// }
// {/*            // is proud to have a&nbsp;*/
// }
// {/*            // <span className='global_blood-red rounded px-1'>*/
// }
// {/*        //                                 <em style={{fontSize: '1.2em'}}>*/
// }
// {/*        //                                     full-time avionics team in-house.*/
// }
// {/*        //                                 </em>*/
// }
// {/*        //                                 </span>*/
// }
// {/*            //                                 &nbsp;*/
// }
// {/*            // While*/
// }
// {/*            // many shops*/
// }
// {/*            // “sub out” their avionics work, Bison Aviation maintains a full service avionics*/
// }
// {/*            // staff as*/
// }
// {/*            // a part of our workforce.*/
// }
// {/*            // </p>*/
// }
// {/*            // </Col>*/
// }
// {/*            //*/
// }
// {/*            //*/
// }
// {/*            // /!*<Col className='mb-5 mt-3 ml-5'>*!/*/
// }
// {/*            // /!*    <AvionicsProducts/>*!/*/
// }
// {/*            // /!*</Col>*!/*/
// }
// {/*            //*/
// }
// {/*            // /!*    /!*begin icon products row*!/*!/*/
// }
// {/*            // <Row className='d-flex justify-content-center ml-5 Avionics_products-icon-row'>*/
// }
// {/*            //*/
// }
// {/*            // /!*<Col className='mb-5 mt-3 ml-5'>*!/*/
// }
// {/*            // /!*    <AvionicsProducts/>*!/*/
// }
// {/*            // /!*</Col>*!/*/
// }
// {/*            //*/
// }
// {/*            // /!*PRODUCTS COL*!/*/
// }
// {/*            // /!*<Col xs={5}>*!/*/
// }
// {/*            // /!*    <ProductCarousel/>*!/*/
// }
// {/*            // /!*</Col>*!/*/
// }
// {/*            //*/
// }
// {/*            // /!*ICONS COL*!/*/
// }
// {/*            // <Col xs={7} className='mb-5'>*/
// }
// {/*            // <Zoom>*/
// }
// {/*            // <Col className='d-flex Avionics_icon-box mb-3 '>*/
// }
// {/*            // <Col xs={2}*/
// }
// {/*//                                              className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>*/
// }
// {/*//                                             <i className='fas fa-exchange global_cultured Avionics_icon'> </i>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                         <Col xs={10} className='d-flex align-items-center'>*/
// }
// {/*//                                             <p className='mt-3 Avionics_icon-text'>30+ years of experience</p>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                     </Col>*/
// }
// {/*//                                 </Zoom>*/
// }
// {/*// */
// }
// {/*//                                 <Zoom>*/
// }
// {/*//                                     <Col className='d-flex Avionics_icon-box my-4'>*/
// }
// {/*//                                         <Col xs={2}*/
// }
// {/*//                                              className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>*/
// }
// {/*//                                             <i className='far fa-window-restore global_cultured Avionics_icon text-center'> </i>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                         <Col xs={10} className='d-flex align-items-center'>*/
// }
// {/*//                                             <p className='Avionics_icon-text'>Complete panel installations</p>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                     </Col>*/
// }
// {/*//                                 </Zoom>*/
// }
// {/*// */
// }
// {/*//                                 <Zoom>*/
// }
// {/*//                                     <Col className='d-flex Avionics_icon-box my-4'>*/
// }
// {/*//                                         <Col xs={2}*/
// }
// {/*//                                              className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>*/
// }
// {/*//                                             <i className='fas fa-arrow-alt-circle-down global_cultured Avionics_icon'> </i>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                         <Col xs={10} className='d-flex align-items-center'>*/
// }
// {/*//                                             <p className='Avionics_icon-text'>CNC panel fabrication</p>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                     </Col>*/
// }
// {/*//                                 </Zoom>*/
// }
// {/*// */
// }
// {/*//                                 <Zoom>*/
// }
// {/*//                                     <Col className='d-flex Avionics_icon-box my-4'>*/
// }
// {/*//                                         <Col xs={2}*/
// }
// {/*//                                              className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>*/
// }
// {/*//                                             <i className='far fa-sword-laser global_cultured Avionics_icon text-center'> </i>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                         <Col xs={10} className='d-flex align-items-center'>*/
// }
// {/*//                                             <p className='Avionics_icon-text'>Laser engraving </p>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                     </Col>*/
// }
// {/*//                                 </Zoom>*/
// }
// {/*// */
// }
// {/*//                                 <Zoom>*/
// }
// {/*//                                     <Col className='d-flex Avionics_icon-box my-4'>*/
// }
// {/*//                                         <Col xs={2}*/
// }
// {/*//                                              className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>*/
// }
// {/*//                                             <i className='far fa-print global_cultured Avionics_icon text-center'> </i>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                         <Col xs={10} className='d-flex align-items-center'>*/
// }
// {/*//                                             <p className='Avionics_icon-text'>3D printing </p>*/
// }
// {/*//                                         </Col>*/
// }
// {/*//                                     </Col>*/
// }
// {/*//                                 </Zoom>*/
// }
// {/*//                             </Col>*/
// }
// {/*//                             /!*    end icon col*!/*/
// }
// {/*// */
// }
// {/*//                             /!*PRODUCTS COL*!/*/
// }
// {/*//                             <Col xs={5} className='pt-5'>*/
// }
// {/*//                                         <ProductCarousel/>*/
// }
// {/*//                             </Col>*/
// }
// {/*//                             <Col x={12} className='mb-5 ml-5'>*/
// }
// {/*//                                 <AvionicsProducts/>*/
// }
// {/*//                             </Col>*/
// }
// {/*// */
// }
// {/*//                         </Row>*/
// }
// {/*//                         /!*/
// //     ! * end
// //     of
// //     icon
// //     and
// //     product
// //     img * row /
// // }
// // *
// // !/*/}
// // {/*// */
// // }
// // {/*// */
// // }
// {/*//                     </Col>*/
// }
// {/*// */
// }
// {/*//                     <Col xs={5} className='Avionics_cut-img'>*/
// }
// {/*//                     </Col>*/
// }
// {/*// */
// }
// {/*// */
// }
// {/*//                 </Row>*/
// }
// {/*//             </Jumbotron>*/
// }
// {/*//             <Jumbotron id='home-avionics' className='global_cultured-bg Avionics_3images m-0 p-0'*/
// }
// {/*//                        fluid>*/
// }
// {/*// */
// }
// {/*//             </Jumbotron>*/
// }
// {/*// */
// }
// {/*//             <Row className='Avionics_contact_img'>*/
// }
// {/*//                 <Col xs={12} className='d-flex justify-content-end align-items-center'>*/
// }
// {/*//                     <LinkContainer to={`/contact`}>*/
// }
// {/*//                         <Fade right duration='1000'>*/
// }
// {/*//                             <Button className=' Avionics_contact-btn'>Book an appointment*/
// }
// {/*//                                 today*/
// }
// {/*//                             </Button>*/
// }
// {/*//                         </Fade>*/
// }
// {/*//                     </LinkContainer>*/
// }
// {/*//                 </Col>*/
// }