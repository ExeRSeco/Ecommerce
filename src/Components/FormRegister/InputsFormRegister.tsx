import { Control, Controller, FieldError } from "react-hook-form";
import { FormDataRegister } from "../../Schemas/SchemaFormRegister";


interface InputsFormRegisterProps {
    label: string;
    name: keyof FormDataRegister;
    type?: string;
    error?: FieldError;
    control: Control<FormDataRegister>;
}
export const InputsFormRegister = ({label, name, type, error, control}: InputsFormRegisterProps) => {


    return (
        <Controller control={control} name={name} render={({field}) => (
            <div className="form-contact__form flex flex-col gap-4 mt-4">
              <label htmlFor={name}   className="form-contact__label text-gray-500 font-bold">{label}</label>
              <input type={type} id={name} placeholder={label}
              className={`form-contact__input border-2 border-gray-300 rounded-md p-2 text-white ${error ? 'border-red-500' : ''}`} {...field} />
              {error  && <p className="form-contact__error text-red-500">{error.message}</p>}
            </div>
          )} />
    )
}
