function CssInline() {
  const estilo = {
    color: 'green',
    backgroundColor: 'yellow',
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return <div style={estilo}>Texto com CSS Inline</div>;
}

export default CssInline;
