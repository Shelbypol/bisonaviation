import React, {useEffect, useLayoutEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import Paginate from "../Paginate";
import { listProducts, deleteProduct, createProduct } from "../../actions/productActions"
import { PRODUCT_CREATE_RESET } from "../../constants/productConstants";
import HeaderDesktop from "../HeaderFooter/HeaderDesktop";

const ProductListScreen = ({ history, match }) => {
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // BRINGING IN DIFF PARTS OF STATE
    const productList = useSelector(state => state.productList);
    const { loading, error, products, pages, page } = productList;

    const productDelete = useSelector(state => state.productDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete
    } = productDelete;

    const productCreate = useSelector(state => state.productCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct
    } = productCreate;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET });

        if(!userInfo.isAdmin){
            history.push('/login');
        }

        if(successCreate){
            history.push(`/admin/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts('', pageNumber))
        }

    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, pageNumber]);

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete this product?')){
            dispatch(deleteProduct(id))
        }
    };

    const createProductHandler = () => {
        dispatch(createProduct())
    };

    return (
        <>
            <HeaderDesktop/>
            <Container className='bg-white min-vh-100 min-vw-100 px-3'>
            <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'> </i> Create Product
                    </Button>
                </Col>
            </Row>
            { loadingDelete && <Loader /> }
            { errorDelete && <Message variant='danger'>{errorDelete}</Message> }

            { loadingCreate && <Loader /> }
            { errorCreate && <Message variant='danger'>{errorCreate}</Message> }

            {loading ? <Loader /> : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Paginate pages={pages} page={page} isAdmin={true}/>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                        <tr>
                            <th>GARMIN PART #</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>PROMO</th>
                            <th>AVAILABLE</th>
                            <th> </th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product => (
                            <tr key={product._id}>
                                <td>{product.partNumber}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                {product.isPromo ? (
                                    <>
                                    <td><i className='fal fa-check' style={{color: 'green'}}> </i>&nbsp; {product.isPromoType}</td>
                                    </>
                                ):(
                                    <>
                                    <td style={{color: 'red'}}>X</td>
                                    </>
                                )}

                                {product.isAvailable ? (
                                    <>
                                        <td><i className='fal fa-check' style={{color: 'green'}}> </i></td>
                                    </>
                                    ):(
                                    <>
                                        <td style={{color: 'red'}}>X</td>
                                    </>
                                    )}


                                <td>
                                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'> </i>
                                        </Button>
                                    </LinkContainer>

                                    <Button variant='danger' className='btn-sm' onClick={()=> deleteHandler(product._id)}>
                                        <i className='fas fa-trash'> </i>
                                    </Button>

                                </td>
                            </tr>
                        )))}
                        </tbody>
                    </Table>

                    <Paginate pages={pages} page={page} isAdmin={true}/>

                </>
            )}
            </Container>
        </>
    )
};

export default ProductListScreen