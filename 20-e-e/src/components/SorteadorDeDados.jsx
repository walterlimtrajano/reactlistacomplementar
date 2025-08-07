import { useState } from 'react';

function SorteadorDeDados() {
  const [resultados, setResultados] = useState([]);

  function lancarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setResultados([...resultados, resultado]);
  }

  return (
    <div>
      <button onClick={lancarDado}>Lançar dado</button>
      <p>Resultados: {resultados.join(', ')}</p>
    </div>
  );
}

export default SorteadorDeDados;
