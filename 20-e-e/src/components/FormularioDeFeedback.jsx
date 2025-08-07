import { useState } from 'react';

function FormularioDeFeedback() {
  const [nome, setNome] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify({ nome, feedback }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label><br />
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Feedback:</label><br />
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioDeFeedback;
