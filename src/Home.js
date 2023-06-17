import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return(
    <div className='home'>
        <div className='home__container'>
            <img
              className='home__image'
              src='https://store.crunchyroll.com/dw/image/v2/BDGC_PRD/on/demandware.static/-/Sites-CrunchyrollUS-Library/default/dw5cf61a63/Home%20Page%20Assets/Desktop%20Slider_June%202023%20One%20Piece%20Promo_4000x1000.jpg'
              alt=''
        />

        <div className='home__row'>
            <Product 
            title='Naruto Shippuden - Naruto Uzumaki Precious G.E.M. Series Figure (Wind God Ver.)'
            price={19.99}
            image='https://store.crunchyroll.com/dw/image/v2/BDGC_PRD/on/demandware.static/-/Sites-crunchyroll-master-catalog/default/dwdca0fb8d/Figures/4535123836510/4535123836510%20(1).jpg?sw=300&sh=300&sm=fit'
            />
            <Product 
            title='Naruto Shippuden - Sasuke Uchiha Precious G.E.M. Series Figure (Thunder God Ver.)'
            price={29.99}
            image='https://store.crunchyroll.com/on/demandware.static/-/Sites-crunchyroll-master-catalog/default/dwb5ca3daa/Figures/4535123836503/4535123836503%20(1).jpg'
            />

        </div>
        <div className='home__row'>
            <Product 
            title='Puma x Mercedes AMG Petronas F1'
            price={89.99}
            image='https://m.media-amazon.com/images/I/315x67A6IRL.jpg'
            />
            <Product 
            title='Jordan Retro 6 G NRG'
            price={150.99}
            image='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb726963-0b84-4ed8-8cf4-44cab2a4ad6c/jordan-retro-6-g-nrg-golf-shoes-Wld345.png'
            />
            <Product 
            title='Air Jordan 1 Mid SE'
            price={199.99}
            image='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb1030a9-2a47-437e-8970-e1530bccebfc/air-jordan-1-mid-se-shoes-lCj12k.png'
            />
        </div>

        <div className='home__row'>
            <Product 
            title='iPhone 14 Pro Max'
            price={1009.99}
            image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896'
            />
        </div>
      </div>
    </div>

  );
}

export default Home
