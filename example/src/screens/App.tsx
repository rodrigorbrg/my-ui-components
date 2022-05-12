import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';

import {
  Theme,
  withTheme,
  FeedbackWidget,
  FeedbackBody,
  Button,
  TextInput,
  ListItem,
  Searchbar,
} from 'widget-feedback';

function App({ theme }: { theme: Theme }) {
  const [text, setText] = React.useState('');

  const submit = async (body: FeedbackBody) => {
    const defaultHeader = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const appAPI = axios.create({
      baseURL: 'https://widget-feedback-server-production-6d50.up.railway.app',
      timeout: 60000,
    });
    try {
      appAPI.getUri(defaultHeader);
      // await appAPI.post('/feedback', body, defaultHeader); // await fetch('http://localhost:3333/feedback', {
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

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FeedbackWidget submitCallback={submit}>
        <TextInput
          value={text}
          placeholder={'Insira o texto'}
          mode={'outlined'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ marginVertical: 10, marginHorizontal: 20 }}
          onChangeText={(value: string) => setText(value)}
        />
        <Searchbar
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ marginVertical: 10, marginHorizontal: 20 }}
          value={text}
          onChange={(value: string) => setText(value)}
        />
        <Button onPress={() => {}} style={styles.button}>
          {'Button 1'}
        </Button>
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
