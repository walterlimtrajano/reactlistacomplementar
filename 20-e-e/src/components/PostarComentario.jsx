import { useState } from 'react';

function PostarComentario() {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setComentarios([...comentarios, { nome, comentario }]);
    setNome('');
    setComentario('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Comentário:</label><br />
          <textarea value={comentario} onChange={e => setComentario(e.target.value)} required />
        </div>
        <button type="submit">Postar</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Comentários:</h3>
        {comentarios.length === 0 && <p>Sem comentários ainda.</p>}
        {comentarios.map((c, i) => (
          <div key={i} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
            <strong>{c.nome}:</strong>
            <p>{c.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostarComentario;
