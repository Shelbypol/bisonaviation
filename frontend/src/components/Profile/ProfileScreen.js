import React, {useLayoutEffect} from 'react'
import {Row, Col, Tab, Nav, Jumbotron, Container} from 'react-bootstrap'
import ProfileEdit from "./ProfileEdit";
import ProfileSavedWishList from "./ProfileSavedWishList";
import './ProfileScreen.css'
import {useSelector} from "react-redux";

const ProfileScreen = ({location, history}) => {

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            {/*<Container className='mb-0 pb-0 min-vh-100'>*/}
                <Jumbotron className='bg-white m-0 px-3 pt-5 pb-5 min-vh-100'>
                    <h1>{userInfo.name}</h1>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className=' d-flex justify-content-start'>
                            <Col md={3} xs={6} className='mb-5 px-0 mx-0'>
                                <Nav fill variant="tabs" className="border-0 flex-column">
                                    <Nav.Item className='m-0 border-0'>
                                        <Nav.Link className='p-2 global_white-txt-blood-red-bg-hover' eventKey="first"><span className='text-uppercase'>Saved Items</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='m-0'>
                                        <Nav.Link className='p-2 global_white-txt-blood-red-bg-hover' eventKey="second"><span className='text-uppercase'>Edit Profile</span></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={8} xs={12} className='mr-5 border-0'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <ProfileSavedWishList userInfo={userInfo}/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className='p-2'>
                                        <ProfileEdit/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Jumbotron>
            {/*</Container>*/}
        </>
    )
};

export default ProfileScreen