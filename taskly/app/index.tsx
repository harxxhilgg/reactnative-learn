import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppngListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Whiskey" />
      <ShoppingListItem name="Spirit" isCompleted />
      <ShoppingListItem name="Vodka" isCompleted />
      <ShoppingListItem name="Bacardi" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
