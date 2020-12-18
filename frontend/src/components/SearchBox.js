import React, {useState} from 'react'
import {Form, Button, Nav} from 'react-bootstrap'
import SocialIcons from "./SocialIcons";

const SearchBox = ({history, searchClasses, formClasses, btnClasses, btnSize, searchSize, iconStyle}) => {
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
                    placeholder='Search for Garmin Products...'
                    onChange={(e) => setKeyword(e.target.value)}
                    size={searchSize}
                    className={searchClasses}
                >
                </Form.Control>
                <Button type='submit' size={btnSize} className={btnClasses}
                >
                    <i className="fas fa-search" style={iconStyle}> </i>
                </Button>
            </Form>
        </>
    )
};

export default SearchBox