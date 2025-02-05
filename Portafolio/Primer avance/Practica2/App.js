
/* En esta practica se muestra como se colocarian imagnenes. Se utilizaron dos formas */

import { StatusBar } from 'expo-status-bar';
/* Entre los imports se agrega el Image, para que acepte este tipo de componentes*/
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
/* Forma 1: Se utiliza el componente Image con la propiedad source para mostrar la imagen. Se utiliza el "require" 
  para importar la imagen de maner local, ya que la imagen se encuentra en el proyecto, en la carpeta "assets" */
    <View style={styles.container}>
      <Text style ={styles.title}>Gatito!</Text>
      <Image style={styles.image} source={require('./assets/gatito.jpeg')}/>

/* Forma 2: Se utiliza el componente Image con la propiedad source para mostrar la imagen. Se utiliza el "uri" para
    importar la imagen de manera remota, ya que la imagen se encuentra en una url */

      <Text style ={styles.title}>Gatito22!</Text>
      <Image style={styles.image} source={{uri:'https://www.shutterstock.com/image-photo/photo-young-kitten-260nw-2504468113.jpg'}}/>
      
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
  },
/*En ambas formas se utiliza el estilo "image" para darle un tamaño a la imagen*/
  image:{
    marginTop:50,
    width: 100,
    height: 200,
  
 
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
