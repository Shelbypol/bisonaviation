import React, {useState} from 'react'
import {Form, Button, Nav} from 'react-bootstrap'
import SocialIcons from "./SocialIcons";

const SearchBox = ({history, searchClasses, formClasses, buttonClasses, btnSize, searchSize}) => {
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
            <SocialIcons/>
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
                <Button type='submit' size={btnSize} className={buttonClasses}
                >
                    <i style={{color: 'black'}} className="fas fa-search"> </i>
                </Button>
            </Form>
        </>
    )
};

export default SearchBox