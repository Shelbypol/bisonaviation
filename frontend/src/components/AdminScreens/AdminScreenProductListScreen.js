import React, {useEffect, useLayoutEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col, Container} from 'react-bootstrap'
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
            <Container className=' bg-transparent text-white  min-vh-100 min-vw-100'>

                <Row className='d-flex justify-content-center bg-transparent text-white my-5'>
                    <Col lg={9} xs={12}>
                        <Row className='align-items-center'>
                            <Col className='d-flex justify-content-start'>
                                <h4 className='global_white'>Products</h4>
                            </Col>

                            <Col className='text-right'>
                                <Button className='my-3 global_goldenrodtxtborder-btn rounded'
                                        onClick={createProductHandler}>
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
                                        <Table striped bordered hover responsive
                                               className='table-sm global_light-transparent mx-auto'>
                                            <thead>
                                            <tr className='global_light-transparent'>
                                                <th className='global_goldenrodtxtborder-btn'>GARMIN PART #</th>
                                                <th className='global_goldenrodtxtborder-btn'>NAME</th>
                                                <th className='global_goldenrodtxtborder-btn'>PRICE</th>
                                                <th className='global_goldenrodtxtborder-btn'>PROMO</th>
                                                <th className='global_goldenrodtxtborder-btn'>AVAILABLE</th>
                                                <th className='global_goldenrodtxtborder-btn'> </th>
                                            </tr>
                                            </thead>
                                            <tbody className='global_white'>
                                            {products.map((product => (
                                                <tr key={product._id} className=''>
                                                    <td className='border-right'>{product.partNumber}</td>
                                                    <td className='border-right'>{product.name}</td>
                                                    <td className='border-right'>${product.price}</td>
                                                    {product.isPromo ? (
                                                        <>
                                                            <td className='border-right'><i className='fal fa-check'
                                                                                            style={{color: 'green'}}> </i>&nbsp; {product.isPromoType}
                                                            </td>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <td className='border-right' style={{color: 'red'}}>X</td>
                                                        </>
                                                    )}

                                                    {product.isAvailable ? (
                                                        <>
                                                            <td className='border-right'><i className='fal fa-check'
                                                                                            style={{color: 'green'}}> </i>
                                                            </td>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <td className='border-right' style={{color: 'red'}}>X</td>
                                                        </>
                                                    )}


                                                    <td>
                                                        <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                                            <Button variant='dark' className='btn-sm'>
                                                                <i className='fas fa-edit global_goldenrod'> </i>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default AdminScreenProductListScreen