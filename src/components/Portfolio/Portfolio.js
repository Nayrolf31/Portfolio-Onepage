import React from 'react';
// import { Image } from 'react-native';

import './Portfolio.css'

import imageprojet from '../../images/page.jpg'

function Portfolio() {

  const ImageProjet = "imageprojet";

  return (


    <div className="page">
      <h1 className='portfolio_title'>Portfolio</h1>
      <div className='portfolio_cards'>
      {/* <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <Image src={{ImageProjet}} />
          </a>
        </article> */}
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
        <article>
          <a className='card' href='#'>
            <h2 className='card_title'>projet</h2>
            <img src={imageprojet} alt='photo-projet'></img>
          </a>
        </article>
      </div>
    </div>
  );
}

export default Portfolio;