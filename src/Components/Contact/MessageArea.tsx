import { Controller } from "react-hook-form"
import {TextAreaProps } from "../../Types/types"


export const MessageArea = ({control, error, label,  placeholder}: TextAreaProps) => {
    return (
    
            <Controller control={control} name="message" render={({field}) => (
                <div className="form-contact__form flex flex-col gap-4 mt-4">
                    <label htmlFor="message" className="form-contact__label text-gray-500 font-bold">{label}</label>
                    <textarea 
                    placeholder={placeholder}
                    className="form-contact__input border-2 border-gray-300 rounded-md p-2 max-h-50 min-h-50" {...field} />
                    {error && <p className="form-contact__error text-red-500">{error.message}</p>}
                </div>
            )} />
   
    )
}
