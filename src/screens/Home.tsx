import React, { memo, useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { IUseNavigation, useNavigation } from '~/hooks/useNavigation';

interface IProps extends IUseNavigation {}

const HomeScreen = memo<IProps>(props => {
  const navigation = useNavigation(props);

  const goToAbout = useCallback(() => navigation.navigate('About'), [navigation]);

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button title='Go to About' onPress={goToAbout} />
    </View>
  );
});

export default HomeScreen;
