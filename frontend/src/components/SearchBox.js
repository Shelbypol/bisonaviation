import React, {  useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const SearchBox = ({ history }) => {
const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/search/${keyword}`);
        } else {
            history.push('/')
        }
        setKeyword('')
    };

    return (

        <Form onSubmit={submitHandler} inline className='m-auto'>

            <Form.Control
                type='text'
                name='searchBar'
                value={keyword}
                placeholder='Search for Products...'
                onChange={(e) => setKeyword(e.target.value)}

                className='searchBar searchInput ml-5 col-lg-10 col-xs-2'
            >
            </Form.Control>
            <Button type='submit' variant='outline-light' className='col-lg-2 searchButton px-3 py-0 rounded-right'><i style={{color: 'red'}} className="fas fa-search"> </i></Button>

        </Form>
    )
};

export default SearchBox