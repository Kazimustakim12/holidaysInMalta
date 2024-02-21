import Header from "./components/Header";
import Slider from "./components/Slider";
import "./App.css";
import Layout from "./components/Layout";
import Float from "./components/Float";
import Map from "./components/Map";
function App() {
  return (
    <>
      <main>
        <Layout>
          <div className="bg-primary-400 bg-[url('./assets/bg_transparent.png')] bg-cover bg-no-repeat bg-blend-color-burn">
            <Header />
            <Slider />
          </div>
          <div className="container relative">
            <Float />
          </div>
          <div className="container pt-[180px]">
            <Map />
          </div>
        </Layout>
      </main>
    </>
  );
}

export default App;
