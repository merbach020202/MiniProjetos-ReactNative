import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>

      <Text style={styles.label}>EMAIL:</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu Email:'
        placeholderTextColor="white"
      />


      <Text style={styles.label}>SENHA:</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite sua Senha:'
        placeholderTextColor="white"
      />


      <Image style={styles.imgBanner}source={require('./src/assets/bemVindo.jpg')} />

      <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ec3b1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 40,
    fontWeight: '550',
    color: 'white',

    padding: 20,
    marginTop: 60
    
  },

  imgBanner: {
    position: 'absolute',
    marginTop: -400
  },

  input: {
    width: '90%',
    height: 40,

    borderWidth: 1,
    borderColor: 'white',

    paddingLeft: 10,
    marginBottom: 20,

    flexWrap: 'wrap'
    },

    button: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      
      width: '70%',
      height: 40,

      marginTop: 30

    },

    textButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',

      paddingLeft: 110,
      paddingTop: 5
    },

    label: {
      color: 'black',
      fontSize: 16,
      fontWeight: '600',

      
      
      marginLeft: -300
      
    }
});
