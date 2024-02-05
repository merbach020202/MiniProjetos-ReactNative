import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>LOGIN</Text>

      <TextInput
        style={styles.input}
        defaultValue='Email'
      />
      <TextInput
        style={styles.input}
        defaultValue='Senha'
      />

      <Image style={styles.imgSenai}source={require('./src/assets/senai.png')} />

      <TouchableOpacity style={styles.btn}>
        <Text>Botão</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color:'white',
    fontSize: 50,
    fontWeight: '500'
  },

  input: {
    width: '90%',
    height: 40,
    alignItems: 'space-between',


    borderWidth: 1,
    borderColor: 'white',

    backgroundColor: 'white',
    padding: 10
  },

  imgSenai: {
    width: '50%',
    height: '7%',

    position: 'absolute',
    marginTop: -500
  },

  btn: {
    width: '80%',
    height: 40,

    borderRadius: 8,

    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white'
  }
});
