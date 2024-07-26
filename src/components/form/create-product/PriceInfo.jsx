import { TextField } from "../TextField"
import { PricingInfoFieldsData  } from "../../../data"

export const PriceInfo = () => {

  const PricingFieldElement = PricingInfoFieldsData?.map((data , index) => (

    <TextField
     key={index}
     name={data.name}
     type={data.type}
     label={data.label}
     options={data.option}
     placeholder={data.placeholder}
    />
  ))

  return (
	<div className="mt-5">
    <div className={` grid grid-cols-4 gap-5`}>
      {PricingFieldElement}
    </div>
  </div>
  )
}

