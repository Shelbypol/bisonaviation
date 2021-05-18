import React from 'react';
import './Flir.css';
import FlirTable from "../../components/Flir/FlirTable";
import {Jumbotron, Container} from "reactstrap";
import FlirText from "../../components/Flir/FlirText";
import JumbotronTitle from "../../components/JumbotronTitle";

const FlirScreen = () => {

    return (
        <>
            <JumbotronTitle
                img={'FlirHero_img'}
                showImg={true}
                title={'EO/IR - FLIR'}
                leftTitle={false}
            />

            <Container className=' global_HeroDivider-margin pt-5'>


                <h1 className='FlirScreen_Title'>Airborne FLIR, EO/IR, & Thermography Systems</h1>
                <FlirText/>

                <Jumbotron className='FlirScreen_style bg-transparent p-0 m-0' fluid>
                    <FlirTable/>
                </Jumbotron>
            </Container>
        </>
    )
};

export default FlirScreen