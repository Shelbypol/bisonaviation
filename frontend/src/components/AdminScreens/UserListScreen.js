import React, {useEffect, useLayoutEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Col, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import {listUsers, deleteUser} from "../../actions/userActions"
import Paginate from "../Paginate";

const UserListScreen = ({history}) => {
    const dispatch = useDispatch();

    // BRINGING IN DIFF PARTS OF STATE
    const userList = useSelector(state => state.userList);
    const {loading, error, users} = userList;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const userDelete = useSelector(state => state.userDelete);
    const {success: successDelete} = userDelete;


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, successDelete, userInfo]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id))
        }
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Row className='d-flex justify-content-center bg-transparent text-white my-5'>
                <Col lg={9} xs={12}>
                    {/*<Container className='bg-transparent text-white min-vh-100 min-vw-100 px-3'>*/}
                        <h4 className='text-white my-3'>Users</h4>
                        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                            : (
                                <Row className='d-flex justify-content-center'>
                                    <Col md={12} xs={12}>
                                        <Table striped bordered hover responsive className='table-sm global_light-transparent mx-auto'>
                                            <thead>
                                            <tr>
                                                <th className='global_goldenrodtxtborder-btn'>ID</th>
                                                <th className='global_goldenrodtxtborder-btn'>NAME</th>
                                                <th className='global_goldenrodtxtborder-btn'>EMAIL</th>
                                                <th className='global_goldenrodtxtborder-btn'>ADMIN</th>
                                                <th className='global_goldenrodtxtborder-btn border-0'>EDIT</th>
                                            </tr>
                                            </thead>
                                            <tbody className='global_white'>
                                            {users.map((user => (
                                                <tr key={user._id}>
                                                    <td className='border-right'>{user._id}</td>
                                                    <td className='border-right'>{user.name}</td>
                                                    <td className='border-right'><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                                    <td className='border-right'>
                                                        {user.isAdmin
                                                            ? (<i className='fas fa-check'
                                                                  style={{color: 'green'}}> </i>)
                                                            : (<i className='fas fa-times' style={{color: 'red'}}> </i>
                                                            )}
                                                    </td>
                                                    <td className='d-flex justify-content-between'>
                                                        <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                            <Button variant='light' className='btn-sm global_light-transparent global_goldenrodtxt-btn'>
                                                                <i className='fas fa-edit'> </i>
                                                            </Button>
                                                        </LinkContainer>
                                                    {/*</td>*/}
                                                    {/*<td className=' border-0'>*/}
                                                        <Button className='btn-sm global_blood-red-bg'
                                                                onClick={() => deleteHandler(user._id)}>
                                                            <i className='fas fa-trash'> </i>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            )}
                    {/*</Container>*/}
                </Col>
            </Row>
        </>
    )
};

export default UserListScreen