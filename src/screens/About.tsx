import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

export const AboutScreen = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={styles.container}>
          <Text>Just some default screen to showcase routing example.</Text>
          <Button onPress={navigation.goBack} title="Go Back" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    with: '100%',
  },
});
