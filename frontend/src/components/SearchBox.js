import React, {useState} from 'react'
import {Form, Button, Nav} from 'react-bootstrap'
import SocialIcons from "./SocialIcons";
import logoSearch from '../images/graphics/search-logo-small.png'

const SearchBox = ({history, searchClasses, formClasses, btnClasses, btnSize, searchSize, btnStyle, iconClass, imgClasses}) => {
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
                >
                </Form.Control>
                <Button type='submit' id='StickyHeader_SearchBox_searchImage' size={btnSize} className={btnClasses} style={btnStyle}
                >
                    <i className={iconClass}> </i>
                </Button>
            </Form>
        </>
    )
};

export default SearchBox