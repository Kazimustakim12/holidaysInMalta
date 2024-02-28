export const StarRate = ({ totalStars, className }) => {
  return (
    <>
      <div className="">
        {[...Array(5)].map((_, index) => (
          <span
            className={className}
            key={index}
            style={{
              color: index < totalStars ? "#ffcc00" : "#aaa",
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
    </>
  );
};
