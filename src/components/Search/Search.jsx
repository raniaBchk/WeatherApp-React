import React, { useState } from 'react'
import { Container, Form, Nav,Navbar } from "react-bootstrap";
import style from './search.module.css'
const Search = ({getTemp}) => {

    const [searchValue, setsearchValue] = useState('')

//   const handleButtonClick = (e) => {
//     e.preventDefault();
//    getTemp(searchValue)
//     setsearchValue('')
//   };


  const handleButtonClick = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getTemp(searchValue);
      setsearchValue('');
    }
  };
   
  return (
    <div>
    <Navbar className='my-3' bg="red" variant='red' expand="lg">
  
    <Container >
     
        <Form className="d-flex mt-3"  >
          <Form.Control
            type="search"
            placeholder="Search..."
            className={`me-2 ${ style.search}`}
            aria-label="Search" 
            value={searchValue} 
            onChange={(e) => setsearchValue(e.target.value)}
         
            onKeyDown={handleButtonClick}
          />
        
        </Form>
    
    </Container>
    </Navbar>
   
    
    </div>
  )
}

export default Search