import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('0');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const idadeNum = parseInt(idade);
    const alturaEmMetros = parseFloat(altura) / 100;
    const pesoEmKg = parseFloat(peso);

    if (!pesoEmKg || !alturaEmMetros || alturaEmMetros === 0 || !idadeNum || sexo === '0') {
      setResultado('Preencha todos os campos corretamente');
      return;
    }

    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    let classificacao = '';

    if (idadeNum < 18) {
      classificacao = 'IMC não é recomendado para menores de 18 anos';
    } else if (idadeNum >= 65) {
      if (imc < 22) classificacao = 'Baixo peso (idoso)';
      else if (imc <= 27) classificacao = 'Peso adequado (idoso)';
      else classificacao = 'Sobrepeso ou Obesidade (idoso)';
    } else {
      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc < 24.9) classificacao = 'Peso normal';
      else if (imc < 29.9) classificacao = 'Sobrepeso';
      else if (imc < 34.9) classificacao = 'Obesidade grau 1';
      else if (imc < 39.9) classificacao = 'Obesidade grau 2';
      else classificacao = 'Obesidade grau 3';
    }

    setResultado(`Seu IMC é ${imc.toFixed(1)} (${classificacao})`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('./assets/bmi.png')} style={{ width: 70, height: 70 }} />

        <Text style={styles.title}>Calculadora de IMC</Text>

        <View style={styles.container2}>
          <Text style={styles.text}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 30"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Sexo:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sexo}
              onValueChange={(itemValue) => setSexo(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="0" />
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Feminino" value="feminino" />
              <Picker.Item label="Geladeira Motorizada" value="geladeira" />
              <Picker.Item label='Helicóptero de Combate' value="helicoptero" />
            </Picker>
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Peso (kg):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 70.5"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Altura (cm):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 170"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {resultado && <Text style={styles.result}>{resultado}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fec7d7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  container2: {
    backgroundColor: '#fec7d7',
    width: '100%',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    color: '#0e172c',
    marginBottom: 32,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#0e172c',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fffffe',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 18,
  },
  pickerContainer: {
    backgroundColor: '#fffffe',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  button: {
    backgroundColor: '#0e172c',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fffffe',
    fontSize: 18,
  },
  result: {
    color: '#0e172c',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});
