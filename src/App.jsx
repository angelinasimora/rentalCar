import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/homePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
