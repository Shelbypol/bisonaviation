import React from 'react'
import {Row} from 'react-bootstrap'
import Meta from "../Meta";
import ProductsPage from "./ProductsPage";
import ProductsDisplay from "./ProductsDisplay";

const ProductsScreen = ({match, history}) => {

    const sidebarMenu = {
        display: 'flex',
        alignItems: 'flex-start'
    };

    return (
        <>
                    <>
                        <Meta title='Bison | Products'/>

                        <ProductsDisplay/>


                        {/*<Row className='bg-white' style={sidebarMenu}>*/}
                        {/*    <ProductsPage match={match} history={history}/>*/}
                        {/*</Row>*/}
                    </>


        </>
    )
};

export default ProductsScreen;