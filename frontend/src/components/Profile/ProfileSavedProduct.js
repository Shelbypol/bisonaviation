import React from "react";
import {Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {addToEmail, removeFromEmail} from "../../actions/emailActions";


const ProfileSavedWishList = () => {


    return (

        <ListGroup.Item key={item._id}
                        className='border-0 global_bisonDarkFadedBgColorHover global_cursor'>
            <Row xs={12}>
                <Col xs={2}>
                    <Link to={`/product/${item.product}`}>
                        <Image src={item.image} alt={item.name} fluid
                               rounded/>
                    </Link>
                </Col>
                <Col xs={4} className='d-flex align-items-center'>
                    <Link to={`/product/${item.product}`}>
                        {item.name}
                    </Link>
                </Col>
                <Col xs={4} className='d-flex justify-content-center align-items-center'>
                    <Link to={`/product/${item.product}`}>
                        <strong>${item.price}</strong>
                    </Link>
                </Col>
                <Col md={2} onClick={() => deleteHandler(wishes._id)}
                     className='global_bisonDarkFadedBgColorHover d-flex justify-content-center align-items-center'>
                    {/*<Button type='button' variant='light'*/}
                    {/*        onClick={() => deleteHandler(wishes._id)}>*/}
                    <i className='fas fa-trash'> </i>
                    {/*</Button>*/}
                </Col>
                <Col>
                    {activeEmail ? (
                        <p onClick={removeFromEmail} className='global_cursor global_bisonRedTxt'>added</p>
                    ) : (
                        <p onClick={addToEmail} className='global_cursor global_bisonRedTxt'>inquire</p>
                    )}
                </Col>

            </Row>
        </ListGroup.Item>
    )
};
export default ProfileSavedWishList