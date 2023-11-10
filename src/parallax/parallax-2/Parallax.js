import "./styles.css";


import { MyComponent } from "./MyComponent";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { useEffect, useRef, useState } from "react";
import products from "./products.json";


import { Overlay } from "./Overlay";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import ScrollToTopButton from "./ScrollToTopButton";


export const Parallax = () => {

  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);
  


  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h2>Hola, <br></br>soy Carmen!👋</h2>
          <h3>🎨Artista creativa y curiosa👩🏻‍🎨</h3>
          <br></br>
          <Button rightIcon={<ArrowDownIcon />}  colorScheme='white' variant='outline'>
            Desliza para ver mi arte
          </Button>
          
        </div>
      </section>
      <div ref={containerRef} className="container">
        {products.products.map((product) => (
          <section className="panel blue" key={product.id}>
            <MyComponent {...product} />
          </section>
        ))}


      </div>

      <section className="footer">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your email" />

          <textarea rows={6} placeholder="Message" />
          <button>SUBMIT</button>
          
        </form>
      </section>
      <ScrollToTopButton />
    </>
  );
};
