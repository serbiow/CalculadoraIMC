
# 📱 Calculadora de IMC - React Native (Expo)

Uma aplicação mobile desenvolvida com **React Native** usando **Expo**, que permite calcular o **Índice de Massa Corporal (IMC)** com base no peso, altura, idade e sexo da pessoa.

## ✨ Funcionalidades

- ✅ Cálculo do IMC com base em peso e altura
- ✅ Interpretação ajustada de acordo com a idade (adultos e idosos)
- ✅ Campo para seleção de sexo (masculino, feminino ou outro)
- ✅ Feedback visual com a classificação do IMC
- ✅ Layout responsivo e estilizado

## 🧠 Lógica do IMC

- IMC é calculado com a fórmula:

  ```
  IMC = peso / (altura * altura)
  ```

- A classificação do IMC varia de acordo com a faixa etária:
  - Menores de 18 anos: Exibe aviso (IMC não recomendado)
  - Adultos (18-64 anos): Tabela padrão da OMS
  - Idosos (65+): Limites específicos para a terceira idade

## 🚀 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/imc-calculadora.git
   ```

2. Acesse a pasta:
   ```bash
   cd imc-calculadora
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Instale o `Picker`:
   ```bash
   npx expo install @react-native-picker/picker
   ```

5. Rode o projeto:
   ```bash
   npx expo start
   ```

6. Escaneie o QR Code com o app do **Expo Go** no seu celular.

## 🧱 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)

## 🖼️ Imagem

A aplicação utiliza uma imagem localizada em `./assets/bmi.png`. Certifique-se de que ela está presente nessa pasta, ou altere o caminho no código.

## 📁 Estrutura inicial do projeto

Criado com:

```bash
npx create-expo-app App --template
```

Template utilizado: `blank` (sem TypeScript)

---

Desenvolvido com ❤️ por [Seu Nome]
