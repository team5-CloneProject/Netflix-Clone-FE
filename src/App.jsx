import Globalstyle from './Globalstyle'
import './App.css';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryclinet = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryclinet}>
      <Globalstyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
