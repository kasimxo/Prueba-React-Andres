import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/Layout';
import { Inicio } from './pages/Inicio';
import { Series } from './pages/Series';
import { Peliculas } from './pages/Peliculas';
import { Error } from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="series" element={<Series />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
