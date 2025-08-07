function DolarParaReal({ valor }) {
  const taxaCambio = 5; // 1 dólar = 5 reais
  const resultado = valor * taxaCambio;

  return <p>US$ {valor.toFixed(2)} = R$ {resultado.toFixed(2)}</p>;
}

export default DolarParaReal;
