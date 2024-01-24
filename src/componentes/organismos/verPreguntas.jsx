import Contenedor from "../moleculas/contenedorPregunta";
import { Texto } from "../atomos/texto";
import { useEffect,useState } from "react";
const API = `http://192.168.1.51:8080/api/mensajes`;

function Ver(){
    const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMensajes(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []); // La dependencia vacía asegura que se realice solo una vez al montar el componente

    return(<>
    <div className='ContenedorPreguntas'>
        <Texto textoP="Mensajes" className="tituloMensajes"/>
    </div>
    {/* <Contenedor textoP={mensajes.nombreUsuario1} textoP2="Texto2"/> */}
    {mensajes.map((mensaje, index) => (
        <div key={index}>
            <Contenedor textoP={mensaje.mensaje} textoP2={mensaje.nombreUsuario1}/>
        </div>
      ))}
    </>);
}
export default Ver;