import React from 'react';
import {Picker} from '@react-native-picker/picker';

// styles
import {styles} from './DropDown.style';
import {Header} from '../Header/Header';
import {View} from 'react-native';

interface Props {
  items: {label: string; value: string}[];
  name: string;
  setInputValues: React.Dispatch<React.SetStateAction<any>>;
  selectedValue: string;
}

const DropDown: React.FC<Props> = props => {
  const handleChange = (value: string) => {
    props.setInputValues((values: any) => ({...values, [props.name]: value}));
  };

  return (
    <>
      <Header style={styles.label} variant="h4" color="blackShadeDarker">
        {props.name}
      </Header>
      <View style={styles.container}>
        <Picker
          onValueChange={handleChange}
          selectedValue={props.selectedValue}>
          {props.items.map(item => {
            return <Picker.Item {...item} key={item.label} />;
          })}
        </Picker>
      </View>
    </>
  );
};

export {DropDown};
