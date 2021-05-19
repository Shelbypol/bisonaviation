import React from 'react'
import './HeroJumbotron.css';
import {Row, Col} from "react-bootstrap";

const HeroJumbotron = ({img, showImg, title, leftTitle}) => {

    return (
        <>

            {/*<Row  className='HeroDivider_no-img-wrap' >*/}
            <Row className={!showImg ? ('HeroJumbotron_no-img-wrap') : ('HeroJumbotron_wrap')}>


                {showImg && (
                    <Col xs={12}
                         className={`
                         HeroJumbotron_img-title-wrap
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
                                className={'HeroJumbotron_title pr-5 ml-auto'}
                            >{title}</p>
                        ):(
                        <p
                            className={'HeroJumbotron_title pr-5 mr-5'}
                        >{title}</p>

                        )}
                    </Col>
                )}

            </Row>


        </>
    )
};

export default HeroJumbotron