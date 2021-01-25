import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Table, ListGroup, Image, Tab, Nav} from 'react-bootstrap'
import EditProfile from "../components/EditProfile";
import ProfileSavedWishList from "../components/ProfileSavedWishList";
import '../style/ProfileScreen.css'

const ProfileScreen = ({location, history}) => {

    return (
        <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Saved Items</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Edit Profile</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ProfileSavedWishList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <EditProfile />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

</>
    )
};

export default ProfileScreen