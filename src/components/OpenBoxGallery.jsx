import { useCallback, useRef } from "react";
import PropsTypes from "prop-types";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { BoxMenuIcon } from "./IconSvg";
export const OpenBoxGallery = ({ imagesArray = [] }) => {
  const newImagesArray = [
    ...imagesArray.map((item) => {
      return {
        src: item.src,
        thumb: item.src,
      };
    }),
  ];
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="header__button relative z-50 bg-white py-2 px-4 rounded-xl flex items-center justify-center text-sm"
        onClick={() => {
          lightGallery.current.openGallery(0);
        }}
      >
        <BoxMenuIcon className="text-primary-600 mr-1" />
        {`See all  photos`}
      </button>
      <LightGallery
        onInit={onInit}
        elementClassNames={""}
        dynamic={true}
        plugins={[lgZoom, lgThumbnail]}
        dynamicEl={newImagesArray}
      ></LightGallery>
    </>
  );
};

OpenBoxGallery.propTypes = {
  imagesArray: PropsTypes.array,
};
