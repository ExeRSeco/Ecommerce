import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import {SchemaFormCheckout, schemaFormCheckout} from "../../Schemas/SchemaFormCheckout"
import { CreditCardInputs } from "./CreditCardInputs"
import { useNavigate } from "react-router-dom"


export const CreditCard = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/paymethods")
    }
    const {control, handleSubmit, formState: {errors}} = useForm<SchemaFormCheckout>({
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
        console.log(data)
    }

    return (
       <form action="" onSubmit={handleSubmit(onSubmit)} >
            <CreditCardInputs name="name" control={control} label="Name" type="text" error={errors.name} />
            <CreditCardInputs name="email" control={control} label="Email" type="email" error={errors.email} />
            <CreditCardInputs name="phone" control={control} label="Phone" type="number" error={errors.phone} />
            <CreditCardInputs name="address" control={control} label="Address" type="text" error={errors.address} />
            <CreditCardInputs name="city" control={control} label="City" type="text" error={errors.city} />
            <CreditCardInputs name="state" control={control} label="State" type="text" error={errors.state} />
            <CreditCardInputs name="zip" control={control} label="Zip" type="number" error={errors.zip} />
            
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full cursor-pointer hover:bg-blue-600 transition-colors " onClick={handleNavigate}>Proceed to Payment</button>
       </form>
    )
}
