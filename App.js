import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookAd = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>5 книжных новинок октября</Text>
      <Text style={styles.subtitle}>«Кадиш.com» Натан Ингландер. Издательство «Книжники»</Text>
      <Text style={styles.text}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуона и украинское расследование о создании «Моссада». В нашей подборке рассказываем о пяти заветавшихся книжных новинках, которые достойны того, чтобы появиться на ваших полках.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
     marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    
  
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: 'darkgray',
    flex: 1,
    padding:30
    
  },
  text: {
    flex:7,
    padding:30,
    fontSize: 16,
    
    textAlign: 'center',
    backgroundColor: 'gray',
  },
});

export default BookAd;
