import React from 'react';
import {Row, Col} from 'reactstrap';
import TenItemList from "../SectionList";
import './HomeFlir.css';
import flir1 from '../Flir/images/flirinventory.png'
import flir2 from '../Flir/images/acessories.png'
import flir3 from '../Flir/images/flir-multiple.jpg'
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";
import SectionImages from "../SectionImages";


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

                <SectionImages img1={flir2} img2={flir1} img3={flir3}/>

            </Row>

        </>

    )
};

export default HomeFlir