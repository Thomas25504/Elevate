import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
      style={styles.container}
    >
      <Text>Progress</Text>
    </View>
    <View
      style={styles.container}
    >
      <Text>Workouts</Text>
    </View>
    <View
      style={styles.container}
    >
      <Text>Macros</Text>
    </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
  }
});