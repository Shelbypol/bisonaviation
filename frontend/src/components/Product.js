import React from 'react';
import { Link  } from 'react-router-dom'
import {Button, Card, ListGroup} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product, history, productId }) => {

    //HANDLERS
    const addToCartHandler = () => {
        console.log(product._id);
        history.push(`/cart/${productId}?qty=1`);
    };

    return (
        <Card className='my-3 mx-0 rounded border-0'>
            {/* Replace 'a' tags with Link from router and href is replaced with 'to'*/}
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' className='h-75 w-75' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    {/* taking in two props value and text (talking with Rating component) */}
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                        {product.rating} from {product.numReviews} reviews}
                    </Rating>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}

                </Card.Text>
                <Card.Text>
                    <Button
                        onClick={addToCartHandler}
                        className='btn btn-block global_bisonRedBgWhiteHoverBgBtnRedBorder p-1'
                        type='button'
                        // disabled={product.countInStock === 0 }
                    >
                        ADD TO CART
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product