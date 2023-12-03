import React from 'react';
import { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS

import { Slide } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import Aos from 'aos';
import 'aos/dist/aos.css';

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import LazyLoad from 'react-lazy-load';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/all.css';



export function MyComponent({ id, tituloH2, descripcionA, descripcionB, imagenes, curiosidad }) {



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

  const driverObj = driver({
    showProgress: false,
    steps: [
      { popover: { title: 'Tutorial de la exposición', description: 'Te muestro estos pequeños pasos para entender mejor como funciona la galería de imágenes.' } },
      { element: '.container .panel:nth-child(1) .carousel-root', popover: { title: 'Fotos', description: 'Puedes deslizar de DERECHA a IZQUIERDA para recorrer entre las diferentes fotos.', side: "left", align: 'start' } },
      { element: '.container .panel:nth-child(1) h2', popover: { title: 'Título', description: 'Se mostrará el nombre de la pieza en este lugar.', side: "bottom", align: 'start' } },
      { element: '.container .panel:nth-child(1) .descripciones', popover: { title: 'Descripciones', description: 'Puedes saber un poco más de la pieza leyendo la descripción de esta.', side: "bottom", align: 'start' } },
      { popover: { title: 'Desplazamiento por la galería', description: 'Para moverte por la galería debes deslizar desde ABAJO hacia ARRIBA para que aparezcan nuevas piezas, con un desplazamiento SUAVE es suficiente.' } }
    ]
  });


  const bn22Ref = useRef(null);

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };



  const handleTutorialButtonClick = () => {

    if (isMobileDevice()) {
      driverObj.drive();
    }
  };

  const sendEmail = () => {
    


    const emailTo = 'josemarii2001@gmail.com'; // Correo de destino
    const emailSubject = 'Duda sobre ...'; // Asunto del correo


    const emailBody = `Hola Carmen 😊\nTengo dudas sobre...`;

    const emailLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(emailLink);
};







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
              {index === 0 ? (
                // La primera imagen se carga sin lazy loading
                <img
                  src={imagen}
                  srcSet={`${imagen} 300w, ${imagen} 600w, ${imagen} 1200w`}
                  sizes="(max-width: 320px) 280px,
               (max-width: 600px) 540px,
               800px"
                  alt={tituloH2}
                />
              ) : (
                // A partir de la segunda imagen, se aplica lazy loading solo en dispositivos móviles
                <LazyLoad offset={150} height={200} placeholder={<img src="placeholder.jpg" alt="placeholder" />}>
                  {navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) ? (
                    <img
                      src={imagen}
                      alt={tituloH2}
                    />
                  ) : (
                    // Si no es un dispositivo móvil, carga la imagen sin lazy loading
                    <img src={imagen} alt={tituloH2} />
                  )}
                </LazyLoad>
              )}
            </div>
          ))}
        </Carousel>
        <div id='letras'>
          <h2 data-aos="fade-down">{tituloH2}</h2>
          <br></br>
          <div className="descripciones">
            <p data-aos="fade-right">
              {descripcionA}
            </p>
            <p data-aos="fade-left">
              {descripcionB}
            </p>
          </div>
          <p data-aos="fade-up"> <button id='curiosidad' ref={bn22Ref} className="bn632-hover bn22" onClick={onToggle}>¡Curiosidad!</button></p>
          <div id="socialicons" data-aos="fade-up">
            <div class="socialicon">
              <a href="https://www.facebook.com/carmen.lozano.182/">
                <div class="facebookcolor socialiconcircle1"></div>
                <div class="socialiconcircle2">
                  <i class="fab fa-facebook-square facebook icons"></i>
                </div>
              </a>
            </div>
            <div class="socialicon">
              <a href="https://www.instagram.com/carmen_lozanocreativa/">
                <div class="instagramcolor socialiconcircle1"></div>
                <div class="socialiconcircle2">
                  <i class="fab fa-instagram-square instagram icons"></i>
                </div>
              </a>
            </div>
            <div class="socialicon" onClick={sendEmail}>
              <div class="gmailcolor socialiconcircle1"></div>
              <div class="socialiconcircle2">
                <i class="fas fa-envelope gmail icons"></i>
              </div>
            </div>
          </div>
          {isMobileDevice() && (
            <p data-aos="fade-up">
              <button id='tutorial' className="bn632-hover bn22" onClick={handleTutorialButtonClick}>
                ¡Tutorial!
              </button>
            </p>
          )}
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




