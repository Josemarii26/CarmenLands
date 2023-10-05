import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS
import Comoda1 from "./imagenes/ComodaFeria/Comoda1.jpg";
import Comoda2 from "./imagenes/ComodaFeria/Comoda2.jpg";
import Comoda3 from "./imagenes/ComodaFeria/Comoda3.jpg";
import Comoda4 from "./imagenes/ComodaFeria/Comoda4.jpeg";
import css from "./css.png";
import es6 from "./es6.png";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import Aos from 'aos';
import 'aos/dist/aos.css';



export function MyComponent ({ id, tituloH2, descripcionA, descripcionB, imagenes, curiosidad }) {

  console.log(id, tituloH2, descripcionA, descripcionB, imagenes, curiosidad);


  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 90, // Ajusta este valor para controlar cuándo se activan las animaciones
    });
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.closest('.slide-container') === null) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Agregar un event listener para cerrar el Slide cuando se presiona la tecla "Esc"
  useEffect(() => {
    const handleEscKey = (event) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    } else {
      window.removeEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);



  return (
    <>
      <div className='titulo'>
        <Carousel
          autoPlay={false}        // Iniciar reproducción automática
          infiniteLoop={false}   // Habilitar bucle infinito
          showThumbs={false}    // Ocultar miniaturas
          showStatus={false}     // Mostrar barra de estado    // Mostrar flechas de navegación
          showIndicators={true} // Mostrar indicadores
          centerMode={false}    // Modo de centro desactivado
          swipeable={true}     // Desactivar swipe
          emulateTouch={true}  // Emular touch
          showArrows={false}    // Mostrar flechas

        >
          
          {imagenes.map((imagen, index) => (
            <div className='imagenCarrusel' key={index}>
              <img src={imagen} alt={tituloH2} />
            </div>
          ))}
        </Carousel>
        <div>
          <h2 data-aos="fade-down">{tituloH2}</h2>
          <br></br>
          <p data-aos="fade-right">
            {descripcionA}
          </p>
          <p data-aos="fade-left">
            {descripcionB}
          </p>
          <p data-aos="fade-up"> <button className="bn632-hover bn22" onClick={onToggle}>Curiosidad!</button></p>
          <br></br>
        </div>
      </div>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <div>{curiosidad}</div>
        </Box>
      </Slide>
    </>
  )
}




