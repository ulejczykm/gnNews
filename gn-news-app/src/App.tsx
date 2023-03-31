import "./App.scss";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { NewsViewContainer } from "components/NewsViewContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/country/:countryCodes" element={<NewsViewContainer />} />
        <Route path="/" element={<NewsViewContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
