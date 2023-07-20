import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
      <Row className='footer'>
        <Col xs={12} md={8}>
        CÔNG TY TNHH CINEMA VIETNAM <br/>
        Địa Chỉ: Tầng 2, ABC CINEMA - 28 Hai Bà Trưng, P.5, Q.3, TPHCM <br/>
        Hotline: 1900 6017
        COPYRIGHT @2023
        </Col>
        <Col xs={6} md={4}>
        Chăm sóc khách hàng <br/>
        Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
        Email hỗ trợ: hoidap@gmail.com
        </Col>
      </Row>
  )
}

