import { Header } from "components/Header";
import { Footer } from "components/Footer";
import "./App.scss";
import { NewsViewContainer } from "components/NewsViewContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <NewsViewContainer />
      <Footer />
    </div>
  );
}

export default App;
