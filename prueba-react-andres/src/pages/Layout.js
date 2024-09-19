import { Outlet, Link } from "react-router-dom";
import { createContext, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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

export function Layout() {
    return (
        <div>
            <PaginaProvider>
                <Header />
                <Outlet />
                <Footer />
            </PaginaProvider>

        </div>
    )
}