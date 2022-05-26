// it.todo('write a test');
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Avatar from '../components/Avatar';
import Button from '../components/Button';
import Searchbar from '../components/Searchbar';
import TextInput from '../components/TextInput';

const submitButton = jest.fn();

describe('First test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Button render correctly', async () => {
    const { queryByText } = render(
      <Button onPress={submitButton}>{'Button Test'}</Button>
    );

    const instance = queryByText('Button Test');
    expect(instance).not.toBeNull();

    fireEvent.press(instance);

    expect(submitButton).toHaveBeenCalledTimes(1);
  });

  it('Avatar render correctly', async () => {
    const avatar = {
      key: '1',
      img: require('../assets/thought.png'),
      label: 'Rock',
      onPress: submitButton,
    };
    const { queryByText } = render(<Avatar {...avatar} />);

    const instance = queryByText('Rock');
    expect(instance).not.toBeNull();

    fireEvent.press(instance);

    expect(submitButton).toHaveBeenCalledTimes(1);
  });

  it('Searchbar render correctly', async () => {
    const mockSetState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, mockSetState];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const [state, setState] = useStateMock('');

    const { queryByPlaceholderText } = render(
      <Searchbar
        value={state}
        onChange={setState}
        placeholder={'Busque aqui!'}
      />
    );

    const instance = queryByPlaceholderText('Busque aqui!');
    expect(instance).not.toBeNull();

    fireEvent.changeText(instance, 'bandas');
    expect(mockSetState).toHaveBeenCalledWith('bandas');
  });

  it('TextInput render correctly', async () => {
    const mockSetState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, mockSetState];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const [state, setState] = useStateMock('');

    const { queryByPlaceholderText } = render(
      <TextInput
        value={state}
        onChangeText={setState}
        placeholder={'Texto aqui!'}
      />
    );

    const instance = queryByPlaceholderText('Texto aqui!');
    expect(instance).not.toBeNull();

    fireEvent.changeText(instance, '111.111.111-11');
    expect(mockSetState).toHaveBeenCalledWith('111.111.111-11');
  });
});
