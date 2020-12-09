import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const SearchBox = ({history}) => {
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

        <Form onSubmit={submitHandler} inline className='ml-auto searchBar col-sm-5'>
                <Form.Control
                    type='text'
                    name='searchBar'
                    value={keyword}
                    placeholder='Search for Products...'
                    onChange={(e) => setKeyword(e.target.value)}
                    size='sm'
                    className='rounded col-sm-9 '
                >
                </Form.Control>
                <Button type='submit' size='sm'
                        className='col-sm-1'
                >
                    <i style={{color: 'red'}} className="fas fa-search"> </i>
                </Button>
        </Form>
    )
};

export default SearchBox