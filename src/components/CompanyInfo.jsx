import PropsTypes from "prop-types";

const CompanyInfo = ({ compnayInfo }) => {
  return (
    <>
      <div className="p-4">
        <div>
          <span className="text-secondary-600 text-sm font-semibold leading-[normal]">
            Company
          </span>
          <h2 className="text-white text-2xl font-semibold leading-[normal] mb-3">
            {compnayInfo.name}
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            {compnayInfo.branches.map((item, index) => {
              return (
                <li
                  key={item.location + index}
                  className="p-2.5 border border-secondary-400 rounded-xl"
                >
                  <p className="text-sm font-normal leading-[normal] font-blinker text-[#5a7d64]">
                    <strong>{item.location}</strong>
                    <br />
                    {item.address}
                    <br />
                    <strong>VAT:</strong> {item.VAT}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
CompanyInfo.propTypes = {
  compnayInfo: PropsTypes.shape([
    PropsTypes.shape({
      name: PropsTypes.string.isRequired,
      logo: PropsTypes.string.isRequired,
      branches: PropsTypes.arrayOf(
        PropsTypes.shape({
          location: PropsTypes.string.isRequired,
          address: PropsTypes.string.isRequired,
          phone: PropsTypes.string.isRequired,
          email: PropsTypes.string.isRequired,
          VAT: PropsTypes.string.isRequired,
        })
      ),
    }),
  ]),
};
