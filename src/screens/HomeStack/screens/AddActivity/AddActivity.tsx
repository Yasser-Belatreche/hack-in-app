import {View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import {styles} from './AddActivity.style';

import {TopHead} from '../../../../components/TopHead/TopHead';
import {Input} from '../../../../components/Input/Input';
import {Button} from '../../../../components/Button/ Button';
import {ActivitiesManager} from '../../../../apis/ActivitiesManager';
import {showToast} from '../../../../utils/helpers/showToast';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

interface ActivityInfo {
  title: string;
  desc: string;
}

const AddActivity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activityInfo, setActivityInfo] = useState<ActivityInfo>({
    title: '',
    desc: '',
  });

  const handleSubmit = async () => {
    const {title, desc} = activityInfo;
    const authToken = await AsyncStorageLib.getItem('token');
    if (!title || !desc || !authToken) return;

    setIsLoading(true);
    ActivitiesManager.addActivity({authToken, title, desc})
      .then(() => {
        setIsLoading(false);
        setActivityInfo({title: '', desc: ''});

        showToast('your Activity added successfully');
      })
      .catch(() => {
        showToast('something went wrong');
      });
  };

  return (
    <>
      <TopHead title="Add Activity" />
      <View style={styles.container}>
        <Input
          label="Title"
          name="title"
          placeholder="Activity title"
          setInputValues={setActivityInfo}
        />
        <Input
          label="Description"
          name="desc"
          placeholder="Activity description"
          setInputValues={setActivityInfo}
          multiline
        />
        <Button variant="primary" onPress={handleSubmit}>
          {isLoading ? <ActivityIndicator color={'white'} /> : 'Submit'}
        </Button>
      </View>
    </>
  );
};

export {AddActivity};
