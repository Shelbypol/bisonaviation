import React, {useState} from 'react'
import {Form, Button, Nav} from 'react-bootstrap'

const SearchBox = ({history, navClasses ,searchClasses, formClasses, buttonClasses, buttonStyle, searchSize}) => {
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
            <Form onSubmit={submitHandler} inline className={searchClasses}>
                <Form.Control
                    type='text'
                    name='searchBar'
                    value={keyword}
                    placeholder='Search for Garmin Products...'
                    onChange={(e) => setKeyword(e.target.value)}
                    size={searchSize}
                    className={formClasses}
                >
                </Form.Control>
                <Button type='submit' size='lg'
                        style={{buttonStyle}} className={buttonClasses}
                >
                    <i style={{color: 'black'}} className="fas fa-search"> </i>
                </Button>
            </Form>
    )
};

export default SearchBox