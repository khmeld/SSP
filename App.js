import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Card>
          <AssetExample
            name="Haier HW60-BP10919A"
            image={require('./assets/mashinka.jpg')}
            description="Стиральная машина Haier белого цвета оснащена барабаном Pillow — его рабочая поверхность покрыта специальными подушечками, по которым белье скользит и не портится. Корпус сделан из пластика, дверь стеклянная."
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="iPhone 11 128GB белый"
            image={require('./assets/iphone2.png')}
            description="Айфон11 128 GB белый  – это продвинутая модель для современного комфорта, полноценного пользования и стильного образа. Для тех, кто собираетесь купить IPhone 11 128 гб   или не знаете на чем лучше остановить свой выбор среди представителей «Яблочных» гаджетов, компания Apple представила модель  – выбор тех, кто не боится обновлений и совершенствований."
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="Сковорода блинная"
            image={require('./assets/skovoroda.jpg')}
            description=" Круглая сковорода для блинов.· Алюминиевый корпус.· Стальная ручка.· Заклепка из сплава AG2.· Плоское основание. В дополнение к идеальной толщине корпуса (3,5 мм) и клепанным эргономичным ручкам, которые предпочитают профессионалы, сковороды серии Regal Granite привлекают большое внимание своим пятислойным гранитным покрытием.· Не содержит вредных веществ, таких как ПФОК.· Подходит для всех типов плит, кроме индукционных."
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 10,
  },
});
