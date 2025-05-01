import { Controller } from "react-hook-form"
import { CreditCardInputsProps } from "../../Types/types"


export const CreditCardInputs = ({name, control, label, type, error}: CreditCardInputsProps) => {
    return (
        <div className="mb-4 px-2 py-2 rounded-md justify-between items-center" >
            <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-2 px-2">{label}</label>
            <Controller 
                control={control}
                name={name}
                render={({field}) => (
                    <input 
                        type={type}  
                        id={name}  
                        {...field}
                        placeholder={label}
                        className={`form-control-checkout bg-white border-2 rounded-md p-2 focus:outline-none focus:ring-0 w-full ${
                            error ? "border-red-500" : "border-gray-300"
                        } ${type === "number" ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" : ""}`}
                    />
                )}
            />
            {error && <p className="text-red-500 text-sm mt-1 px-2">{error.message}</p>}
        </div>
    )
}
