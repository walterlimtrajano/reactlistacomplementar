function RealParaDolar({ valor }) {
  const taxaCambio = 5; // 1 dólar = 5 reais
  const resultado = valor / taxaCambio;

  return <p>R$ {valor.toFixed(2)} = US$ {resultado.toFixed(2)}</p>;
}

export default RealParaDolar;
