import React, {useState} from "react";
import {View, Text, Button, TextInput, } from 'react-native';

export default function Myform(){

    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");

    const handlePress = () => {
      setDisplayText(text);
      setText("");
    }


    return (
        <View style={styles.container}>

        <Text>Text to Show: {displayText} </Text>

        <TextInput
            placeholder='Type Something'
            value={text}
            onChangeText={setText}
        />

        <Button title='Press here!' onPress={handlePress}/>

        <StatusBar style="auto" />

        </View>
    )
}


    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });