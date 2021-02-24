import React from 'react'; //Cor da biblioteca
import ReactDOM from 'react-dom'; // É a forma do react trabalhar com o browser
import App from './App';


ReactDOM.render( // Método de renderização do reactDOM, pesquisa o ID X, e joga Componentes do react com a sintaxe JSX, muito proxíma do HTML.
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Peaquisa pelo ID 
);

