import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/container/container';
import { Button, ButtonDecrement } from './src/button/button';
import { Title } from './src/title/title';

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
    <Container>

      <Image style={styles.imgBanner}source={require('./src/assets/calculadora.png')} />
      
      <Title>Contador: {count}</Title>

      <Button onPress={increment} style={styles.Button}>
        <Text style={styles.increment}>Incrementar</Text>
      </Button>

      <ButtonDecrement onPress={decrement} style={styles.ButtonDecrement}>
        <Text style={styles.decrement}>Decrementar</Text>
      </ButtonDecrement>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({

  imgBanner: {
    width: 120,
    height: 120,

    marginBottom: 80,
  }

});
