import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import PageNotFound from "./pages/PageNotFound";
import WebsiteLoader from "./components/Ui/WebsiteLoader";
const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogDetailPage = React.lazy(() => import("./pages/BlogDetailPage"));
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./App.css";

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
