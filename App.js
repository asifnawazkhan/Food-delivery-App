import { Text, View } from 'react-native';
import Navigation from './Nevigation';
import { store } from './Stores'
import { Provider } from 'react-redux'




export default function App() {
  return (
    <Provider store={store}>
          <Navigation />
    </Provider>
  );
}
