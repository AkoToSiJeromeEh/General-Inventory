import { TextField } from "../TextField";
import { OrderInfoFieldsData } from "../../../data";
export const ProductInfo = () => {
  const OrderFieldElement = OrderInfoFieldsData?.map((data, index) => (
    <TextField
      key={index}
      name={data.name}
      type={data.type}
      label={data.label}
      options={data.option}
      placeholder={data.placeholder}
    />
  ));

  return (
    <div className="mt-5">
      <div className={` grid grid-cols-4 gap-5`}>{OrderFieldElement}</div>
    </div>
  );
};
