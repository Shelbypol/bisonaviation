import {Row} from "react-bootstrap";
import React from "react";

const ProductCategories = ({category, product_id}) => {

    const sortByCategoryHandler = () => {
       console.log(category)
    };

    return (
        <>
            <Row onClick={sortByCategoryHandler} xs={12} key={product_id} sm={12} md={6} lg={4}
                 className='global_cursor global_bisonFadedRedHover border-right'>
                <h6>
                    {category}
                </h6>
            </Row>

        </>
    )
};
export default ProductCategories