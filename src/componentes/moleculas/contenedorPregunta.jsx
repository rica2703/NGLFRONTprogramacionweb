import imgCarta from '../../assets/carta.png';
import { Texto } from '../atomos/texto';
import '../../css/main2.css';
function  Contenedor(props){
    return(<>
    <div className='ContenedorPreguntas'>
        <img src={imgCarta} alt="" className='imagenCarta' />
        <div className='divTextos'>
            <Texto textoP={props.textoP} className="textoPregunta"/>
            <Texto textoP={props.textoP2} className="textoUsuario"/>
        </div>
    </div>
    </>);
}
export default Contenedor;