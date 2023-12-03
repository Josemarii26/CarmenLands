import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import ScrollToTopButton from "./ScrollToTopButton";
import { MyComponent } from "./MyComponent";
import products from "./products.json";
import "./styles.css";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".panel");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
        
      },
    });

    let startTouchX;

    const handleTouchStart = (e) => {
      startTouchX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      
      const touchX = e.touches[0].clientX;
      const touchDeltaX = startTouchX - touchX;

      // Ajusta este valor según tus preferencias para hacer que el scroll sea más "duro"
      const scrollMultiplier = 20;

      // Ajusta la lógica de scroll según tus necesidades
      container.scrollLeft += touchDeltaX * scrollMultiplier;

      startTouchX = touchX;
    };

    // Agrega los eventos de touch al contenedor
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    // Elimina los eventos de touch al desmontar el componente
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  

  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h2>Hola, <br />¡soy Carmen!👋</h2>
          <h3>🎨Artista creativa y curiosa👩🏻‍🎨</h3>
          <br />
          <Button rightIcon={<ArrowDownIcon />} id="buttonIntro" colorScheme="white" variant="outline">
            Desliza para ver mi arte
          </Button>
        </div>
      </section>
      <div ref={containerRef} className="container">
        {products.products.map((product) => (
          <section className="panel blue" key={product.id} id={product.id}>
            <MyComponent {...product} />
          </section>
        ))}
      </div>
      
      <ScrollToTopButton />
    </>
  );
};
