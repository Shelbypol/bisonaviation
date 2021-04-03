import React, {useLayoutEffect} from 'react'
import {Row, Col, Tab, Nav, Jumbotron, Container} from 'react-bootstrap'
import ProfileEdit from "../components/Profile/ProfileEdit";
import ProfileSavedWishList from "../components/Profile/ProfileSavedWishList";
import '../style/ProfileScreen.css'
import {useSelector} from "react-redux";

const ProfileScreen = ({location, history}) => {

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Container className='mb-0 pb-0 min-vh-100'>
                <Jumbotron className='bg-white m-0 px-3 pt-5 pb-5 min-vh-100'>
                    <h1>{userInfo.name}</h1>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col lg={3} xs={12} className='mb-5 px-0 mx-0'>
                                <Nav variant="pills" className="flex-md-column d-flex justify-content-center">
                                    <Nav.Item className='px-md-2 p-sm-0'>
                                        <Nav.Link className='global_white-txt-blood-red-bg-hover' eventKey="first"><span className='text-uppercase'>Saved Items</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='px-md-2 p-sm-0'>
                                        <Nav.Link className='global_white-txt-blood-red-bg-hover' eventKey="second"><span className='text-uppercase'>Edit Profile</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='px-md-2 p-sm-0'>
                                        <Nav.Link className='global_white-txt-blood-red-bg-hover' eventKey="third"><span className='text-uppercase'>Product Inquiry</span></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg={9} xs={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <ProfileSavedWishList userInfo={userInfo}/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ProfileEdit/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h1>hello world</h1>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Jumbotron>
            </Container>
        </>
    )
};

export default ProfileScreen