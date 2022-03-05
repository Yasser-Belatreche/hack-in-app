import React from 'react';
import {TextInput, View} from 'react-native';
import {Header} from '../Header/Header';

// styles
import {styles} from './Input.style';

interface Props {
  label: string;
  placeholder: string;
  name: string;
  setInputValues: React.Dispatch<React.SetStateAction<any>>;
  multiline?: boolean;
}

const Input: React.FC<Props> = props => {
  const handleTextChange = (text: string) => {
    props.setInputValues((values: any) => ({...values, [props.name]: text}));
  };

  return (
    <View style={styles.container}>
      <Header style={styles.label} variant="h4" color="blackShadeDarker">
        {props.label}
      </Header>

      <View
        style={{
          ...styles.inputContainer,
          ...(props.multiline && styles.multiline),
        }}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          onChangeText={handleTextChange}
          multiline={props.multiline}
        />
      </View>
    </View>
  );
};

export {Input};
