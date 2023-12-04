import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';

export function App() {
  //const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
