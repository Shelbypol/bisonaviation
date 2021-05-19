import React from 'react'
import './HeroJumbotron.css';
import {Row, Col} from "react-bootstrap";

const HeroJumbotron = ({img, showImg, title, leftTitle}) => {

    return (
        <>

            {/*<Row  className='HeroDivider_no-img-wrap' >*/}
            <Row className={!showImg ? ('HeroDivider_no-img-wrap') : ('HeroDivider_wrap')}>


                {showImg && (
                    <Col xs={12}
                         className={`
                         HeroDivider_img-title-wrap
                         d-flex
                         justify-content-sm-start
                         justify-content-md-center
                         align-items-center
                         m-0
                         p-0
                        ${img}`}
                    >
                        {leftTitle ? (
                            <p
                                className={'HeroDivider_title pr-5 ml-auto'}
                            >{title}</p>
                        ):(
                        <p
                            className={'HeroDivider_title pr-5 mr-5'}
                        >{title}</p>

                        )}
                    </Col>
                )}

            </Row>


        </>
    )
};

export default HeroJumbotron