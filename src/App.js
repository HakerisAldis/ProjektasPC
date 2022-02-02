import './App.css';
import Navbar from './components/layout/NavBar';
import Router from './routes/router';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';
import { AuthProvider } from './services/auth';
import ErrorBoundary from './ErrorBoundary';

initializeApp(firebaseConfig);

function App () {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Navbar />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
