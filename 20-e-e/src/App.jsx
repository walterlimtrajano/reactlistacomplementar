import './index.css';

import OlaUsuario from './components/OlaUsuario';
import Potenciacao from './components/Potenciacao';
import RaizQuadrada from './components/RaizQuadrada';
import Dobro from './components/Dobro';
import Metade from './components/Metade';

import Destino from './components/Destino';
import StatusPedido from './components/StatusPedido';

import MetroParaCentimetro from './components/MetroParaCentimetro';
import CentimetroParaMetro from './components/CentimetroParaMetro';
import RealParaDolar from './components/RealParaDolar';
import DolarParaReal from './components/DolarParaReal';

import CssGlobalTest from './components/CssGlobalTest';

import CssInline from './components/CssInline';
import CssInlineDinamico from './components/CssInlineDinamico';

import DiaDaSemana from './components/DiaDaSemana';
import TemperaturaEstacao from './components/TemperaturaEstacao';

import ContadorDeCliques from './components/ContadorDeCliques';
import SorteadorDeNumeros from './components/SorteadorDeNumeros';
import SorteadorDeDados from './components/SorteadorDeDados';

import FormularioDeFeedback from './components/FormularioDeFeedback';
import FormularioDeLogin from './components/FormularioDeLogin';
import PostarComentario from './components/PostarComentario';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <OlaUsuario nome="Walterlim" />
      <Potenciacao numero={4} />
      <RaizQuadrada numero={16} />
      <Dobro numero={10} />
      <Metade numero={20} />

      <Destino pais="BR" />
      <Destino pais="EUA" />
      <StatusPedido status="enviado" />
      <StatusPedido status="pendente" />
      <StatusPedido status="cancelado" />

      <MetroParaCentimetro valor={2} />
      <CentimetroParaMetro valor={200} />
      <RealParaDolar valor={50} />
      <DolarParaReal valor={10} />

      <CssGlobalTest />

      <CssInline />
      <CssInlineDinamico ativo={true} />
      <CssInlineDinamico ativo={false} />

      <DiaDaSemana dia="segunda" />
      <DiaDaSemana dia="sexta" />
      <DiaDaSemana dia="domingo" />
      <TemperaturaEstacao estacao="verão" />
      <TemperaturaEstacao estacao="inverno" />
      <TemperaturaEstacao estacao="outono" />
      <TemperaturaEstacao estacao="primavera" />

      <ContadorDeCliques />
      <SorteadorDeNumeros />
      <SorteadorDeDados />

      <FormularioDeFeedback />
      <FormularioDeLogin />
      <PostarComentario />
    </div>
  );
}

export default App;
