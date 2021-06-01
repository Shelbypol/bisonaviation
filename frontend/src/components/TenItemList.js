import {LinkContainer} from "react-router-bootstrap";
import {Col} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import React from "react";

const List = ({link, lg, md, xs, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10}) => {


    return (

        <Col lg={lg} md={md} xs={xs}
             className='mx-0 py-0 px-2 my-md-5 my-sm-0 global_goldenrod global_black-transparent global_goldenrod-border-left global_goldenrod-border-right'>

            <LinkContainer to={link}>
                <Col xs={12}
                     className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                    <Zoom>
                        <p className='HomeAvionics_text-titles'>{item1}</p>
                    </Zoom>
                </Col>
            </LinkContainer>

            <LinkContainer to={link}>
                <Col xs={12}
                     className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                    <Zoom>
                        <p className='HomeAvionics_text-titles'>{item2}</p>
                    </Zoom>
                </Col>
            </LinkContainer>

            <LinkContainer to={link}>
                <Col xs={12}
                     className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                    <Zoom>
                        <p className='HomeAvionics_text-titles'>{item3}</p>
                    </Zoom>
                </Col>
            </LinkContainer>

            <LinkContainer to={link}>
                <Col xs={12}
                     className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                    <Zoom>
                        <p className='HomeAvionics_text-titles'>{item4}</p>
                    </Zoom>
                </Col>
            </LinkContainer>

            {item5 && (
                <LinkContainer to={link}>
                    <Col xs={12}
                         className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                        <Zoom>
                            <p className='HomeAvionics_text-titles'>{item5}</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            )}

            {item6 && (
                <LinkContainer to={link}>
                    <Col xs={12}
                         className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                        <Zoom>
                            <p className='HomeAvionics_text-titles'>{item6}</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            )}

            {item7 && (
                <LinkContainer to={link}>
                    <Col xs={12}
                         className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                        <Zoom>
                            <p className='HomeAvionics_text-titles'>{item7}</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            )}

            {item8 && (
                <LinkContainer to={link}>
                    <Col xs={12}
                         className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                        <Zoom>
                            <p className='HomeAvionics_text-titles'>{item8}</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            )}

            {item9 && (
                <LinkContainer to={link}>
                    <Col xs={12}
                         className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                        <Zoom>
                            <p className='HomeAvionics_text-titles'>{item9}</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            )}
          {item10 && (
                <LinkContainer to={link}>
                    <Col xs={12}
                         className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                        <Zoom>
                            <p className='HomeAvionics_text-titles'>{item10}</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            )}


        </Col>

    )
};

export default List