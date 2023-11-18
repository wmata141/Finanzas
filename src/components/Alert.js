import { Alert } from 'react-native';

const alert = (title, message, onPressOk) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: onPressOk,
      },
    ]
  );
}

export default alert