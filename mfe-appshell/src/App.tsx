import { GlobalProvider } from './context/GlobalProvider';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  );
}
