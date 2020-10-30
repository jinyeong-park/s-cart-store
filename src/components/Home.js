import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='' alt='' />

        <div className='home_row'>

          <Product
            title='Diptyque Doson'
            price={152}
            image='https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen'
            rating={5}
            />
          <Product />
        </div>

        <div className='home_row'>

          <Product />
          <Product />
          <Product />
        </div>

        <div className='home_row'>
          <Product />

        </div>
      </div>
    </div>
  )
}

export default Home
