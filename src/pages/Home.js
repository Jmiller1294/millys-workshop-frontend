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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  letter-spacing: 2.5px;
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
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
  transition: 0.3s;

  &:hover {
    width: 670px;
    height: 380px;
  }
`
const TilesCon = styled.div`
  display: flex;
  height: 1000px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`
const Tile = styled.img`
  height: 380px;
  flex-basis: 32.5%;
`
const ContactForm = styled.form`
  display: flex;
  height: 100px;
  flex-basis: 50%;
`
const ContactInput = styled.input`
  height: 100px;
  flex-basis: 75%;
`

const SubmitButton = styled.input`
  height: 100px;
  flex-basis: 25%;
`
const IconCon = styled.div`
  display: flex;
`
const Icon = styled.img`
  height: 200px;
  width: 200px;
`
const IconLink = styled.a`

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
        <Row height={'1000px'} minHeight={'450px'} padding={'0 45px'}>
          <TilesCon>
            <Tile src={bannerPic2}></Tile>
            <Tile src={bannerPic2}></Tile>
            <Tile src={bannerPic2}></Tile>
            <Tile src={bannerPic2}></Tile>
            <Tile src={bannerPic2}></Tile>
            <Tile src={bannerPic2}></Tile>
          </TilesCon>
        </Row>
        <Row height={'450px'} minHeight={'400px'} padding={'0 45px'} background={'#000000'}>
  
        </Row>
        <Row height={'500px'} minHeight={'450px'} padding={'0 45px'}>
          <Title>Hello</Title>
        </Row>
        <Row>

        </Row>
        <Row height={'100px'} padding={'20px'} background={'#000000'}>

        </Row>
      </Grid>
    </>
  )
}
export default Home;