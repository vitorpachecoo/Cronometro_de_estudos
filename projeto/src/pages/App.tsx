import Cronometro from "../componentes/Cronometro";
import Formulario from "../componentes/Formulario";
import Lista from "../componentes/Lista";
import style from './app.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
