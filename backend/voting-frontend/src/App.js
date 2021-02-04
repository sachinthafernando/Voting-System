import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Admin from './components/Admin';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
      <Admin />
      </Container>
      </Provider>
  );
}

export default App;
