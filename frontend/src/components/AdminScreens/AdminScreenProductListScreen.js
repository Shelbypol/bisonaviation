import React, {useEffect, useLayoutEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import Paginate from "../Paginate";
import {listProducts, deleteProduct, createProduct} from "../../actions/productActions"
import {PRODUCT_CREATE_RESET} from "../../constants/productConstants";

const AdminScreenProductListScreen = ({history, match}) => {
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // BRINGING IN DIFF PARTS OF STATE
    const productList = useSelector(state => state.productList);
    const {loading, error, products, pages, page} = productList;

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
    const {userInfo} = userLogin;

    useEffect(() => {
        dispatch({type: PRODUCT_CREATE_RESET});

        if (!userInfo.isAdmin) {
            history.push('/login');
        }

        if (successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts('', pageNumber))
        }

    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, pageNumber]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id))
        }
    };

    const createProductHandler = () => {
        dispatch(createProduct())
    };

    return (
        <>
            <Row className='d-flex justify-content-center bg-transparent text-white my-5'>
                <Col lg={9} xs={12}>
                    {/*<Container className='bg-transparent text-white min-vh-100 min-vw-100 px-3'>*/}
                    <Row className='align-items-center'>
                        <Col className='d-flex justify-content-start'>
                            <h4 className='text-white'>Products</h4>
                        </Col>

                        <Col className='text-right'>
                            <Button className='my-3 global_blue-bg' onClick={createProductHandler}>
                                <i className='fas fa-plus'> </i> Create Product
                            </Button>
                        </Col>
                    </Row>
                    {loadingDelete && <Loader/>}
                    {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

                    {loadingCreate && <Loader/>}
                    {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

                    {loading ? <Loader/> : error ? (
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <>
                            <Row className='d-flex justify-content-center'>
                                <Col md={12} xs={12}>
                                    <Paginate pages={pages} page={page} isAdmin={true}/>
                                    <Table striped bordered hover responsive className='table-sm bg-light mx-auto'>
                                        <thead>
                                        <tr className=''>
                                            <th className='border global_gray-bg text-white'>GARMIN PART #</th>
                                            <th className='border global_gray-bg text-white'>NAME</th>
                                            <th className='border global_gray-bg text-white'>PRICE</th>
                                            <th className='border global_gray-bg text-white'>PROMO</th>
                                            <th className='border global_gray-bg text-white'>AVAILABLE</th>
                                            <th className='border global_gray-bg text-white'> </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {products.map((product => (
                                            <tr key={product._id} className=''>
                                                <td>{product.partNumber}</td>
                                                <td>{product.name}</td>
                                                <td>${product.price}</td>
                                                {product.isPromo ? (
                                                    <>
                                                        <td><i className='fal fa-check'
                                                               style={{color: 'green'}}> </i>&nbsp; {product.isPromoType}
                                                        </td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td style={{color: 'red'}}>X</td>
                                                    </>
                                                )}

                                                {product.isAvailable ? (
                                                    <>
                                                        <td><i className='fal fa-check' style={{color: 'green'}}> </i>
                                                        </td>
                                                    </>
                                                ) : (
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

                                                    <Button variant='danger' className='btn-sm'
                                                            onClick={() => deleteHandler(product._id)}>
                                                        <i className='fas fa-trash'> </i>
                                                    </Button>

                                                </td>
                                            </tr>
                                        )))}
                                        </tbody>
                                    </Table>

                                    <Paginate pages={pages} page={page} isAdmin={true}/>

                                </Col>
                            </Row>
                        </>
                    )}
                    {/*</Container>*/}
                </Col>
            </Row>
        </>
    )
};

export default AdminScreenProductListScreen