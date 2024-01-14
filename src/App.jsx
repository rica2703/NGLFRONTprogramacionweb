import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LoginIg } from './componentes/organismos/iniciarSesion'
import nameContext from './contextos/nameContext';
import { Ngl } from './componentes/organismos/pregunta';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginIg />,
  },
{
  path:"/NGL.LINK",
  element:<Ngl/>,
},
])
function App() {
const [name,setName]=useState({
  userName1:"",
  userName2:"",
  pregunta:"",
});
  return (
    <>
    <nameContext.Provider value={{name,setName}}>
    <RouterProvider router={router} />
    </nameContext.Provider>
    </>
  )
}

export default App
