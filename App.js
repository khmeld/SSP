import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';



const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это первая страница</Text>
      <Image
        source={require('./assets/mashinka.jpg')} // Укажите путь к изображению
        style={{ width: 200, height: 200 }} // Настройте размеры изображения
      />
      <Button
        title="Далее"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это вторая страница</Text>
      <Image
        source={require('./assets/skovoroda.jpg')} // Укажите путь к изображению
        style={{ width: 200, height: 200 }} // Настройте размеры изображения
      />
      <Button
        title="Далее"
        onPress={() => navigation.navigate('Third')}
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это третья страница</Text>
      <Image
        source={require('./assets/1.png')} // Укажите путь к изображению
        style={{ width: 200, height: 200 }} // Настройте размеры изображения
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
 
  contactText: {
    fontSize: 16,
    marginBottom: 8,
  },
});