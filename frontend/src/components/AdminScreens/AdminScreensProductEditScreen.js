import axios from 'axios'
import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import {listProductDetails, updateProduct} from "../../actions/productActions";
import {PRODUCT_UPDATE_RESET} from "../../constants/productConstants";
import HeaderDesktop from "../HeaderFooter/HeaderDesktop";
import './AdminScreens.css'


const AdminScreensProductEditScreen = ({match, history}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const productId = match.params.id;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [partNumber, setPartNumber] = useState('');
    const [includedParts, setIncludedParts] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');
    const [isPromo, setIsPromo] = useState(false);
    const [isPromoType, setIsPromoType] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);

    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    const productUpdate = useSelector(state => state.productUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate;


    useEffect(() => {

        if (successUpdate) {
            dispatch({type: PRODUCT_UPDATE_RESET});
            history.push('/admin/productlist');
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setBrand(product.brand);
                setIsPromoType(product.isPromoType);
                setIsPromo(product.isPromo);
                setIsAvailable(product.isAvailable);
                setPartNumber(product.partNumber);
                setIncludedParts(product.includedParts);
                setCategory(product.category);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            }
        }
    }, [product, dispatch, productId, history, successUpdate]);

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            const {data} = await axios.post('/api/upload', formData, config);

            setImage(data);
            setUploading(false)
        } catch (error) {
            console.error(error);
            setUploading(false)
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                image,
                brand,
                includedParts,
                isAvailable,
                isPromoType,
                isPromo,
                partNumber,
                category,
                description,
                countInStock
            }))
    };

    return (
        <>
        {/*<HeaderDesktop/>*/}
        <Container className=' bg-transparent text-white  min-vh-100 min-vw-100'>
            <Row xs={12} className='my-0 px-3 py-5'>
                <Col xs={10} className='d-flex justify-content-start'>
                    <h4 className='text-white'>Edit Product</h4>
                </Col>
                <Col xs={2} className='d-flex justify-content-end'>
                    <Link to='/admin/productlist' className='btn global_bisonRedBgWhiteHoverBgBtnRedBorder rounded py-1 px-2'>
                        back
                    </Link>
                </Col>
            </Row>
            {/*<FormContainer>*/}
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading && <Loader/>}
            {loading && <Message variant='danger'>{error}</Message>}
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (

                <Form onSubmit={submitHandler} className='p-3'>
                    {/*<Row className='p-0 mb-2'>*/}
                    {/*    <Col className='pr-3 m-0 d-flex justify-content-end'>*/}
                    {/*        <Button type='submit' variant='primary' className='px-3 py-1 global_blue-bg border-left border-bottom'>Update</Button>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    <Row className=' '>
                        <Col lg={9} xs={12} className=''>
                            {/* PROMO*/}
                            <Form.Group controlId='isAvailable'>
                                <Form.Check type='checkbox'
                                            label='Is Available'
                                            checked={isAvailable}
                                            onChange={(e) => setIsAvailable(e.target.checked)}>
                                </Form.Check>

                            </Form.Group>
                            {/* PROMO*/}
                            <Form.Group controlId='isPromo'>
                                <Form.Check type='checkbox'
                                            label='Show Promo'
                                            checked={isPromo}
                                            onChange={(e) => setIsPromo(e.target.checked)}>
                                </Form.Check>
                            </Form.Group>

                            <Form.Group controlId='isPromoType'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreen_form-titles '><h4 className='text-white'>Promo Type</h4></Form.Label>
                                <Form.Control type='text'
                                              placeholder='discount %, new price, on sale etc.'
                                              value={isPromoType}
                                              onChange={(e) => setIsPromoType(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* IMAGE */}
                            <Form.Group controlId='image'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreen_form-titles'><h4 className='text-white'>Image</h4></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter image url'
                                              value={image}
                                              onChange={(e) => setImage(e.target.value)}>
                                </Form.Control>
                                <Form.File id='image-file'
                                           label='Choose File'
                                           custom
                                           onChange={uploadFileHandler}
                                />

                                {uploading && <Loader/>}
                            </Form.Group>

                        {/*</Col>*/}
                        {/*<Col lg={5} xs={12} className=''>*/}
                            {/* NAME */}
                            <Form.Group controlId='name'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreen_form-titles'><h6 className='text-white'>Name</h6></Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PART NUMBER */}
                            <Form.Group controlId='partNumber'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>Part Number</h6></Form.Label>
                                <Form.Control type='partNumber'
                                              placeholder='Part number'
                                              value={partNumber}
                                              onChange={(e) => setPartNumber(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PRICE */}
                            <Form.Group controlId='price'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>Price</h6></Form.Label>
                                <Form.Control type='number'
                                              placeholder='Enter price'
                                              value={price}
                                              onChange={(e) => setPrice(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* BRAND */}
                            <Form.Group controlId='manufacturer'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>Brand</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter manufacturer'
                                              value={brand}
                                              onChange={(e) => setBrand(e.target.value)}>
                                </Form.Control>
                            </Form.Group>


                        {/*</Col>*/}
                        {/*<Col lg={4} xs={12}>*/}
                            {/* COUNT IN STOCK*/}
                            <Form.Group controlId='countInStock'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>Count in Stock</h6></Form.Label>
                                <Form.Control type='number'
                                              placeholder='Enter count in stock'
                                              value={countInStock}
                                              onChange={(e) => setCountInStock(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            {/* CATEGORIES */}
                            <Form.Group controlId='category'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>Category</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter category'
                                              value={category}
                                              onChange={(e) => setCategory(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            {/* DESCRIPTION */}
                            <Form.Group controlId='description'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>overview description</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter description'
                                              value={description}
                                              onChange={(e) => setDescription(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PARTS INCLUDED */}
                            <Form.Group controlId='includedParts'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 AdminScreens_form-titles'><h6 className='text-white'>Parts Included</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Parts included'
                                              value={includedParts}
                                              onChange={(e) => setIncludedParts(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                        </Col>


                    </Row>
                    <Row className='p-0 mb-2 d-flex justify-content-center'>
                        <Col xs={4} className=' m-0 d-flex justify-content-center global_blue-bg'>
                            <Button type='submit' variant='primary' className='w-100 global_blue-bg '>Update</Button>
                        </Col>
                    </Row>
                </Form>
            )}
            {/*</FormContainer>*/}
        </Container>
        </>

    )
};

export default AdminScreensProductEditScreen