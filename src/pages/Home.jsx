import { useEffect, useState } from "react";
import AboutSpace from "../components/AboutSpace";
import AgentInfo from "../components/AgentInfo";
import BannerSlider from "../components/BannerSlider";
import CompanyInfo from "../components/CompanyInfo";
import FloatContainer from "../components/FloatContainer";
import Map from "../components/Map";
import ReviewSlider from "../components/ReviewSlider";
// import { Spinner } from "flowbite-react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextBtnDisable, setnextBtnDisable] = useState(false);
  const [preBtnDisable, setpreBtnDisable] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    setpreBtnDisable(currentIndex === 0);
    setnextBtnDisable(currentIndex === data.length - 1);
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

  return (
    <>
      {loading || currentData === null ? (
        <>
          <main>
            <div className="bg-primary-400 bg-[url('./assets/bg_transparent.png')] bg-cover bg-no-repeat bg-blend-color-burn">
              <BannerSlider loading />
            </div>
            <div className="container relative mt-[-40px] lg:mt-[-80px] z-10">
              <FloatContainer loading />
            </div>
            <div className="container mt-6">
              <div className="flex gap-6 lg:flex-nowrap flex-wrap">
                <div className="lg:w-8/12 w-full">
                  <Map loading />
                  <AboutSpace loading />
                </div>
                <div className="lg:w-4/12 w-full ">
                  <div className="bg-secondary-500 rounded-3xl overflow-hidden md:flex lg:block">
                    <AgentInfo loading />
                    {/* <CompanyInfo compnayInfo={currentData?.companyInfo} /> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
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
              preBtnDisable={preBtnDisable}
              nextBtnDisable={nextBtnDisable}
            />
          </div>
          <div className="container mt-6">
            <div className="flex gap-6 lg:flex-nowrap flex-wrap">
              <div className="lg:w-8/12 w-full">
                <Map mapUrl={currentData?.mapUrl} loading={loading} />
                <AboutSpace aboutDetail={currentData?.aboutInfo} />
              </div>
              <div className="lg:w-4/12 w-full ">
                <div className="bg-secondary-500 rounded-3xl overflow-hidden md:flex lg:block">
                  <AgentInfo agentDetails={currentData?.agentInfo} />
                  <CompanyInfo compnayInfo={currentData?.companyInfo} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ReviewSlider reviewList={currentData?.reviews} />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
