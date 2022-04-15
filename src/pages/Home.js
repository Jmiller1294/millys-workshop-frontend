import React from 'react';
import { Grid, Row, Col } from '../layout/Grid';
import Card from '../styles/Card';
import styled from 'styled-components';
import banner from '../assets/banner.jpg';
import bannerPic1 from '../assets/small-banner-pic1.jpg';
import bannerPic2 from '../assets/small-banner-pic2.jpg';
import bannerPic3 from '../assets/small-banner-pic3.jpg';
import bannerPic4 from '../assets/small-banner-pic4.jpg';

const Banner = styled.img`
  height: 450px;
  display: flex;
  width: 100%;
`
const Header = styled.h2`
 
  margin: 75px auto 0 auto;
  letter-spacing: 2.5px;
`
const BannerCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 800px;
  margin: 45px;
`
const SmallBanner = styled.img`
  width: 660px;
  height: 370px;
`

const Home = () => {
  return(
    <>
      <Grid>
        <Row height={'450px'} minHeight={'450px'}>
          <Banner src={banner} />
        </Row>
        <Row height={'150px'}>
          <Header>Featured</Header>
        </Row>
        <Row height={'600px'} minHeight={'450px'} padding={'0 45px'}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Row>
        <Row height={'800px'}>
          <BannerCon>
            <SmallBanner src={bannerPic1}></SmallBanner>
            <SmallBanner src={bannerPic2}></SmallBanner>
            <SmallBanner src={bannerPic3}></SmallBanner>
            <SmallBanner src={bannerPic4}></SmallBanner>
          </BannerCon>
        </Row>
        <Row height={'150px'}>
          <Header>New Boxes</Header>
        </Row>
        <Row height={'600px'} minHeight={'450px'} padding={'0 45px'}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Row>
        <Row height={'600px'} minHeight={'450px'} padding={'0 45px'}>
          
        </Row>
      </Grid>
    </>
  )
}
export default Home;