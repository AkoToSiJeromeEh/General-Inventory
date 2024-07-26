import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { LuAsterisk } from "react-icons/lu";
export const TextField = ({
  type,
  name,
  label,
  placeholder,
  options,
  isImportant = true 
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        type === "number" || type === "select" ? `${label === 'Pricing Model' ? 'col-span-4' : label === 'Price' ? 'col-span-3' : label === 'Quantity' ? 'col-span-2' :  label === 'Invoice No.' ? 'col-span-4' : 'col-span-1' }` : "col-span-4"
      }`}
    >
     <div className="flex flex-row items-center gap-2">
     <label className={`font-medium`} htmlFor={name}>
        {label}
      </label>
     {isImportant &&  <LuAsterisk className="text-red-400 w-4 h-4"/>}
     </div>
      {type === "select" ? (
        <Field
          as="select"
          id={name}
          name={name}
          className={` border-2  border-dark_mode-lighter  p-2 rounded-md bg-transparent `}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
       

          <Field
          type={type}
          name={name}
          id={name}
          className={`  bg-light_mode-primary border-2  p-2 rounded-md `}
          placeholder={placeholder}
        />
      )}
        


      <ErrorMessage
        name={name}
      >
        {(msg) => (
          <div title={msg}>
            <span className=" text-red-400 text-[0.9rem] font-bold ">
              {msg}
            </span>
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};
TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isImportant : PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};
