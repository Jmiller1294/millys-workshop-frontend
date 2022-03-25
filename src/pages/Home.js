import React from 'react';
import styled from 'styled-components';
import banner from '../assets/banner.jpg';

const Banner = styled.img`
  display: flex;
  width: 100%;
`

const Home = () => {
  return(
    <div>
      <Banner src={banner} />
    </div>
  )
}
export default Home;