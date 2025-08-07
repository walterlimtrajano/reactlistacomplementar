import styles from './TemperaturaEstacao.module.css';

function TemperaturaEstacao({ estacao }) {
  let classe = '';

  switch (estacao) {
    case 'verão':
      classe = styles.verao;
      break;
    case 'inverno':
      classe = styles.inverno;
      break;
    case 'outono':
      classe = styles.outono;
      break;
    case 'primavera':
      classe = styles.primavera;
      break;
    default:
      break;
  }

  return <div className={classe}>Estação: {estacao}</div>;
}

export default TemperaturaEstacao;
