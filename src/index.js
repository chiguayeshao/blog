import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/content/Content';
import Avator from './components/avator/Avator';

ReactDOM.render(
  <Container>
    <Row>
      <Col><Header /></Col>
      <Col><Content /></Col>
      <Col><Avator /></Col>
      <Col><Footer /></Col>
    </Row>
  </Container>,
    document.getElementById('root')
);
