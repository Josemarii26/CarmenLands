import React, { useState, useEffect } from 'react';
import { Navbar } from './navbar/Navbar';
import { ProductCard } from './tienda/ProductCard';
import { SearchBar } from './tienda/SearchBar';
import { Cart } from './tienda/Cart';
import { Slide } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {
  Tag
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'


import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from './parallax/parallax-2/ScrollToTopButton';
import { Navbar2 } from './navbar/Navbar2';


const initialProducts = [
  {
    id: 1,
    name: 'Butterflies - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/q5R1fJZ/shutterstock-1807575772-2-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/u/butterflieschair_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 2,
    name: 'Distressed Tile - Mint Papel de seda ',
    price: 21.95,
    images: [
      'https://i.ibb.co/yfmjkHz/distressedtile-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/d/i/distressedtileoriginalsizeiii_5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/d/i/distressedtileoriginalsizeiiii_5000x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 3,
    name: 'Green Leaves - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/5T7LcJy/untitleddesign-5000x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/r/greenleaves1080x1080cropped2_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 4,
    name: 'Lace - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/5RLt5VP/lace-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/laceoriginal1080x1080_2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/laceoriginalsizeii_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 5,
    name: 'Lemons - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/khSC1hF/lemons-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/e/lemons1080x1080ii_5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/e/lemons1080x1080iii_5000x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 6,
    name: 'Moroccan Tile - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/G3dCCPT/untitleddesign-85-5000x.png',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moroccantileoriginalsize_002_800x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 7,
    name: 'Pastel Florals - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/WBs1RN0/pastelflorals-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/pastelfloralsoriginalsizeii_2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/pastelfloralsoriginalsizeiii_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 8,
    name: 'Pink Peacocks - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/gjwf2Rm/pinkpeacocks-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/u/n/untitleddesign_82_5000x.png',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/i/pinkpeacocksoriginalsizei_800x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 9,
    name: 'White Flower - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/QK1Wgyh/untitleddesign-83-2048x.png',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 10,
    name: 'Yellow Chinoiserie - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/Lkrkz6K/yellow-chinoiserie.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/e/yellow_chinoiserie_1080x1080.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/e/yellow_chinoiserie_1080x1080_002_ii.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 11,
    name: 'A peacock pair - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/37W2BzK/img-7536-1-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 12,
    name: 'A peacock pair - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/37W2BzK/img-7536-1-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 13,
    name: 'A Vintage Christmas - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/frGsm6p/img-7533.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 14,
    name: 'A Vintage Christmas - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/frGsm6p/img-7533.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 15,
    name: 'Octopus - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/kJ7Z1jn/img-7532.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 16,
    name: 'Octopus - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/kJ7Z1jn/img-7532.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 17,
    name: 'Romantic Roses - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/M14fxsC/img-7537-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 18,
    name: 'Romantic Roses - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/M14fxsC/img-7537-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 19,
    name: 'Santa Claus - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/xsfm4Vw/img-7534-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 20,
    name: 'Santa Claus - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/xsfm4Vw/img-7534-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 21,
    name: "Santa's Sleigh - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)",
    price: 29.95,
    images: [
      'https://i.ibb.co/WpVJLNH/img-7535-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 22,
    name: "Santa's Sleigh - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)",
    price: 19.95,
    images: [
      'https://i.ibb.co/WpVJLNH/img-7535-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 23,
    name: 'Still Life - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/GFBqYJr/img-7538-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 24,
    name: 'Still Life - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/GFBqYJr/img-7538-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 25,
    name: 'Air Ballons - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/D1RN8s3/balloons-edited-edcd6b5f-3617-4498-8172-3dfa630e66cd-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/a/balloons_brushedbybrandy_5000x_3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/a/balloons_vita_nova.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/a/balloons_rusticrevival1_5000x_3.jpg'
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 26,
    name: 'Air Ballons - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/D1RN8s3/balloons-edited-edcd6b5f-3617-4498-8172-3dfa630e66cd-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/a/balloons_brushedbybrandy_5000x_3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/a/balloons_vita_nova.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/a/balloons_rusticrevival1_5000x_3.jpg'
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 27,
    name: 'Angel - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/s206fdn/angelmin-edited-2048x.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 28,
    name: 'Angel - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/s206fdn/angelmin-edited-2048x.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 29,
    name: 'Autumn - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/j60zry1/autumn-edited-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/a/cab9b7f5-393e-48c7-94c5-01fbaf9c7128.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/6/26e5bfcd-b0a5-44e5-b2be-ed2a8742df7d.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 30,
    name: 'Autumn - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/j60zry1/autumn-edited-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/a/cab9b7f5-393e-48c7-94c5-01fbaf9c7128.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/6/26e5bfcd-b0a5-44e5-b2be-ed2a8742df7d.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 31,
    name: 'Baroque Flowers - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/VNhB95n/366049144-661542616010101-6498324224375578659-n-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366741359_10160046350692499_4150981634400157894_n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 32,
    name: 'Baroque Flowers - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/VNhB95n/366049144-661542616010101-6498324224375578659-n-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366741359_10160046350692499_4150981634400157894_n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 33,
    name: 'Beautiful Woman in Gold - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/85PZg1Q/beautifulwomaningold-edited-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/e/beautifulgoldlady_mintbymichelle_5000x_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 34,
    name: 'Beautiful Woman in Gold - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/85PZg1Q/beautifulwomaningold-edited-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/e/beautifulgoldlady_mintbymichelle_5000x_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 35,
    name: 'Black Widow - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/4gRymp3/366056021-661542639343432-450530031615092027-n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 36,
    name: 'Black Widow - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/4gRymp3/366056021-661542639343432-450530031615092027-n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 37,
    name: 'Blue Fish - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/YpJjwyg/bluefish-edited-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/5/0/50c4be32-fa5b-4c05-9ad4-8b8ea471df05.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 38,
    name: 'Blue Fish - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/YpJjwyg/bluefish-edited-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/5/0/50c4be32-fa5b-4c05-9ad4-8b8ea471df05.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 39,
    name: 'Coastal Blue - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/LzDX4tT/coastalbluemint-edited-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/o/coastal_ardorrelovedfurniture_5000x_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 40,
    name: 'Coastal Blue - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/LzDX4tT/coastalbluemint-edited-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/o/coastal_ardorrelovedfurniture_5000x_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 41,
    name: 'Colour me bright - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/WDNMZsx/colourmebright-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/o/colourmebright-mintbymichelle_4_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/0/f00309ab-9c58-44e6-8059-85b071a393a3.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 42,
    name: 'Colour me bright - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/WDNMZsx/colourmebright-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/o/colourmebright-mintbymichelle_4_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/0/f00309ab-9c58-44e6-8059-85b071a393a3.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 43,
    name: 'David - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/4tRnXCw/david-0c84143d-8ede-4e1a-8f94-addf9ef90943-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/d/a/david-indigocreekstudios_800x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 44,
    name: 'David - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/4tRnXCw/david-0c84143d-8ede-4e1a-8f94-addf9ef90943-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/d/a/david-indigocreekstudios_800x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 45,
    name: 'Fairy Princess - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/nR1vwRQ/366055935-661542689343427-1532617201355742453-n-1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 46,
    name: 'Fairy Princess - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/nR1vwRQ/366055935-661542689343427-1532617201355742453-n-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 47,
    name: 'Fairy Queen - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/SdSNtzz/fairyqueen-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/2/128692336_920247328508639_7016084601504127000_n_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 48,
    name: 'Fairy Queen - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/SdSNtzz/fairyqueen-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/2/128692336_920247328508639_7016084601504127000_n_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 49,
    name: 'Ferris Wheel - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/FhM25LH/ferriswheel-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/e/ferriswheel-m.ovintage_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1614983301982_600x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 50,
    name: 'Ferris Wheel - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/FhM25LH/ferriswheel-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/e/ferriswheel-m.ovintage_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1614983301982_600x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 51,
    name: 'Field of Mauve - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/9g5TMSn/366014537-661542776010085-3766395476317488490-n-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366943566_10226867341742574_5579217177591406212_n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 52,
    name: 'Field of Mauve - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/9g5TMSn/366014537-661542776010085-3766395476317488490-n-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366943566_10226867341742574_5579217177591406212_n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 53,
    name: 'Fishing for ideas - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/RSmrChx/fishingforideas-3c2819d0-60ec-4844-98dd-7cc187af39b3-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/m/img_20210304_192436_055_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/m/img_20210227_142519_673_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 54,
    name: 'Fishing for ideas - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/RSmrChx/fishingforideas-3c2819d0-60ec-4844-98dd-7cc187af39b3-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/m/img_20210304_192436_055_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/m/img_20210227_142519_673_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 55,
    name: 'Flamingo - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/bKwRC0Q/flamingomintdecoupagepaper-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flamingo_shedeleven_5000x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flamingo_jonathonmarcmedes_paintedlove_5000x_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 56,
    name: 'Flamingo - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/bKwRC0Q/flamingomintdecoupagepaper-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flamingo_shedeleven_5000x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flamingo_jonathonmarcmedes_paintedlove_5000x_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 57,
    name: 'Flying birds - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/0mr9kDr/flyingbirds-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flyingbirds-katjaskreidefarbenkabinett_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flyingbirds-lotustheorydesign_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 58,
    name: 'Flying birds - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/0mr9kDr/flyingbirds-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flyingbirds-katjaskreidefarbenkabinett_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/l/flyingbirds-lotustheorydesign_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 59,
    name: 'Foil Bird - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/CVVgf0H/foilbird-700ae20b-dd38-4919-8768-fea3427bc5ea-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/o/foilbirdsvon3_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/e/reloverestorefoilbirds_800x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 60,
    name: 'Foil Bird - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/CVVgf0H/foilbird-700ae20b-dd38-4919-8768-fea3427bc5ea-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/o/foilbirdsvon3_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/e/reloverestorefoilbirds_800x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 61,
    name: 'Forrest Fantasy - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/t3VKbRh/fantasyforest-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/7/3718cbc1-aac8-443b-bf08-23e42e578073.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 62,
    name: 'Forrest Fantasy - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/t3VKbRh/fantasyforest-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/7/3718cbc1-aac8-443b-bf08-23e42e578073.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 63,
    name: 'Frida - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/BVxRt37/frida-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/7/171351119_1403679133296977_985850381178583530_n_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/0/20210401_135911_5000x.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 64,
    name: 'Frida - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/BVxRt37/frida-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/7/171351119_1403679133296977_985850381178583530_n_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/0/20210401_135911_5000x.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 65,
    name: 'Future Fox - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/j5J0sBp/f0d09cd9-41e4-48f8-b183-31429678db59-1-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/5/6/562817b0-2ad7-4e53-a181-b78dffc446a4_1_1.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/o/fox.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 66,
    name: 'Future Fox - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/j5J0sBp/f0d09cd9-41e4-48f8-b183-31429678db59-1-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/5/6/562817b0-2ad7-4e53-a181-b78dffc446a4_1_1.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/o/fox.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 67,
    name: 'Geisha - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/sPsNp0x/geishamint-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/e/ge.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/e/geisha_plainjanefurniture_5000x_3.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 68,
    name: 'Geisha - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/sPsNp0x/geishamint-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/e/ge.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/e/geisha_plainjanefurniture_5000x_3.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  // segunda pagina
  {
    id: 69,
    name: 'Ginger jars - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/PFrd4HN/gingerjars-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/gingerjars-girlinbluedesigns_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/5/1/51520d11-5f81-4bcd-bfc8-afa8522f548d.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 70,
    name: 'Ginger jars - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/PFrd4HN/gingerjars-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/gingerjars-girlinbluedesigns_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/5/1/51520d11-5f81-4bcd-bfc8-afa8522f548d.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 71,
    name: 'Girl on a Swing - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/Bt5bfWK/girlonaswing-600x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/girlonaswing-greensprucedesigns_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1610753038710_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 72,
    name: 'Girl on a Swing - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/Bt5bfWK/girlonaswing-600x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/girlonaswing-greensprucedesigns_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1610753038710_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 73,
    name: 'Girl with a Lute - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/nmQV5C4/girlwithalute-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/girlwithalute-vanechstudio_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/girl_with.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 74,
    name: 'Girl with a Lute - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/nmQV5C4/girlwithalute-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/girlwithalute-vanechstudio_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/i/girl_with.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 75,
    name: 'Golden Bloom 1 - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/pfPx9V7/366058725-661542446010118-8595553839926230971-n-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366685604_663444695819893_1334297716913599544_n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 76,
    name: 'Golden Bloom 1 - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/pfPx9V7/366058725-661542446010118-8595553839926230971-n-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366685604_663444695819893_1334297716913599544_n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 77,
    name: 'Golden Bloom 2 - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/pfPx9V7/366058725-661542446010118-8595553839926230971-n-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366685604_663444695819893_1334297716913599544_n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 78,
    name: 'Golden Bloom 2 - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/pfPx9V7/366058725-661542446010118-8595553839926230971-n-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366685604_663444695819893_1334297716913599544_n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 79,
    name: 'Gumnuts - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/jRvNCnZ/gumnuts-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/a/2/a240f39d-7f2d-4b34-a8f1-c3886319beac.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/u/gum9.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 80,
    name: 'Gumnuts - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/jRvNCnZ/gumnuts-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/a/2/a240f39d-7f2d-4b34-a8f1-c3886319beac.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/u/gum9.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 81,
    name: 'Haunted House - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/L0P9VWC/366056924-661542512676778-1741246542987175155-n-1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 82,
    name: 'Haunted House - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/L0P9VWC/366056924-661542512676778-1741246542987175155-n-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 83,
    name: 'Haunted House 2 - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/xJ45cFt/366024500-661542432676786-7609682456286831096-n-1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 84,
    name: 'Haunted House 2 - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/xJ45cFt/366024500-661542432676786-7609682456286831096-n-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 85,
    name: 'Herd of Horses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/CHbPVdB/herdofhorses-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/h/e/herdofhorseskarie_2048x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 86,
    name: 'Herd of Horses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/CHbPVdB/herdofhorses-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/h/e/herdofhorseskarie_2048x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 87,
    name: 'High Wire - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/MP7kStH/highwire-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/h/i/highwire-rockycrystal_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/h/i/highwire-withlovefurniture_2_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 88,
    name: 'High Wire - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/MP7kStH/highwire-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/h/i/highwire-rockycrystal_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/h/i/highwire-withlovefurniture_2_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 89,
    name: 'Ice Skating - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/2SWrhTP/iceskating-a94dc5cb-b4fd-486a-b45f-6a05047bb755-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/c/ice3.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/c/ice1.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 90,
    name: 'Ice Skating - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/2SWrhTP/iceskating-a94dc5cb-b4fd-486a-b45f-6a05047bb755-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/c/ice3.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/c/ice1.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 91,
    name: 'Istanbul - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/3RYCmhY/ista1-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/s/ista3.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/f/2f7cfc02-e21d-4427-888a-f65740d00149.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 92,
    name: 'Istanbul - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/3RYCmhY/ista1-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/i/s/ista3.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/f/2f7cfc02-e21d-4427-888a-f65740d00149.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 93,
    name: 'Jersey - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/NjYSRbj/jersey-91dd793e-8dda-4d0b-8987-ce201aeae11b-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/j/e/jers.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/j/e/jerseybelen_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 94,
    name: 'Jersey - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/NjYSRbj/jersey-91dd793e-8dda-4d0b-8987-ce201aeae11b-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/j/e/jers.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/j/e/jerseybelen_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 95,
    name: "Karen's Technicolour Bouquet - Papel para decoupage - A1",
    price: 29.95,
    images: [
      'https://i.ibb.co/Ky9MmPX/karen-stechnicolourbouquet-89863ae0-db0a-4bcc-873c-d742cc6ca469-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/k/a/karen_stechnicolourbouquet-rockycrystalinteriors_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/k/a/karenspiece_2048x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 96,
    name: "Karen's Technicolour Bouquet - Papel para decoupage - A3",
    price: 19.95,
    images: [
      'https://i.ibb.co/Ky9MmPX/karen-stechnicolourbouquet-89863ae0-db0a-4bcc-873c-d742cc6ca469-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/k/a/karen_stechnicolourbouquet-rockycrystalinteriors_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/k/a/karenspiece_2048x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 97,
    name: 'Lady and the red Car - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/JdwgTzZ/ladyandtheredcar-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/lady1.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/ladyandtheredcar-rustybluerefashionedfurniture_2048x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 98,
    name: 'Lady and the red Car - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/JdwgTzZ/ladyandtheredcar-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/lady1.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/ladyandtheredcar-rustybluerefashionedfurniture_2048x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 99,
    name: 'Lady with a Parasol - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/dbg5PVb/ladywithaparasol-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/ladywithaparasol_mintbymichelle_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/ladywithaparasol-calle_sredesigns_800x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 100,
    name: 'Lady with a Parasol - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/dbg5PVb/ladywithaparasol-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/ladywithaparasol_mintbymichelle_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/ladywithaparasol-calle_sredesigns_800x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 101,
    name: "Leonardo's Lady - Papel para decoupage - A1",
    price: 29.95,
    images: [
      'https://i.ibb.co/DC4nT4M/leonardo-slady-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/8/289866572_1729002447459443_6105609617610471811_n_2048x_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/293055542_1522727511490550_1690467979509803672_n_2048x_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 102,
    name: "Leonardo's Lady - Papel para decoupage - A3",
    price: 19.95,
    images: [
      'https://i.ibb.co/DC4nT4M/leonardo-slady-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/8/289866572_1729002447459443_6105609617610471811_n_2048x_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/293055542_1522727511490550_1690467979509803672_n_2048x_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 103,
    name: 'Madame Le Fevre - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/BB1tbK8/madamelefevre-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/a/madamelefevre_vintage4love_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/a/madamelefevre-therockycyrstal_2048x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 104,
    name: 'Madame Le Fevre - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/BB1tbK8/madamelefevre-2048x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/a/madamelefevre_vintage4love_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/a/madamelefevre-therockycyrstal_2048x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 105,
    name: 'Majestic Horses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/RCdZQCr/366217108-661542319343464-3394953917293780457-n-1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 106,
    name: 'Majestic Horses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/RCdZQCr/366217108-661542319343464-3394953917293780457-n-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 107,
    name: 'Milkmaid - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/s11MdTp/milkmaid-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/i/milkmaid-ladystefani_s_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/i/milkmaid-ladystefani_s_800x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 108,
    name: 'Milkmaid - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/s11MdTp/milkmaid-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/i/milkmaid-ladystefani_s_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/i/milkmaid-ladystefani_s_800x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 109,
    name: 'Moody Florals - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/7WWJxkY/moodyflorals-f72f3f0d-4427-4921-aaa9-ab4f086f6f39-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moodyflorals-secondchancebymisty_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moodyflowers_ahomelessordinary_5000x_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 110,
    name: 'Moody Florals - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/7WWJxkY/moodyflorals-f72f3f0d-4427-4921-aaa9-ab4f086f6f39-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moodyflorals-secondchancebymisty_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moodyflowers_ahomelessordinary_5000x_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 111,
    name: 'Moody Florals II - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/BzzWYt5/moodyflorals2-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moo.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moodyfloralsii-furnitureartstudio_2048x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 112,
    name: 'Moody Florals II - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/BzzWYt5/moodyflorals2-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moo.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moodyfloralsii-furnitureartstudio_2048x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 113,
    name: "Nanas's Pearls - Papel para decoupage - A1",
    price: 29.95,
    images: [
      'https://i.ibb.co/17LVD8B/nannaspearls-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/n/a/nanna_spearls-shedeleven_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/n/a/nanna_spearls-karenjohnson_2048x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 114,
    name: "Nanas's Pearls - Papel para decoupage - A3",
    price: 19.95,
    images: [
      'https://i.ibb.co/17LVD8B/nannaspearls-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/n/a/nanna_spearls-shedeleven_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/n/a/nanna_spearls-karenjohnson_2048x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 115,
    name: 'New York - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/qxnHvNZ/newyork-newyork-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/327160887_506607991662555_4548765114453787819_n_3_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326031905_735997824428526_3533938499587211216_n_3_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 116,
    name: 'New York - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/qxnHvNZ/newyork-newyork-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/327160887_506607991662555_4548765114453787819_n_3_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326031905_735997824428526_3533938499587211216_n_3_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 117,
    name: 'Owl - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/LnCb5sc/owl-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/1/312156042_10224914131313534_2543767473402250976_n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 118,
    name: 'Owl - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/LnCb5sc/owl-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/1/312156042_10224914131313534_2543767473402250976_n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 119,
    name: 'Palm Trees - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/JF8GtNq/palmtrees-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/palmtreepiece_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/palmtrees-sweetsimple_southern_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 120,
    name: 'Palm Trees - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/JF8GtNq/palmtrees-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/palmtreepiece_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/palmtrees-sweetsimple_southern_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 121,
    name: 'Parrot - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/FXKqZkS/parrot-5000x-1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 122,
    name: 'Parrot - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/FXKqZkS/parrot-5000x-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 123,
    name: 'Peacok - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/rwTxCXJ/peacock-5000x-3.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 124,
    name: 'Peacok - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/rwTxCXJ/peacock-5000x-3.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 125,
    name: 'Pensive Girl - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/hMDG5Fk/pensivegirl-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/295679256_2010417475833418_35798395470260686_n_2048x_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/292521851_356177113354374_3599241429876951554_n_2048x_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 126,
    name: 'Pensive Girl - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/hMDG5Fk/pensivegirl-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/295679256_2010417475833418_35798395470260686_n_2048x_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/292521851_356177113354374_3599241429876951554_n_2048x_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 127,
    name: 'Pheasant - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/307VtFS/pheasant-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/4/345071211_5558254497608043_8501017732322207468_n_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/8/2/8213d5ac-3ccf-4fef-b893-6729e2a92d3e.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 128,
    name: 'Pheasant - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/307VtFS/pheasant-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/4/345071211_5558254497608043_8501017732322207468_n_800x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/8/2/8213d5ac-3ccf-4fef-b893-6729e2a92d3e.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 129,
    name: 'Poppies - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/5GdzYCP/poppies-43ee5dc8-0b06-4eab-904b-0092c6d9997d-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1614982524164_5000x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1613119323536_5000x_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 130,
    name: 'Poppies - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/5GdzYCP/poppies-43ee5dc8-0b06-4eab-904b-0092c6d9997d-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1614982524164_5000x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1613119323536_5000x_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 131,
    name: 'Renaissance Flowers - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/3YMkQ80/renaissanceflowers-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/e/renaissanceflowers_mintbymichelle_5000x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/e/renaissance_flowers_mint_by_michelle_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 132,
    name: 'Renaissance Flowers - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/3YMkQ80/renaissanceflowers-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/e/renaissanceflowers_mintbymichelle_5000x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/e/renaissance_flowers_mint_by_michelle_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 133,
    name: 'Rita - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/Jc9H6cJ/rita-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/325665118_927835871717153_647067213658958849_n_3_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326559168_691940279249947_2836736977023195161_n_3_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 134,
    name: 'Rita - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/Jc9H6cJ/rita-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/325665118_927835871717153_647067213658958849_n_3_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326559168_691940279249947_2836736977023195161_n_3_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 135,
    name: 'Road to Louveciennes - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/jVhwtPq/roadtolouveciennes-67acc40c-db4d-4b8d-b3aa-076b9ac6c52c-5000x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/o/roadtolouveciennes_restored4u_5000x_3.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 136,
    name: 'Road to Louveciennes - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/jVhwtPq/roadtolouveciennes-67acc40c-db4d-4b8d-b3aa-076b9ac6c52c-5000x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/r/o/roadtolouveciennes_restored4u_5000x_3.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 137,
    name: 'Sail Away - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/1fwY7G7/sailaway-5000x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326197437_2374292669391328_9067603571220334981_n_2_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326348577_473275531494954_6632890810279363332_n_2_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 138,
    name: 'Sail Away - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/1fwY7G7/sailaway-5000x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326197437_2374292669391328_9067603571220334981_n_2_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/2/326348577_473275531494954_6632890810279363332_n_2_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 139,
    name: 'Sepia Horses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/68h924g/sepiahorses-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/e/sepiahorses_finderskeepersbarn_5000x_3.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 140,
    name: 'Sepia Horses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/68h924g/sepiahorses-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/e/sepiahorses_finderskeepersbarn_5000x_3.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 141,
    name: 'Sepia Tree - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/mRXJdzb/sepiatree-600x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/e/sepia_tree_girl_in_blue_designs_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/e/sepiatree_shedeleven_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 142,
    name: 'Sepia Tree - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/mRXJdzb/sepiatree-600x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/e/sepia_tree_girl_in_blue_designs_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/e/sepiatree_shedeleven_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 143,
    name: 'Siren - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/D7ZRLjB/366004092-661542329343463-7330765569290257936-n.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366606444_667401978757498_4476546612567919136_n_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 144,
    name: 'Siren - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/D7ZRLjB/366004092-661542329343463-7330765569290257936-n.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/6/366606444_667401978757498_4476546612567919136_n_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 145,
    name: 'Stars & Stripes - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/5LCGrNh/stars-stripes-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/c/bcd0edb7-2797-49d7-83de-600c09354da3.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 146,
    name: 'Stars & Stripes - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/5LCGrNh/stars-stripes-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/c/bcd0edb7-2797-49d7-83de-600c09354da3.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 147,
    name: 'Study in Black & Green - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/k5M90sC/studyinblack-green-600x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/t/studyinblack_green-therockycrystal_3030c90b-495b-4046-be1d-e4afb5d87ff0_5000x_1.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/2/125423087_10164875144290093_9029533975673567588_n_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 148,
    name: 'Study in Black & Green - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/k5M90sC/studyinblack-green-600x-3.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/t/studyinblack_green-therockycrystal_3030c90b-495b-4046-be1d-e4afb5d87ff0_5000x_1.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/2/125423087_10164875144290093_9029533975673567588_n_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 149,
    name: 'Sunflower - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/W6bVBPM/sunflower-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/u/sunflowers_rusty_blue_refashioned_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 150,
    name: 'Sunflower - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/W6bVBPM/sunflower-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/s/u/sunflowers_rusty_blue_refashioned_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 151,
    name: 'Tahitian Women - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/MPqqH9D/tahitianwomen-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/a/tahitian_ladies_joyita_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 152,
    name: 'Tahitian Women - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/MPqqH9D/tahitianwomen-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/a/tahitian_ladies_joyita_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 153,
    name: 'Texas Longhorn - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/yB0fhyN/texaslonghorn-ef71ed90-b4a2-486b-9623-78e1f90a85f8-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1616486068776_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/e/texaslonghorn-therockycrystal_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 154,
    name: 'Texas Longhorn - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/yB0fhyN/texaslonghorn-ef71ed90-b4a2-486b-9623-78e1f90a85f8-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1616486068776_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/e/texaslonghorn-therockycrystal_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 155,
    name: 'The Tropics - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/kmGNHHB/thetropics-5000x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/293607792_1263655287715573_1053244572482275603_n_2048x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/r/tropics6_2048x_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 156,
    name: 'The Tropics - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/kmGNHHB/thetropics-5000x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/293607792_1263655287715573_1053244572482275603_n_2048x_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/r/tropics6_2048x_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 157,
    name: 'To the Market - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/K51ByhV/tomarket-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/o/tomarket.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 158,
    name: 'To the Market - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/K51ByhV/tomarket-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/o/tomarket.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 159,
    name: 'Toucan - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/qdS90k3/toucan-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/o/toucan_parrot-mintbymichelle_5000x_3.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 160,
    name: 'Toucan - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/qdS90k3/toucan-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/t/o/toucan_parrot-mintbymichelle_5000x_3.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 161,
    name: 'Turtles Swimming - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/m8khyN6/turtlesswimming-5000x-1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 162,
    name: 'Turtles Swimming - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/m8khyN6/turtlesswimming-5000x-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 163,
    name: 'Venice - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/wSzC9Xb/venice-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1614982657494_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/v/e/venice-alekseikrasilnikov_5000x.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 164,
    name: 'Venice - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/wSzC9Xb/venice-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/b/fb_img_1614982657494_2048x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/v/e/venice-alekseikrasilnikov_5000x.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 165,
    name: 'Vintage Red Car - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/6HrMd3F/vintagecar-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/v/i/vintage_red_car_rusty_blue_refashioned_furniture.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 166,
    name: 'Vintage Red Car - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/6HrMd3F/vintagecar-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/v/i/vintage_red_car_rusty_blue_refashioned_furniture.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 167,
    name: 'Walking - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/KWrqjmj/walking-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/294884532_587302892768713_6992326615028344796_n_2048x_3.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 168,
    name: 'Walking - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/KWrqjmj/walking-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/2/9/294884532_587302892768713_6992326615028344796_n_2048x_3.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 169,
    name: 'Water Lilly - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/xFKs19N/366044999-661542572676772-729058036453694559-n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 170,
    name: 'Water Lilly - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/xFKs19N/366044999-661542572676772-729058036453694559-n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 171,
    name: 'Waterplay - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/nP6PL8g/waterplay-9e3032cd-cde2-4fa8-823f-11ca0776a9b1-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/2/127194297_1312866629044895_4776849470418794749_o_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 172,
    name: 'Waterplay - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/nP6PL8g/waterplay-9e3032cd-cde2-4fa8-823f-11ca0776a9b1-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/1/2/127194297_1312866629044895_4776849470418794749_o_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },

  //Ultima Pagina

  {
    id: 173,
    name: 'Wave of Florals - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/wR48gpv/366175442-661542739343422-4190398524880257686-n.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 174,
    name: 'Wave of Florals - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/wR48gpv/366175442-661542739343422-4190398524880257686-n.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 175,
    name: 'Wheatfields & Cypresses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/WsJvyML/wheatfields-cypresses-600x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/w/h/wheatfileds_cypresses_vonboo_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 176,
    name: 'Wheatfields & Cypresses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/WsJvyML/wheatfields-cypresses-600x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/w/h/wheatfileds_cypresses_vonboo_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 177,
    name: 'White Swan - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/CnFtw9K/whiteswan-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/w/h/whiteswans_mintbymichelle_5000x_4_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/w/h/whiteswans_mintbymichelle1_5000x_4_2.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 178,
    name: 'White Swan - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/CnFtw9K/whiteswan-600x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/w/h/whiteswans_mintbymichelle_5000x_4_2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/w/h/whiteswans_mintbymichelle1_5000x_4_2.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 179,
    name: 'Woman in a Green Top - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/XtRq5Hn/womaninagreentop-600x.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 180,
    name: 'Woman in a Green Top - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/XtRq5Hn/womaninagreentop-600x.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 181,
    name: 'Yes Deer - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/2qW0RnJ/yes-deer-395cd874-d9b1-4883-9212-eef1e2c45528-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/1/313046547_508764804598629_4349828210556440145_n_5.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 182,
    name: 'Yes Deer - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/2qW0RnJ/yes-deer-395cd874-d9b1-4883-9212-eef1e2c45528-600x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/3/1/313046547_508764804598629_4349828210556440145_n_5.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 183,
    name: 'Young Girl Reading - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/Nmrrxth/younggirlreading-600x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/o/young_girl_reading_kacha_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/o/younggirlreading_gitanjali_1.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 184,
    name: 'Young Girl Reading - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/Nmrrxth/younggirlreading-600x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/o/young_girl_reading_kacha_1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/o/younggirlreading_gitanjali_1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 185,
    name: 'Zz Christmas - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/sHJjgG2/211647297-1460655024266054-6538681064226336656-n-1.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  }





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda2 = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(44); // Cambia el número según tus necesidades

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = products.slice(startIndex, endIndex);






  const applyFilters = () => {
    const filteredProducts = initialProducts.filter((product) => {
      const price = product.price;
      return (
        (selectedClasses.length === 0 || selectedClasses.includes(product.label)) &&
        price >= priceRange[0] &&
        price <= priceRange[1]
      );
    });

    setProducts(filteredProducts);
    setShowNoProducts(filteredProducts.length === 0);
  };

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleSearch = (searchText) => {
    // No filtrar directamente por nombre al buscar
    // en su lugar, ajustar los productos existentes según los filtros
    applyFilters();

    if (searchText !== '') {
      const filteredProducts = products.filter((product) =>
        removeAccents(product.name).toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
      setShowNoProducts(filteredProducts.length === 0);
    }
  };

  const handlePriceChange = (event) => {
    setPriceRange([parseInt(event.target.value, 10), priceRange[1]]);
    applyFilters();
  };

  const handleMaxPriceChange = (event) => {
    setPriceRange([priceRange[0], parseInt(event.target.value, 10)]);
    applyFilters();
  };

  const toggleSelectedClass = (selectedClass) => {
    const updatedSelectedClasses = selectedClasses.includes(selectedClass)
      ? selectedClasses.filter((c) => c !== selectedClass)
      : [...selectedClasses, selectedClass];
    setSelectedClasses(updatedSelectedClasses);
    applyFilters();
  };


  const handleToggleFilters = () => {
    setShowFilters(!showFilters);

    // Cambia el icono del botón
    setFilterButtonIcon(showFilters ? <ViewOffIcon /> : <ViewIcon />);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedClasses, priceRange]);

  useEffect(() => {
    Aos.init();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // El producto ya existe en el carrito, aumenta la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      // El producto no existe en el carrito, agrégalo
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleToggleCart = () => {
    onToggle(); // Abre o cierra el carrito

    // Cambia el estado `showOverlay` cuando el carrito se abre
    setShowOverlay(!isOpen);
  };

  const handleCloseCart = () => {
    onClose(); // Cierra el carrito

    // También cambia el estado `showOverlay` cuando el carrito se cierra
    setShowOverlay(false);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0
    });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleGoToFirstPage = () => {
    handlePageChange(1);
  };

  const handleGoToLastPage = () => {
    handlePageChange(totalPages);
  };

  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Recupera el carrito desde localStorage al cargar la página
    const data = window.localStorage.getItem('cart');
    if (data !== null) {
      setCart(JSON.parse(data));
    }
    setIsLoading(false); // <- Mueve esto aquí para indicar que la carga se ha completado
  }, []);

  useEffect(() => {
    // Guarda el carrito en localStorage cada vez que cambie
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }


  console.log(cart);
  return (
    <>
      <Navbar2 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda">
        <br></br>

        <div className="menu">

          <h1>Tienda de productos para artistas - Mint by Michelle🌿</h1>

          <h3>En esta sección de la tienda encontrareis multitud de productos especializados en papel para decoupage de diferentes tamaños de Mint by Michelle.</h3>

          <Button className="remove-button3" rightIcon={filterButtonIcon} onClick={handleToggleFilters} colorScheme='green' variant='solid'>
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />


          <button className="bn632-hover bn22" onClick={handleToggleCart}>Carrito🛒</button>

        </div>

        {showFilters && (
          <div data-aos="fade-right"><div className="filter">

            {Array.from(new Set(initialProducts.map((product) => product.label)).values()).map(
              (selectedClass) => (
                <Tag  key={'lg'} variant='solid' colorScheme='green' >
                  <label key={selectedClass} className="filter-item" id='checkbox'>
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(selectedClass)}
                      onChange={() => toggleSelectedClass(selectedClass)} />
                    {selectedClass}
                  </label>
                </Tag>
              )
            )}

          </div><div className="price-slider">

              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[0]}
                onChange={handlePriceChange} />
              <p>Precio Mínimo: {priceRange[0]}€</p>
              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[1]}
                onChange={handleMaxPriceChange} />
              <p>Precio Máximo: {priceRange[1]}€</p>
            </div></div>
        )}


        <div className="product-list" >
          {showNoProducts ? (
            <p> <br></br> <br></br>No hay productos según su búsqueda.</p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                onToggle={onToggle}
                handleToggleCart={handleToggleCart}
              />
            ))
          )}
        </div>
        <br></br><br></br>

        <div className='pagination'>
          <button onClick={handleGoToFirstPage}>Inicio</button>
          <button onClick={handlePrevPage}>Anterior</button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button onClick={handleNextPage}>Siguiente</button>
          <button onClick={handleGoToLastPage}>Final</button>
        </div>

        <br></br><br></br>







        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} handleCloseCart={handleCloseCart} />
          </Box>
        </Slide>

        <ScrollToTopButton />

      </div>

    </>
  );
};
