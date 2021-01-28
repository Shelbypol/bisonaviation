import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Table, ListGroup, Image, Tab, Nav} from 'react-bootstrap'
import ProfileEdit from "../components/Profile/ProfileEdit";
import ProfileSavedWishList from "../components/Profile/ProfileSavedWishList";
import '../style/ProfileScreen.css'
import {useSelector} from "react-redux";

const ProfileScreen = ({location, history}) => {



    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    return (
        <>
            <h1>{userInfo.name}</h1>

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
                            <ProfileSavedWishList userInfo={userInfo} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <ProfileEdit />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

</>
    )
};

export default ProfileScreen