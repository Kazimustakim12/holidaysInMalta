import { useState } from "react";
import PropTypes from "prop-types";

export const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(text.length > maxLength);
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <p className="text-gray-500 text-base">
          {`${text?.slice(0, maxLength)}...`}
          <br></br>
          <span
            onClick={toggleTruncate}
            className="text-primary-600 cursor-pointer"
          >
            Read more
          </span>
        </p>
      ) : (
        <p>
          {text}
          <span
            onClick={toggleTruncate}
            className={`text-primary-600 cursor-pointer ml-2  ${
              isTruncated ? "block" : "hidden"
            }`}
          >
            Show less
          </span>
        </p>
      )}
    </div>
  );
};
ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
// // Example usage
// function App() {
//   const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//   return (
//     <div>
//       <h1>Read More Component</h1>
//       <ReadMore text={longText} maxLength={50} />
//     </div>
//   );
// }

// export default App;
