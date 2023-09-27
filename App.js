import { StyleSheet, Text, View, FlatList } from 'react-native';
import {DATA} from './DATA';
import Row from './components/Row';

export default function App() {

/*function renderItem({item}) {
  return (<Text>{item.lastname}</Text>);
}*/

/*const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
)*/

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row person={item} />
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
