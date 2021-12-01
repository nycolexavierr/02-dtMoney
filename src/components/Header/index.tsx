import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


interface ReaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: ReaderProps) {


    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}