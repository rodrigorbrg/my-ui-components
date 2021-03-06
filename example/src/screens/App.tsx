import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';
import { BASE_URL_API } from 'react-native-dotenv';

import {
  Theme,
  withTheme,
  FeedbackWidget,
  FeedbackBody,
  Button,
  TextInput,
  ListItem,
  Searchbar,
  HorizontalScroller,
  Avatar,
} from '@rodrigorbrg/my-ui-components';

function App({ theme }: { theme: Theme }) {
  const [text, setText] = React.useState('');

  const submit = async (body: FeedbackBody) => {
    const defaultHeader = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const appAPI = axios.create({
      baseURL: BASE_URL_API,
      timeout: 60000,
    });
    try {
      appAPI.getUri(defaultHeader);
      await appAPI.post('/feedback', body, defaultHeader); // await fetch('http://localhost:3333/feedback', {
    } catch (e) {
      console.log(e);
    }
  };

  const items = [
    {
      key: '1',
      genre: 'Rock',
    },
    {
      key: '2',
      genre: 'Pagode',
    },
    {
      key: '3',
      genre: 'Sertanejo',
    },
  ];

  const avatars = [
    {
      key: '1',
      img: require('../assets/thought.png'),
      label: 'Rock',
      onPress: () => {},
    },
    {
      key: '2',
      img: require('../assets/thought.png'),
      label: 'Pagode',
      onPress: () => {},
    },
    {
      key: '3',
      img: require('../assets/thought.png'),
      label: 'Sertanejo',
      onPress: () => {},
    },
    {
      key: '4',
      img: require('../assets/thought.png'),
      label: 'Funk',
      onPress: () => {},
    },
    {
      key: '5',
      img: require('../assets/thought.png'),
      label: 'Samba',
      onPress: () => {},
    },
  ];

  const renderItens = ({ item }: any) => {
    return <Avatar {...item} />;
  };

  return (
    <View
      testID="Example Screen"
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FeedbackWidget submitCallback={submit}>
        <TextInput
          value={text}
          onChangeText={(value: string) => setText(value)}
          placeholder={'Insira o texto'}
          mode={'outlined'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ marginVertical: 10, marginHorizontal: 20 }}
        />
        <Searchbar
          value={text}
          onChange={(value: string) => setText(value)}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ marginVertical: 10, marginHorizontal: 20 }}
        />
        <Button
          onPress={() => {
            console.log('click');
          }}
          style={styles.button}
        >
          {'Button 1'}
        </Button>
        <HorizontalScroller items={avatars} renderItens={renderItens} />
        <FlatList
          keyExtractor={(item) => {
            return item.key;
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ marginTop: 16 }}
          data={items}
          renderItem={({ item }) => <ListItem onPress={() => {}} {...item} />}
        />
      </FeedbackWidget>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    // alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginHorizontal: 20,
  },
});

export default withTheme(App);
