import React from 'react'

import { useDisclosure, ModalOverlay } from '@chakra-ui/react'
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'

export const Overlay = () => {

    const OverlayOne = () => (
        <ModalOverlay
            backdropFilter='blur(4px)'
        />
    )


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Button
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                Use Overlay one
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Quien soy yo?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Una cosa importante que me suele ocurrir, es que siempre escucho que desean mis obras que les haga.
                            A veces tardo semanas en encontrar eso especial que quieren, o que colores son con los que les encantará vestirse y sentir que tienen una segunda vida!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

