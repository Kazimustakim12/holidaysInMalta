import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
