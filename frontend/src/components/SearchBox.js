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

                className='py-0 ml-lg-0 ml-sm-5 col-lg-10 col-sm-6 col-xs-4'
            >
            </Form.Control>
            <Button type='submit' className='col-lg-2 col-sm-2 col-xs-2 searchButton px-3 rounded-right'><i style={{color: 'red'}} className="fas fa-search"> </i></Button>

        </Form>
    )
};

export default SearchBox