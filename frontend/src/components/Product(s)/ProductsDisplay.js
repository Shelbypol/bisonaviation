import React, {useState, useEffect} from "react";
import {Col, Row, Button} from "react-bootstrap";
import './Sidebar.css'
import Sidebar from "react-sidebar";
import {listProducts} from "../../actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import ProductHeroAd from "./ProductHeroAd";
import ProductsImgDisplay from "./ProductsImgDisplay";
import './ProductsSideBar.css';

const ProductsDisplay = ({match, history}) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');
    const [showAd, setShowAd] = useState(true);

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch, updateCat, updateManufacturer, sidebarOpen]);


    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
    };

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setUpdateManufacturer('');
        setUpdateCat(a);
    };


    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        setUpdateManufacturer(a);
    };

    const manufacturerArr = [...new Set(products.map(product => product.brand))].sort();
    const catArr = [...new Set(products.map(product => product.category))].sort();


    return (
        <>

            <Sidebar
                sidebar={
                    <Row className=''>
                        <Col>
                            {(updateManufacturer !== '' || updateCat !== '') && (
                                <>
                                    <Row className='global_accentFont py-2 Sidebar_title-bg'>
                                        <h4 className='global_cursor Sidebar_selected-cat global_blood-red'>{updateManufacturer || updateCat}</h4>
                                    </Row>

                                    {/* ALL PRODUCTS*/}
                                    <Row
                                        className='global_accentFont Sidebar_title-bg'
                                        onClick={displayAllHandler}>
                                        <h6 className='global_cursor Sidebar_title'>
                                            All Products
                                        </h6>
                                    </Row>

                                    {/*   ALL CATEGORIES  */}
                                    <Row className='global_accentFont Sidebar_title-bg'>
                                        <h6 className='global_cursor Sidebar_title'>Categories</h6>
                                    </Row>

                                    <Row>
                                        {catArr.map((product, index) => (
                                            <Col xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                 className='btn btn-block global_cursor Sidebar_items-list'
                                                 type='button'
                                                 key={index}
                                            >
                                                {product}
                                            </Col>
                                        ))}
                                    </Row>

                                    {/*   ALL MANUFACTURES  */}
                                    <Row className='global_accentFont mt-4 Sidebar_title-bg'>
                                        <h6 className='global_cursor Sidebar_title'>Manufactures</h6>
                                    </Row>

                                    <Row>
                                        {manufacturerArr.map((product, index) => (
                                            <Col xs={12}
                                                 onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                 className='btn btn-block global_cursor Sidebar_items-list'
                                                 type='button'
                                                 key={index}
                                            >
                                                {product}
                                            </Col>
                                        ))}
                                    </Row>
                                </>
                            )}

                            {/*==============================================================================*/}

                            {/*    ALL CAT & ALL MAN INITIAL DISPLAY    */}
                            {(updateCat === '' && updateManufacturer === '') && (
                                <>
                                    {/* ALL PRODUCTS*/}
                                    <Row
                                        className='global_accentFont Sidebar_title-bg'
                                        onClick={displayAllHandler}>
                                        <h6 className='global_cursor Sidebar_title'>All
                                            Products</h6>
                                    </Row>

                                    <Row
                                        className='global_accentFont Sidebar_title-bg'>
                                        <h6 className='global_cursor Sidebar_title'>Categories</h6>
                                    </Row>

                                    <Row>
                                        {catArr.map((product, index) => (
                                            <Col xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                 className='btn btn-block global_cursor Sidebar_items-list'
                                                 type='button'
                                                 key={index}
                                            >
                                                {product}
                                            </Col>
                                        ))}
                                    </Row>

                                    <Row
                                        className='global_accentFont mt-3 global_cursor Sidebar_title-bg'>
                                        <h6 onClick={displayAllHandler}
                                            className='Sidebar_title'>Manufacturers</h6>
                                    </Row>

                                    <Row>
                                        {manufacturerArr.map((product, index) => (
                                            <Col xs={12}
                                                 onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                 className='btn btn-block global_cursor Sidebar_items-list'
                                                 type='button'
                                                 key={index}
                                            >
                                                {product}
                                            </Col>
                                        ))}
                                    </Row>
                                </>
                            )}
                        </Col>
                    </Row>


                }
                open={sidebarOpen}
                // onSetOpen={}
                docked={sidebarOpen}
                styles={{sidebar: {backgroundColor: "#fff", width: "40vh", marginTop: "12vh"}}}
            >
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    Open sidebar
                </button>
            </Sidebar>



                <Row
                    className='d-flex justify-content-center'>
                    <Col xs={11} className='d-flex justify-content-end'>
                        <Button
                            onClick={() => {
                                setShowAd(!showAd)
                            }}
                            className='bg-transparent global_blood-red global_cursor'>
                            {showAd && (
                                <p>x</p>
                            )}
                        </Button>
                    </Col>
                    <Col xs={11} className='d-flex justify-content-center px-1'>

                        {showAd && (
                            <ProductHeroAd products={products}/>
                        )}
                    </Col>

                    <Col xs={11} className='px-1 global_white-bg'>
                        <ProductsImgDisplay products={products}
                                            history={history}
                                            match={match}
                                            // keyword={keyword}
                                            pages={pages}
                                            page={page}
                                            updateCatProp={updateCat}
                                            updateManufacturerProp={updateManufacturer}
                        />
                    </Col>
                </Row>


        </>
    );

};

export default ProductsDisplay;


