import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductCard.css';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'



export const ProductCard = ({ product, addToCart, onToggle, handleToggleCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    handleToggleCart();
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const isMobile = window.innerWidth < 1050;

  

  return (
    
    <div
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      
    >
      {isHovered || isMobile ? (
        <>
          {isMobile && (
            <div className='carousel-2-mobile'>
              <Carousel
                autoPlay={false}
                infiniteLoop={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                centerMode={false}
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
              >
                {product.images.map((imagen, index) => (
                  <div key={index}>
                    <img src={imagen} alt='imagen' />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {isHovered && !isMobile && (
            <div className='carousel-2'>
              <Carousel
                autoPlay={false}
                infiniteLoop={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                centerMode={false}
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
              >
                {product.images.map((imagen, index) => (
                  <div key={index}>
                    <img src={imagen} alt='imagen' />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          <h4>{product.name}</h4>
          <p>✅En Stock✅</p>
          <p id='description'>{product.description}</p>
          <Tag size={'md'} key={'md'} variant='solid' colorScheme='green' >{product.label}</Tag>

          <h3>{product.price} €</h3>
          <Button rightIcon={<ArrowForwardIcon />} onClick={handleAddToCart} colorScheme='green' variant='solid'>
            Añadir al carrito 
          </Button>

        </>
      ) : (
        <>
          <img src={product.images[0]} alt={product.name} />
          <h3>{product.name}</h3>
          <h4>{product.price} €</h4>
          <Button rightIcon={<ArrowForwardIcon />} onClick={handleAddToCart} colorScheme='green' variant='solid'>
            Añadir al carrito
          </Button>
        </>
      )}
    </div>
  );
};
