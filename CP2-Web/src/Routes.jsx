import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contatos from "./pages/Contatos/Contatos";
import Projeto from "./pages/Projetos/Projetos";
import PageNotFound from "./pages/PageNotFound/PageNotFound"

function AppRoutes() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/Contatos" element={<Contatos />}> </Route>
                <Route path="/Projetos" element={<Projeto />}> </Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes