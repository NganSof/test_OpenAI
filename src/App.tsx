import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeProducts from "./components/HomeProducts";
import ItemProducts from "./components/ItemProducts";
import { Header } from "./template/Header";
import { Footer } from "./template/Footer";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomeProducts />}></Route>
          <Route path="/idPro" element={<ItemProducts />}></Route>
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
