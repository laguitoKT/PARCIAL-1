

/* En esta practica se mostro como utilizar rect native paper */
import React from 'react'; // import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
/* Aqui se importan los componentes de react native paper y obter estilos y estructuras predeterminadas*/
import { Button, Text, Appbar, TextInput } from 'react-native-paper';

/* Aqui se define la funcion que se ejecuta al iniciar el componente */
export default function App() {
  const [text, setText] = React.useState(''); // Renombrar "Text" a "text"   //const[Text, setText] = useState('');

  return (
    <View style={styles.container}>
      {/* App bar component paper para la barra de navegacion */}
      <Appbar>
        <Appbar.Content title="Titulito" />
      </Appbar>

      {/* Text input componente paper para ingresar texto */}
      <TextInput
        label='Type Something'
        value={text} 
        onChangeText={text => setText(text)}
        style={styles.input}
      />

      {/* Button componente text  para enviar el texto y se utiliza el alert para mostrar el texto ingresado */}
      <Button style={styles.Button} mode='contained' onPress={()=> alert (`Text: ${text}`)}> 
        Boton que hace algo
      </Button>

      <Text style={styles.text}>HOLA HACE HAMBREEEEEEEEEEEEEEEEEEEEE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:16
  },
  input: {
    marginBottom: 20,
    width: '300', 
  },
  Button: {
    backgroundColor:'#93c596',
  },
  text:{
    textAlign:'center',
    marginTop:20
  }
});
