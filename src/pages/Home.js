import React from 'react';
import { Grid, Row, Col } from '../layout/Grid';
import Card from '../styles/Card';
import styled from 'styled-components';
import banner from '../assets/banner.jpg';

const Banner = styled.img`
  height: 450px;
  display: flex;
  width: 100%;
`
const Header = styled.h2`
  margin: 60px auto;
  letter-spacing: 2.5px;
`

const Home = () => {
  return(
    <>
      <Grid>
        <Row height={'450px'} minHeight={'450px'}>
          <Banner src={banner} />
        </Row>
        <Row height={'100px'}>
          <Header>Featured</Header>
        </Row>
        <Row height={'750px'} minHeight={'450px'} padding={'45px'}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Row>
      </Grid>
    </>
  )
}
export default Home;