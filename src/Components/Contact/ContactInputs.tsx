import { Controller } from "react-hook-form";
import { ContactInputsProps } from "../../Types/types";


export const ContactInputs = ({label, name, type, error, control}: ContactInputsProps) => {
    return (
        
        <Controller control={control} name={name} render={({field}) => (
            <div className="form-contact__form flex flex-col gap-4 mt-4">
              <label htmlFor={name}   className="form-contact__label text-gray-500 font-bold">{label}</label>
              <input type={type} id={name} placeholder={label}
              className={`form-contact__input border-2 border-gray-300 rounded-md p-2 ${error ? 'border-red-500' : ''}`} {...field} />
              {error  && <p className="form-contact__error text-red-500">{error.message}</p>}
            </div>
          )} />
            
       
    )
}
