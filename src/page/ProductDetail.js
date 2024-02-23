import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  const [getsize, setsize] = useState("사이즈 선택");
  const [prdouctDetail, setProductDetail] = useState(null);
  const {id} = useParams();
  const dropdownSize = (size) => {  
    setsize(size);
  }
  const getProductDetail= async ()=>{
    const url = `https://my-json-server.typicode.com/Jseungwoo/adererror-react/products/${id}`
    let res = await fetch(url);
    let data = await res.json();
    setProductDetail(data);
    console.log(prdouctDetail);
  }

  useEffect(()=>{
    getProductDetail();
  },[]);

  return (
    <Container>
    <Row>
      <Col className='product-img'>
      <img src={prdouctDetail?.img}></img>
      </Col>
      <Col className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
    <div className='product-name mb-2' >{prdouctDetail?.title}</div>
    <div className='mb-2'>{prdouctDetail?.price.toLocaleString('ko-KR', { currency: 'KRW' })}</div>
    <Dropdown className='mb-3'>
      <Dropdown.Toggle variant="dropdown-basic-button" id="dropdown-basic">
        {getsize}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {prdouctDetail?.size.map((size) => (
        <Dropdown.Item onClick={()=>{dropdownSize(size)}}>{size}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
    <button style={{ width: '50%', borderRadius: '5px' }}>추가</button>
</Col>
    </Row>
    </Container>
  )
}

export default ProductDetail
