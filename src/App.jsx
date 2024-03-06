import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetailPage from "./pages/BlogDetailPage";
import { Suspense } from "react";
import { Spinner } from "flowbite-react";
function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:slug" element={<BlogDetailPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
