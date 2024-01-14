import Boton from "../atomos/boton";
import { Texto } from "../atomos/texto";
function Alerta(props){
    return(
        <>
        <div className="alerta">
            <div className="alertaCuadro">
            <Texto textoP={props.textoP} className={props.className1}/>
            <Texto textoP={props.textoP2} className={props.className2}/>
            {/* <Boton className="botonAlert" textoBoton={textos.botonIniciarHeader} onClick={props.onClick}/> */}
            <Boton className={props.className}  onClick={props.onClick} textoBoton={props.textoBoton}/>
            </div>
        </div>
        </>
    );
}
export default Alerta;