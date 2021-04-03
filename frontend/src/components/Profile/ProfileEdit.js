import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import {USER_UPDATE_PROFILE_RESET} from "../../constants/userConstants";
import {getUserDetails, updateUserProfile} from "../../actions/userActions";
import {deleteWishListItem, listMyWishLists} from "../../actions/wishListActions";

const ProfileEdit = ({match, history}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success} = userUpdateProfile;

    // const productDetails = useSelector(state => state.productDetails);
    // const {product} = productDetails;

    // const wishListMy = useSelector(state => state.wishListMy);
    // const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;
    //
    // const wishListDelete = useSelector(state => state.wishListDelete);
    // const {loading: loadingDelete, error: errorDelete, success: successDelete} = wishListDelete;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name || !user || success) {
                dispatch({type: USER_UPDATE_PROFILE_RESET});
                dispatch(getUserDetails('profile'));

            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
        dispatch(listMyWishLists())

    }, [dispatch, history, userInfo, user, success]);


    const submitHandler = (e) => {
        //prevent page refresh
        e.preventDefault();
        //    DISPATCH REGISTER
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //   DISPATCH UPDATE PROFILE
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
    };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

    return (
        <>
                <h2 className='global_blood-red'>Edit &nbsp;{userInfo.name}'s&nbsp; Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>Profile updated</Message>}
                {loading && <Loader/>}
                <Form onSubmit={submitHandler} className='global_blood-red'>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name'
                                      placeholder='Enter name'
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email'
                                      placeholder='Enter email'
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='Password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password'
                                      placeholder='Enter Password'
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password'
                                      placeholder='Confirm Password'
                                      value={confirmPassword}
                                      onChange={(e) => setConfirmPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Button className='global_blood-red-bg text-white' type='submit' variant='primary'>Update</Button>
                </Form>
            {/*</Col>*/}
        </>
    )
};

export default ProfileEdit