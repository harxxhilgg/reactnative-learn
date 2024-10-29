import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { theme } from './theme';

export default function App() {
  const handleDelete = () => {
    Alert.alert("Are you sure you want to delete this?", "It will be gone for good!", [
      {
        text: "yes",
        onPress: () => console.log("Ok, Deleting"),
        style: "destructive",
      },
      {
        text: "cancel",
        onPress: () => console.log("Ok, Not Deleting"),
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDelete}
          activeOpacity={0.1}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: '200'
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: "uppercase",
    letterSpacing: 1,
  }
});
