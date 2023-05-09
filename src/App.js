import DefaultRoutes from './routes/index';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <DefaultRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
