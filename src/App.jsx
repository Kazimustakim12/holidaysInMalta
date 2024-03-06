import Layout from "./components/Layout";
// import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Blog from "./pages/Blog";
// import BlogDetailPage from "./pages/BlogDetailPage";
import React, { Suspense } from "react";
import PageNotFound from "./pages/PageNotFound";
import WebsiteLoader from "./components/Ui/WebsiteLoader";

const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogDetailPage = React.lazy(() => import("./pages/BlogDetailPage"));

function App() {
  return (
    <>
      {/* <WebsiteLoader /> */}
      <Suspense fallback={<WebsiteLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:slug" element={<BlogDetailPage />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
