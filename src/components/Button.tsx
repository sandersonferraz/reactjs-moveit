import { useState } from 'react';
interface ButtonProps { //Definindo uma propriedade
    color: string; // Propriedade color como uma string
    children: string; // Propriedade Children como uma string que permite passar texto pelo HML
}

export function Button(props: ButtonProps) { // Passa a propriedade para dentro da função.

    const [counter, setCounter] = useState(1) // constante com um array com funções do useState

    function increment() {
        setCounter(counter + 1); //Define um novo valor para a variável counter
    }

    return (
        <button
            type="button"
            style={{ backgroundColor: props.color /**Passa a propriedade como CSS**/ }}
            onClick={increment}
        >

            {props.children /**Passa a propriedade para o HTML**/} - <strong>{counter}</strong>
        </button>
    );
}