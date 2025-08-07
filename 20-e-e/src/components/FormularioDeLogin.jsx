import { useState } from 'react';

function FormularioDeLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify({ email, senha }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label><br />
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default FormularioDeLogin;
