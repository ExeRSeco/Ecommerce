import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import {SchemaFormCheckout, schemaFormCheckout} from "../../Schemas/SchemaFormCheckout"
import { FormInputProceed } from "./FormInputProceed"
import { useNavigate } from "react-router-dom"


export const CreditCard = () => {
    const navigate = useNavigate()
    
    const {control, handleSubmit, formState: {errors, isValid}} = useForm<SchemaFormCheckout>({
        resolver: zodResolver(schemaFormCheckout),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        },
        mode: "onBlur"
    })
   
    const onSubmit:SubmitHandler<SchemaFormCheckout> = (data) => {
        if (isValid) {
            console.log(data)
            navigate("/paymethods")
        }
    }
    
    return (
       <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto h-full">
            <FormInputProceed name="name" control={control} label="Name" type="text" error={errors.name} />
            <FormInputProceed name="email" control={control} label="Email" type="email" error={errors.email} />
            <FormInputProceed name="phone" control={control} label="Phone" type="number" error={errors.phone} />
            <FormInputProceed name="address" control={control} label="Address" type="text" error={errors.address} />
            <FormInputProceed name="city" control={control} label="City" type="text" error={errors.city} />
            <FormInputProceed name="state" control={control} label="State" type="text" error={errors.state} />
            <FormInputProceed name="zip" control={control} label="Zip" type="number" error={errors.zip} />
            
            <button 
                type="submit" 
                className={`bg-blue-500 text-white px-4 py-2 rounded-md w-full cursor-pointer transition-colors ${
                    !isValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
                disabled={!isValid}

                
            >
                Proceed to Payment
            </button>
       </form>
    )
}
