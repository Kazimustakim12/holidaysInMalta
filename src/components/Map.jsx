import PropsTypes from "prop-types";

const Map = ({ mapUrl, loading }) => {
  console.log(loading, "map ");
  return (
    <>
      {loading && (
        <div role="status" className="bg-white p-5 rounded-3xl w-full ">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse "></div>
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700 animate-pulse ">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      )}
      {mapUrl && (
        <div className="bg-white p-5 rounded-3xl w-full">
          <h1 className="text-primary-600 font-bold text-3xl">We are here</h1>
          <div className="rounded-3xl h-96 mt-3  overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Map;

Map.propTypes = {
  mapUrl: PropsTypes.string,
  loading: PropsTypes.bool,
};
