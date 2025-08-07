function StatusPedido({ status }) {
  if (status === "enviado") {
    return <p>Seu pedido foi enviado! 📦</p>;
  } else if (status === "pendente") {
    return <p>Seu pedido está em processamento ⏳</p>;
  } else if (status === "cancelado") {
    return <p>Seu pedido foi cancelado ❌</p>;
  } else {
    return <p>Status desconhecido</p>;
  }
}

export default StatusPedido;
