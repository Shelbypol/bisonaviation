import React from "react";
import {Col, Row} from "react-bootstrap";
import './HomeMaintenance.css';
import TenItemList from '../SectionList'
import img1 from "../Maintenance/images/maintenance2.png";
import img2 from "../Maintenance/images/maintenance5.png";
import img3 from "../Maintenance/images/maintenance4.png";
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";
import SectionImages from "../SectionImages";


const HomeMaintenance = () => {

    return (
        <>

            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='HomeMaintenance_image p-0 mt-5 mb-0 mx-0'>

                    <SectionTitle titleText={'MAINTENANCE'}/>

                    <Row className='pb-0 px-0 pt-3 mx-n1 mb-n1 global_black-bg d-flex justify-content-center align-items-center'>

                        <SectionText
                            lg={7}
                            md={6}
                            xs={12}
                            headerText={'You depend on your aircraft to carry you and your passengers safely.'}
                            paragraphText={' Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it\'s time for a completely new panel, Bison Aviation\'s Avionics Team is ready to bring your avionics systems into the 21st century!'}
                            btn={'LEARN MORE'}
                        />

                        <TenItemList
                            lg={5}
                            md={5}
                            xs={12}
                            link={`/avionics`}
                            item1={'Annual Inspections'}
                            item2={'Propeller Balance'}
                            item3={'Pre-Buy Inspections'}
                            borderLeftTrue={false}
                        />

                        <SectionImages img1={img1} img2={img2} img3={img3}/>


                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default HomeMaintenance

