import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[count, setCount] = useState(0)

  //Função de incremento
  const increment = () => {
    setCount(count + 1)
  }

  //Função de decremento
  const decrement = () => {
    setCount(count - 1)
  }

  //effect

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>
      
      <Text style={styles.count}>Contador: {count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text style={styles.increment}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text style={styles.decrement}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  decrement: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    color: 'white',

    padding: 13,
    paddingLeft: 50,

    borderRadius: 10
  },

  count: {
    color: 'white',
    width: 200,
    height: 50,
    backgroundColor: 'black',
    color: 'white',

    padding: 13,
    paddingLeft: 50,

    borderRadius: 10
  },

  increment: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    color: 'white',

    padding: 13,
    paddingLeft: 50,

    borderRadius: 10
  }
});
