import {LinkContainer} from "react-router-bootstrap";
import {Col} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import React from "react";

const List = ({link, lg, md, xs, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10}) => {

    const height = {
        height: "100px"
    };

    const titles = {
        fontSize: "3.5vh"
    };

    return (
            <Col lg={lg} md={md} xs={xs} className=' mx-0 py-0 px-2 my-5 global_goldenrod global_black-transparent global_goldenrod-border-left global_goldenrod-border-right'>

                {item1 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item1}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item2 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item2}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item3 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item3}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item4 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item4}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item5 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item5}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item6 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item6}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item7 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item7}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item8 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item8}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

                {item9 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item9}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}
                {item10 && (
                    <LinkContainer to={link}>
                        <Col xs={12}
                             style={height}
                             className='global_cursor global_goldenrodtxt-btn d-flex align-items-center justify-content-center'>
                            <Zoom>
                                <p style={titles}>{item10}</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                )}

            </Col>

    )
};

export default List