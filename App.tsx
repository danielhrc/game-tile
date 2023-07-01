import React from 'react';
import {
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  let text = 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Keyboard.dismiss}>
        <TextInput
          style={styles.bigTile}
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}>
          {text}
        </TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignSelf: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    paddingHorizontal: 24,
    borderRadius: 39,
    borderStyle: 'solid',
  },
  bigTile: {
    fontSize: 240,
    fontWeight: '600',
  },
});

export default App;
