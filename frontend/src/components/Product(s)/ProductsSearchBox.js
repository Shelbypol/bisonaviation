import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const ProductsSearchBox = ({history, searchClasses, formClasses, btnClasses, btnSize, searchSize, btnStyle, iconClass, inputStyle, imgClasses}) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/')
        }
        setKeyword('')
    };

    return (
        <>
            <Form onSubmit={submitHandler} inline className={formClasses}>
                <Form.Control
                    type='text'
                    name='searchBar'
                    value={keyword}
                    placeholder='search...'
                    onChange={(e) => setKeyword(e.target.value)}
                    size={searchSize}
                    className={searchClasses}
                    style={inputStyle}
                >
                </Form.Control>
                <Button type='submit' size={btnSize} className={btnClasses} style={btnStyle}
                >
                    <i className={iconClass}> </i>
                </Button>
            </Form>
        </>
    )
};

export default ProductsSearchBox