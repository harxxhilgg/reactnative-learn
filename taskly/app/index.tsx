import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppngListItem';
import { Link, useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate('/idea')}>
        <Text style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}>Go to Idea</Text>
      </TouchableOpacity>
      <Link href="/counter" style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}>Go to Counter</Link>
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
