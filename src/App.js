import './App.css';
import Login from './pages/Login';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      {localStorage.getItem('token') ? (
        <AppRouter />

      ) : <Login />}
    </>
  );
}

export default App;
