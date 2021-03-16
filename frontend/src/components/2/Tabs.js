import React from "react";
import {Col, ListGroup, Row, Tab, Image} from "react-bootstrap";
import '../../style/Tabs.css';


const Tabs = ({
                  tabOne,
                  tabOneInfo,
                  tabOneImg,
                  twoTrue,
                  tabTwo,
                  tabTwoInfo,
                  tabTwoImg,
                  threeTrue,
                  tabThree,
                  tabThreeInfo,
                  tabThreeImg,
                  fourTrue,
                  tabFour,
                  tabFourInfo,
                  tabFourImg,
                  fiveTrue,
                  tabFive,
                  tabFiveInfo,
                  tabFiveImg
              }) => {


    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4} className='mb-0 pb-0'>
                    <ListGroup>
                        <ListGroup.Item className='Tabs_itemStyle' action href="#link1">
                            {tabOne}
                        </ListGroup.Item>
                        {twoTrue && (
                            <ListGroup.Item className='Tabs_itemStyle' action href="#link2">
                                {tabTwo}
                            </ListGroup.Item>
                        )}
                        {threeTrue && (
                            <ListGroup.Item className='Tabs_itemStyle' action href="#link3">
                                {tabThree}
                            </ListGroup.Item>
                        )}
                        {fourTrue && (
                            <ListGroup.Item className='Tabs_itemStyle' action href="#link4">
                                {tabFour}
                            </ListGroup.Item>
                        )}
                        {fiveTrue && (
                            <ListGroup.Item className='Tabs_itemStyle' action href="#link5">
                                {tabFive}
                            </ListGroup.Item>
                        )}

                        {/*    TAB ONE IMAGE     */}
                        <ListGroup.Item className='bg-transparent'>
                            <Tab.Content className='text-center mt-3'>
                                <Tab.Pane eventKey="#link1">
                                    <Image src={tabOneImg} fluid rounded/>
                                </Tab.Pane>
                            </Tab.Content>
                        </ListGroup.Item>

                        {/*    TAB TWO IMAGE     */}
                        {twoTrue && (
                            <Tab.Content className='mx-auto my-3'>
                                <Tab.Pane eventKey="#link2">
                                    <Image src={tabTwoImg} rounded/>
                                </Tab.Pane>
                            </Tab.Content>
                        )}

                        {/*    TAB THREE IMAGE     */}
                        {tabThree && (
                            <Tab.Content className='mx-auto my-3'>
                                <Tab.Pane eventKey="#link3">
                                    <Image src={tabThreeImg} rounded/>
                                </Tab.Pane>
                            </Tab.Content>
                        )}

                        {/*    TAB FOUR IMAGE     */}
                        {tabFour && (
                            <Tab.Content className='mx-auto my-3'>
                                <Tab.Pane eventKey="#link4">
                                    <Image src={tabFourImg} rounded/>
                                </Tab.Pane>
                            </Tab.Content>
                        )}

                        {/*    TAB FIVE IMAGE     */}
                        {tabFive && (
                            <Tab.Content className='mx-auto my-3'>
                                <Tab.Pane eventKey="#link5">
                                    <Image src={tabFiveImg} rounded/>
                                </Tab.Pane>
                            </Tab.Content>
                        )}

                    </ListGroup>
                </Col>
                <Col sm={8} className='Tabs_contentStyle'>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            {tabOneInfo}
                        </Tab.Pane>
                        {twoTrue && (
                            <Tab.Pane eventKey="#link2">
                                {tabTwoInfo}
                            </Tab.Pane>
                        )}
                        {threeTrue && (
                            <Tab.Pane eventKey="#link3">
                                {tabThreeInfo}
                            </Tab.Pane>
                        )}
                        {fourTrue && (
                            <Tab.Pane eventKey="#link4">
                                {tabFourInfo}
                            </Tab.Pane>
                        )}
                        {fiveTrue && (
                            <Tab.Pane eventKey="#link5">
                                {tabFiveInfo}
                            </Tab.Pane>
                        )}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    )
};

export default Tabs;