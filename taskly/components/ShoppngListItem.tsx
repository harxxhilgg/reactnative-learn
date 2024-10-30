import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';

type Props = {
  name: String;
  isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone for good!",
      [
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
    <View style={[
      styles.itemContainer,
      isCompleted ? styles.completedContainer : undefined
    ]}>
      <Text style={[
        styles.itemText,
        isCompleted ? styles.completedText : undefined
      ]}>{name}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined
        ]}
        onPress={handleDelete}
        activeOpacity={0.1}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray
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
  completedButton: {
    backgroundColor: theme.colorGray
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
    color: theme.colorGray,
  }
});
