import { Button } from "flowbite-react";
import { CellPhoneIcon, WhatsApp } from "./IconSvg";

const AgentInfo = () => {
  return (
    <>
      <div className="p-4 rounded-3xl bg-white">
        <div className="flex items-center">
          <div className="">
            <img src="/assets/slaeperson.png" alt="agent-img" />
          </div>
          <div className="info ml-4">
            <h3 className="text-primary-600 font-bold leading-[normal] text-2xl">
              Mirko
            </h3>
            <div className="flex flex-col">
              <a
                href=""
                className="text-sm pt-2 font-bold hover:text-primary-600 cursor-pointer "
              >
                +356 99303141
              </a>
              <a
                href="mirko@holidaysinmalta.eu"
                className="text-sm pt-2 font-normal hover:text-primary-600 cursor-pointer "
              >
                mirko@holidaysinmalta.eu
              </a>
            </div>
          </div>
        </div>
        <div className="cta-btn flex  gap-2 mt-4">
          <Button
            size="md"
            className="w-full bg-primary-600 enabled:hover:bg-primary-500 hover:text-primary-600 group hover:bg-primary-500 hover:border hover:border-primary-600  font-bold text-2xl"
          >
            <CellPhoneIcon className="fill-white mr-3 group-hover:fill-primary-600" />
            Call me
          </Button>
          <Button
            size="md"
            className="w-full bg-sucess-600 enabled:hover:bg-green-500 hover:text-white group hover:bg-green-500 hover:border hover:border-green-600  font-bold text-2xl"
          >
            <WhatsApp className="fill-white mr-3 group-hover:fill-white-600" />
            WhatsApp me
          </Button>
        </div>
      </div>
    </>
  );
};

export default AgentInfo;
