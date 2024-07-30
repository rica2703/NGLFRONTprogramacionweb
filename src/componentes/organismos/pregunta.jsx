import '../../css/main2.css'
import { Input } from '../atomos/input';
import Boton from '../atomos/boton';
import { Texto } from '../atomos/texto';
import perfil from '../../assets/perfil.jpg';
import candado from '../../assets/candado.png';
import mano from '../../assets/mano.png';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import nameContext from '../../contextos/nameContext';
const API = `http://18.216.203.207/api/mensajes`;
export function Ngl() {
    const [miConstante, setMiConstante] = useState(120);
    const [mensajeAnonimo,setMensajeAnonimo]=useState("");
    const {name,setName}=useContext(nameContext);
    const [codigo,setCodigo]=useState([]);
    const [codigoFinal,setCodigoFinal]=useState(1);
    const [datosEnviar,setDatosEnviar]=useState({
        id:"",
        nombreUsuario1:"",
        nombreUsuario2:"",
        mensaje:"",
    });
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMiConstante((prevValor) => prevValor + 3);
    }, 1000);

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente

  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente
const onChange=(e)=>{
setMensajeAnonimo(e.target.value);
}
const handlerClick=async()=>{
    // alert(mensajeAnonimo+" : "+name.userName1);
    // alert(API);
// try{
//     const res=await fetch(API,{
//         method:'post',
//         headers:{'Content-Type':'application/json',},
//         body:JSON.stringify(datosEnviar),
//     });
//     alert("entro");
//       if(res.ok){
//         alert("se envio el mensaje")
//       }
//       else{
//         alert("no se envio el mensaje por error")
//       }
   
// }
// catch(error){
//     alert("No se pudo enviar el mensaje recarga la pagina");
// }
// codigoFinal++;
const datosEnviar = {
    id:codigo.length+codigoFinal+1,
    nombreUsuario1: name.userName1,
    nombreUsuario2: name.userName2,
    mensaje: mensajeAnonimo,
  };
  // alert(datosEnviar.id);
setCodigoFinal(codigoFinal+1);

  try {
    const res = await fetch(API, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosEnviar),
    });

    if (res.ok) {
    //   alert("Se envió el mensaje");
      setMensajeAnonimo("");
    } else {
      alert("No se envió el mensaje por error");
    }
  } catch (error) {
    alert("No se pudo enviar el mensaje, recarga la página");
  }

}
const handleBlur=(e)=>{
    setDatosEnviar({
        id:codigo.length+codigoFinal,
        nombreUsuario1:name.userName1,
        nombreUsuario2:name.userName2,
        mensaje:mensajeAnonimo,
    });
    // alert(codigo.length)
}

useEffect(() => {
    async function fetchData() {
      const resp = await fetch(API);
      const data = await resp.json();
      setCodigo(data.slice());
    //   codigoFinal=codigo.length+codigoFinal;
    }
    fetchData();
  }, []);
    return (<>
        <div className='cuerpoNGL'>
            <div className='contenedor'>
                <div className='contenedorBlanco'>
                    <img src={perfil} className='imgPerfil' />
                    <div className='contenedorTextos'>
                        <Texto className="usuario" textoP="@luis__palomeque" />
                        <Texto className="invitacion" textoP="envíame mensajes anónimos" />
                    </div>
                </div>
                <div className='contenedorInput'>
                    {/* <Input className="inputMensaje" type="text" placeholder="algo" /> */}
                    <textarea onBlur={handleBlur} onChange={onChange}  value={mensajeAnonimo} className="inputMensaje" ></textarea>
                </div>
                <div className='divCandado'>
                <img src={candado} className='imgCandado' alt="" />
                <Texto className="candadito" textoP=" Preguntas anónimas ;) " />
                </div>
                <Boton className="botonEnviarMensaje" onClick={()=>handlerClick()} textoBoton="¡Enviar!" />
            </div>
            <div className='divMensajePropio'>
                <div className='divDedos'>
            <img src={mano} className='manoImg' />
            <Texto className="candadito" textoP={miConstante+" personas acaban de pulsar el botón"}/>
                </div>
            <img src={mano} className='manoImg' />
            <Boton className="botonConsigueMensaje" textoBoton="¡Consigue tus propios mensajes!"/>
            
            </div>
        </div>
    </>);
}