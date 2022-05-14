# widget-feedback

React Native widget component for feedbacks

## Debug Example

- `yarn example start`: start the Metro server for the example app.
- `yarn example android`: run the example app on Android.
- `yarn example ios`: run the example app on iOS.

## Installation

```sh
npm install @rodrigorbrg/my-ui-components react-native-gesture-handler react-native-reanimated react-native-view-shot
```

Add on babel.config.js

```sh
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

## Usage

```js
import { FeedbackWidget } from '@rodrigorbrg/my-ui-components';

// ...

return <FeedbackWidget />;
```

```js
import { ThemeProvider, Theme } from '@rodrigorbrg/my-ui-components';

// ...

return (
  <ThemeProvider theme={theme}>
    <Navigator />
  </ThemeProvider>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
