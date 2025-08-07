import styles from './DiaDaSemana.module.css';

function DiaDaSemana({ dia }) {
  let mensagem = '';
  let classe = '';

  switch (dia) {
    case 'segunda':
      mensagem = 'Começo da semana!';
      classe = styles.segunda;
      break;
    case 'sexta':
      mensagem = 'Sextou!';
      classe = styles.sexta;
      break;
    case 'domingo':
      mensagem = 'Dia de descanso!';
      classe = styles.domingo;
      break;
    default:
      mensagem = 'Dia comum';
      break;
  }

  return <div className={classe}>{mensagem}</div>;
}

export default DiaDaSemana;
