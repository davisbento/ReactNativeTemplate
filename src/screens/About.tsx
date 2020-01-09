import React, { memo, useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { IUseNavigation, useNavigation } from '~/hooks/useNavigation';

interface IProps extends IUseNavigation {}

const AboutScreen = memo<IProps>(props => {
  const navigation = useNavigation(props);

  const goToHome = useCallback(() => navigation.navigate('Home'), [navigation]);

  return (
    <View>
      <Text>AboutScreen</Text>

      <Button title='Go to Home' onPress={goToHome} />
    </View>
  );
});

export default AboutScreen;
