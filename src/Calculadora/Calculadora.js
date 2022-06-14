import React, { useState } from 'react';
import Botoes from '../Botoes/Botoes';
import Visor from '../Visor/Visor';
import "./Calculadora.css";

const Calculadora = () => {
    const [operacao, setOperacao] = useState(0);

    const atualizaOperacao = (label) => {
        alert(label + 5);
    }


    return (
        <div className="Calculadora">
            <Visor resultado={operacao} />
            <Botoes />
        </div>
    );
}

export default Calculadora;