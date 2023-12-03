import React, { useState, useEffect, useRef } from 'react';
import Foto from "../parallax/parallax-2/Portada.jpeg";
import { useToast } from '@chakra-ui/react'
import { DeleteIcon, ArrowLeftIcon, EmailIcon, ArrowRightIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { Button} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import Aos from 'aos';
import 'aos/dist/aos.css';


export const Cart = ({ cart, setCart, removeFromCart, handleCloseCart }) => {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const [total, setTotal] = useState(calculateTotal());
    const [showCompra, setShowCompra] = useState(false);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [tlfn, setTlfn] = useState('');

    const [deviceType, setDeviceType] = useState('pc'); // Establece un valor predeterminado

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [waves, setWaves] = useState(false);
    const buttonRef = useRef(null);
    const cartRef = useRef(null);

    





    useEffect(() => {
        setTotal(calculateTotal());

    }, [cart]);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setDeviceType('mobile');
            } else if (screenWidth < 1024) {
                setDeviceType('tablet');
            } else {
                setDeviceType('pc');
            }
        }

        // Agrega un listener para el evento de cambio de tamaño de pantalla
        window.addEventListener('resize', handleResize);

        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toast = useToast()



    const sendEmail = () => {
        if (!nombre || !apellidos || !direccion || !tlfn) {
            toast({
                title: 'Campos obligatorios incompletos',
                description: 'Por favor, complete todos los campos obligatorios.',
                position: 'top',
                status: 'error',
                duration: 5000, // Duración de la notificación en milisegundos
                isClosable: true, // Permite cerrar la notificación
            });

            // Resaltar en rojo los campos de entrada incompletos
            if (!nombre) {
                document.getElementById('nombre').classList.add('campo-incompleto');
            }
            if (!apellidos) {
                document.getElementById('apellidos').classList.add('campo-incompleto');
            }
            if (!direccion) {
                document.getElementById('direccion').classList.add('campo-incompleto');
            }
            if (!tlfn) {
                document.getElementById('tlfn').classList.add('campo-incompleto');
            }

            return;
        }

        // Si los campos están completos, quitar la clase CSS de los campos
        document.getElementById('nombre').classList.remove('campo-incompleto');
        document.getElementById('apellidos').classList.remove('campo-incompleto');
        document.getElementById('direccion').classList.remove('campo-incompleto');
        document.getElementById('tlfn').classList.remove('campo-incompleto');

        const emailTo = 'josemarii2001@gmail.com'; // Correo de destino
        const emailSubject = 'Mi Carrito de Compras'; // Asunto del correo


        const emailBody = `Hola Carmen 😊\nMe han gustado estos productos de tu web, quedo a la espera de tu respuesta👍\n\nCarrito de Compra🛒: \n\n${cart
            .map((item) => `${item.name} x ${item.quantity} - ${item.price * item.quantity} €`)
            .join('\n')}\n\nTotal: ${total.toFixed(2)} €\n\nInformación de pedido📋:\n\nNombre: ${nombre}\nApellidos: ${apellidos}\nDirección: ${direccion}\nTeléfono: ${tlfn}`;

        const emailLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.open(emailLink);
    };

    useEffect(() => {
        Aos.init();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setWaves(true);
                setTimeout(() => {
                    setWaves(false);
                }, 1000); // Ajusta el tiempo según la duración de tu animación
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="cart-container" ref={cartRef} >
            {showCompra ? (
                <div className="container-compra" >
                    <form className="formulario-compra" data-aos="fade-right" >
                        <h2>Información de pedido 📋</h2>

                        <div className="campo">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder='Ej. Juan'
                                name="nombre"
                                title="Campo requerido"
                                required
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input
                                type="text"
                                id="apellidos"
                                placeholder='Ej. Pérez López'
                                name="apellidos"
                                title="Campo requerido"
                                required
                                value={apellidos}
                                onChange={(e) => setApellidos(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="direccion">Dirección</label>
                            <input
                                type="text"
                                id="direccion"
                                placeholder='Ej. Calle Mayor, 1'
                                name="direccion"
                                title="Campo requerido"
                                required
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="tlfn">Teléfono</label>
                            <input
                                type="number"
                                id="tlfn"
                                placeholder='Ej. 634 67 12 13'
                                name="tlfn"
                                title="Campo requerido"
                                required
                                value={tlfn}
                                onChange={(e) => setTlfn(e.target.value)}
                            />
                        </div>


                    </form>

                    <div className="compras" data-aos="fade-up" >
                        <h2>Carrito de Compra 🛒</h2>
                        <ul style={{ overflowY: 'auto', maxHeight: '13vh', marginLeft: '-33px' }}>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <span className="item-name">{item.name} </span>
                                    <span> {item.price}€ x{item.quantity}</span>
                                    <Button rightIcon={<DeleteIcon />} className="remove-button2" onClick={() => removeFromCart(item.id)} colorScheme='red' variant='solid'>
                                        <div className='eliminar'>Eliminar</div>

                                    </Button>

                                </li>
                            ))}
                        </ul>
                        <br></br>
                        <p>Total: {total.toFixed(2)}€ </p>
                        <p className='envios'>+ gastos de envío <span onClick={onOpen}><WarningTwoIcon></WarningTwoIcon></span></p>


                        <AlertDialog
                            motionPreset='slideInBottom'
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                            isOpen={isOpen}
                            isCentered
                        >
                            <AlertDialogOverlay />

                            <AlertDialogContent>
                                <AlertDialogHeader><p>⚠️</p>Acerca de los gastos de envío </AlertDialogHeader>
                                <AlertDialogCloseButton />
                                <AlertDialogBody>
                                    Los gastos de envío vendrán dictaminados por la empresa de transporte, su domicilio y el peso de este. <br></br>
                                    La cifra sera confirmada cuando se solicite el envío.
                                </AlertDialogBody>

                            </AlertDialogContent>
                        </AlertDialog>

                        <Button rightIcon={<ArrowLeftIcon />} id='buttonCompra' className="toggle-compra-button" onClick={() => setShowCompra(false)} colorScheme='yellow' variant='solid'>Retroceder</Button>

                        <Button rightIcon={<EmailIcon />} id='buttonCompra' className="toggle-compra-button" onClick={sendEmail} colorScheme='green' variant='solid'>Enviar solicitud de pedido</Button>



                        <button
                            id='buttonCompra'
                            className={`close-cart-button ${waves ? 'waves' : ''}`}
                            onClick={handleCloseCart}
                            ref={buttonRef}
                        >
                            Seguir comprando
                        </button>                    </div>

                    <div class="imagen" data-aos="fade-left">
                        <div className="imagenn"><img src={Foto} alt="Producto" /></div>

                        <div class="texto">Muchas gracias por la compra y <br></br>sobre todo por la confianza<br></br>😊</div>
                    </div>

                    <br></br>

                </div>
            ) : (
                <div className="cart" data-aos="fade-left">
                    <h2>Carrito de Compra 🛒</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <span className="item-name">{item.name} </span>
                                <span> {item.price}€ x{item.quantity}</span>
                                <Button rightIcon={<DeleteIcon />} className="remove-button" onClick={() => removeFromCart(item.id)} colorScheme='red' variant='solid'>
                                    <span className='eliminar'>Eliminar</span>

                                </Button>
                            </li>
                        ))}
                    </ul>
                    <br></br>
                    <p>Total: {total.toFixed(2)}€ </p>
                    <br></br>
                    <Button rightIcon={<ArrowRightIcon />} className="close-cart-button2" onClick={() => setShowCompra(true)} colorScheme='yellow' variant='solid'>Finalizar pedido</Button>
                    <br></br>
                    <br></br>
                    <button
                        className={`close-cart-button ${waves ? 'waves' : ''}`}
                        onClick={handleCloseCart}
                        ref={buttonRef}
                    >
                        Seguir comprando
                    </button>
                </div>
            )}

        </div>
    );
};
