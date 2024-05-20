import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../../components/Button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <h1 style={styles.h1}>Olá Mundo</h1>
      <h2 style={styles.h2}>Atualização de Plataforma</h2>
      <Button title="Clique Aqui!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  h1:{
    fontSize: 50,
    fontFamily: 'sans-serif'
  },
  h2:{
    fontFamily: 'sans-serif',
    fontSize: 30,
  }
});
