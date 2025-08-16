// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portifolio";
import ContatoEmail from "./components/ContatoEmail";
import './scrollbar.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contato-email" element={<ContatoEmail />} />
      </Routes>
    </BrowserRouter>
  );
}
