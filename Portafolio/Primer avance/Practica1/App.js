/* En esta practica se muetra como los componentes se pueden separar en otros archivos para que el 
    archivo principal no quede tan cargado y asi evitar posibles fallas, tambien para tener un mejor orden. */

import React, {useState} from 'react';

/* Importamos los componentes que se encuentran en otros archivos, en este caso se creo una nueva carpeta con 
el nombre de "components" aqui se encuentran todos los componentes que se van a utilizar en la aplicacion, en este
caso se importan los componentes del archio Myform.js */

import Myform from './componentes/Myform';
export default function App() {

  return (

/* Con esto podemos mostrar en la pantalla todo lo que se incluya en el archivo Myform.js */
<Myform></Myform>
  );
}

