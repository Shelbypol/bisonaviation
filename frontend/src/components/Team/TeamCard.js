import React, {useEffect, useRef, useState} from 'react';
import Fade from 'react-reveal/Fade';
import {Card, Row, Col} from "react-bootstrap";

const TeamCard = ({img, headerName, headerPosition, name, position, certifications, locations, specialTraining, bio, favAircraft, eventKey}) => {

    const [show, setShow] = useState(false);

    const node = useRef();

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
        // if (node.current.contains(e.target)) {
            setShow(true);
            return;
        }
        // outside click
        // ... do whatever on click outside here ...
        setShow(false);
    };
    return (

        <>

            <Col sm={1} md={2} className='my-2 p-0 mx-4 global_cursor'>

                <Card className='bg-transparent border-0 w-100 h-100 m-0 p-0' ref={node} onClick={(e) => {
                    handleClick(e)
                }}>

                    <Card.Img src={img} className='rounded'/>
                    <Card.Header
                        className='global_cultured global_goldenrod text-center d-flex justify-content-center align-items-center'
                        style={{height: '12vh'}}>
                        {headerName}
                        <br/>
                        {headerPosition}
                    </Card.Header>
                </Card>
            </Col>

            {show && (
                <>
                    <Fade duration={4000}>
                        <Col xs={12} className='my-3'>
                            <Row>
                                <Col md={6} className='d-none d-md-block'>
                                    <Card.Img variant="top" src={img} className='w-100 h-100'/>
                                </Col>
                                <Col xs={12} md={6} className='bg-transparent global_cultured'>
                                    <Col xs={12}>
                                        {/*MEMBER NAME*/}
                                        <strong className='Team_underline ' style={{color: 'red'}}> TEAM
                                            MEMBER:</strong>
                                        &nbsp;
                                        {name}
                                        {}
                                    </Col>

                                    {position ? (
                                        <Col xs={12}>
                                            {/*POSITION*/}
                                            <strong className='global_blue Team_underline '>POSITION:</strong>
                                            &nbsp;
                                            {position}
                                        </Col>
                                    ) : ('')}

                                    {certifications ? (
                                        <Col xs={12}>
                                            {/*CERTIFICATIONS*/}
                                            <strong className='global_blue Team_underline '>CERTIFICATION/s:</strong>
                                            <br/>
                                            {certifications}
                                        </Col>
                                    ) : ('')}


                                    {locations ? (
                                        <Col xs={12}>
                                            {/*LOCATION*/}
                                            <strong className='global_blue Team_underline '>LOCATION:</strong>
                                            &nbsp;
                                            {locations}
                                        </Col>
                                    ) : ('')}

                                    {specialTraining ? (
                                        <Col xs={12}>
                                            {/*SPECIAL TRAINING*/}

                                            <strong className='global_blue Team_underline '> SPECIAL
                                                TRAINING:</strong>
                                            <br/>
                                            {specialTraining}
                                        </Col>
                                    ) : ('')}

                                    <Col xs={12}>
                                        {/*BIO*/}
                                        <strong className='global_blue Team_underline '>BIO:</strong>
                                        <br/>
                                        {bio}
                                    </Col>
                                    {favAircraft ? (
                                        <Col xs={12}>
                                            {/*BIO*/}
                                            <strong className='global_blue Team_underline '>Favorite Aircraft to
                                                Maintain:</strong>
                                            <br/>
                                            {favAircraft}
                                        </Col>
                                    ) : ('')}
                                </Col>
                            </Row>
                        </Col>
                    </Fade>
                </>

            )}
        </>
    );
};

export default TeamCard;