import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import React, {useContext} from 'react';

import { Container } from "../Summary/styles";

export function Summary() {
    const {transactions} = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1.000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong> - R$5.000.00</strong>
            </div>
            <div className="highlight-background" >
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$15.000.00</strong>
            </div>
        </Container>
    )
}