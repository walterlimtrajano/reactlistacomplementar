function CssInlineDinamico({ ativo }) {
  const estilo = {
    backgroundColor: ativo ? 'green' : 'gray',
    color: ativo ? 'white' : 'black',
    padding: '10px',
    textAlign: 'center'
  };

  return <div style={estilo}>{ativo ? 'Ativo' : 'Inativo'}</div>;
}

export default CssInlineDinamico;
