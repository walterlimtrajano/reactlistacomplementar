import { useState } from 'react';

function SorteadorDeNumeros() {
  const [numero, setNumero] = useState(null);

  function sortear() {
    const n = Math.floor(Math.random() * 100) + 1;
    setNumero(n);
  }

  return (
    <div>
      <p>Número sorteado: {numero === null ? 'Clique para sortear' : numero}</p>
      <button onClick={sortear}>Sortear</button>
    </div>
  );
}

export default SorteadorDeNumeros;
