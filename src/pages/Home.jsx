import { useEffect, useState } from "react";
import AboutSpace from "../components/AboutSpace";
import AgentInfo from "../components/AgentInfo";
import BannerSlider from "../components/BannerSlider";
import CompanyInfo from "../components/CompanyInfo";
import FloatContainer from "../components/FloatContainer";
import Map from "../components/Map";
import ReviewSlider from "../components/ReviewSlider";
import { Spinner } from "flowbite-react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const fetchDataInternal = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      setData(data);
      setCurrentData(data[currentIndex]);
    };
    fetchDataInternal();
  }, [currentIndex]);

  const prevDataFn = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextDataFn = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      {loading || currentData === null ? (
        <div className="h-screen flex items-center justify-center bg-primary-400">
          <Spinner aria-label="Default status example" />;
        </div>
      ) : (
        <main>
          <div className="bg-primary-400 bg-[url('./assets/bg_transparent.png')] bg-cover bg-no-repeat bg-blend-color-burn">
            <BannerSlider imagesArray={currentData?.imagesArray} />
          </div>
          <div className="container relative mt-[-40px] lg:mt-[-80px] z-10">
            <FloatContainer
              prevDataFn={prevDataFn}
              nextDataFn={nextDataFn}
              currentData={currentData && currentData}
            />
          </div>
          <div className="container mt-6">
            <div className="flex gap-6 lg:flex-nowrap flex-wrap">
              <div className="lg:w-8/12 w-full">
                <Map />
                <AboutSpace />
              </div>
              <div className="lg:w-4/12 w-full ">
                <div className="bg-secondary-500 rounded-3xl overflow-hidden md:flex lg:block">
                  <AgentInfo />
                  <CompanyInfo />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ReviewSlider />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
