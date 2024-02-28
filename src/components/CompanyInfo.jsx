const CompanyInfo = () => {
  return (
    <>
      <div className="p-4">
        <div>
          <span className="text-secondary-600 text-sm font-semibold leading-[normal]">
            Company
          </span>
          <h2 className="text-white text-2xl font-semibold leading-[normal] mb-3">
            Karma Real Estates LTD
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="p-2.5 border border-secondary-400 rounded-xl">
              <p className="text-sm font-normal leading-[normal] font-blinker text-[#5a7d64]">
                <strong>Malta Headquater: </strong>
                <br />
                9 Daniela Court, 197 Marina StreetPTA9041, Pietà, Malta <br />
                <strong>VAT:</strong> MT25816110
              </p>
            </li>
            <li className="p-2.5 border border-secondary-400 rounded-xl">
              <p className="text-sm font-normal leading-[normal] font-blinker text-[#5a7d64]">
                <strong>Malta Headquater: </strong>
                <br />
                9 Daniela Court, 197 Marina StreetPTA9041, Pietà, Malta <br />
                <strong>VAT:</strong> MT25816110
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
