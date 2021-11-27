import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import Login from './pages/Login';
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <>
      <Provider store={store} >
        {localStorage.getItem('token') ? (
          <AppRouter />
        ) : <Login />}
      </Provider>

    </>
  );
}

export default App;
