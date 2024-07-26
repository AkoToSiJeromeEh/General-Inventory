import { TextField } from "../TextField";
import { ProdInfoFieldsData, ProdAddInfoFieldsData } from "../../../data";
import { RiArrowDropUpLine } from "react-icons/ri";
import { UseToggle } from "../../../hooks";
export const OrderInfo = () => {
  const [isOpenAddInfo, setOpenAddInfo] = UseToggle(true);

  const ProdInfoFieldElement = ProdInfoFieldsData?.map((data, index) => (
    <TextField
      key={index}
      name={data.name}
      type={data.type}
      label={data.label}
      options={data.option}
      placeholder={data.placeholder}
    />
  ));
  const ProdAddInfoFieldElement = ProdAddInfoFieldsData?.map((data, index) => (
    <TextField
      key={index}
      name={data.name}
      type={data.type}
      label={data.label}
      options={data.option}
      placeholder={data.placeholder}
      isImportant={data.name === 'color' ? false : true}
    />
  ));

  return (
    <div className="mt-5">
      <div className={` grid grid-cols-4 gap-5`}>{ProdInfoFieldElement}</div>
      <div className="mt-3">
        <div className="flex flex-row items-center gap-1 mb-3">
          <h2 className="text-2xl text-blue-500 font-semibold ">
            Additional Information
          </h2>
          <RiArrowDropUpLine
            className="text-blue-500 w-10 h-10 "
            type="button"
            tabIndex={0}
            onClick={() => setOpenAddInfo(preval => !preval)}
          />
        </div>
        {isOpenAddInfo ? (
          <div className="flex flex-col gap-5 mb-5">
            {ProdAddInfoFieldElement}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
