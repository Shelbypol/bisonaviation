import React from "react";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";
import '../../style/Tabs.css';


const Tabs = ({
                  tabOne,
                  tabOneInfo,
                  twoTrue,
                  tabTwo,
                  tabTwoInfo,
                  threeTrue,
                  tabThree,
                  tabThreeInfo,
                  fourTrue,
                  tabFour,
                  tabFourInfo,
                  fiveTrue,
                  tabFive,
                  tabFiveInfo
              }) => {


    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
            <Row>
                <Col sm={4}>
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
                    </ListGroup>
                </Col>
                <Col sm={8} className='Tabs_contentStyle'>
                    <Tab.Content className={'m-1 pt-3'}>
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

export default Tabs ;