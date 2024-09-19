import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export const Pagina = createContext();

const PaginaProvider = ({ children }) => {
  // titulos peliculas series
  const [pagina, setPagina] = useState('titulos')

  return (
    <Pagina.Provider value={
      {
        pagina, setPagina
      }
    }>{children}</Pagina.Provider>
  )
}

function App() {
  return (
    <div className="App">
      <PaginaProvider>
        <Header />
        <Main />
        <Footer />
      </PaginaProvider>
    </div>
  );
}

export default App;
