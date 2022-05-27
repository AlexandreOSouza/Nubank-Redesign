import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Resumo da fatura',
    iconName: 'ios-stats-chart-outline'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Limite disponivel',
    iconName: 'ios-toggle-outline',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pagar fatura',
    iconName: 'ios-scan'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    title: 'Cartão virtual',
    iconName: 'md-card-outline'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6323',
    title: 'Antecipar parcelas',
    iconName: 'ios-timer'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d725',
    title: 'Emprestimo',
    iconName: 'md-wallet'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5g3abb28baa',
    title: 'Cartão virtual',
    iconName: 'md-card-outline'
  },
  {
    id: '3ac68afc-c605-48d3-a4fw8-fbd91aa97f6323',
    title: 'Antecipar parcelas',
    iconName: 'ios-timer'
  },
  {
    id: '58694a0f-3da1-471f-bd9d6-145571e29d725',
    title: 'Emprestimo',
    iconName: 'md-wallet'
  },
];

const Item = ({ title, iconName }) => (
  <View style={styles.item}>
    <View style={styles.itemTitle}>
        <Icon name={iconName} size={20} color="#f2edf5"/>
        <Text style={styles.title}>{title}</Text>
    </View>
    <Icon name="md-chevron-forward" size={10} color="#f2edf5"/>
  </View>
);

const HEADER_HEIGHT = 240;

const List = ({ setHeaderHeight, setFoldHeader }) => {
  const RenderItem = ({ item }) => (
    <Item title={item.title} iconName={item.iconName} />
  );

  const handleScroll = (e) => {
    const scrolling = parseInt(e.nativeEvent.contentOffset.y);
    if (scrolling >= 90) {
      setFoldHeader(true);
    } else {
      setFoldHeader(false);
    }




    const headerHeight = (prevState) => scrolling > 0 ? 
      (HEADER_HEIGHT - Math.abs(scrolling)) + 10 : 
      scrolling <= 0 ? HEADER_HEIGHT :
      (prevState + scrolling) + 10;

    setHeaderHeight(prevState => headerHeight(prevState))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        onScroll={e => handleScroll(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    width: '100%',
    height: 320,
    marginBottom: 20,
    flex: 1
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: '#f2edf5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    color: '#f2edf5',
    marginLeft: 8
  },
  itemTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
  subValue: {
    fontSize: 12,
    color: '#1aed21',
    marginLeft: 8
  },
});

export default List;