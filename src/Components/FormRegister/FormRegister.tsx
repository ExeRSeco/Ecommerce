import { useForm } from "react-hook-form";
import { FormDataRegister, schemaFormRegister } from "../../Schemas/SchemaFormRegister";
import { InputsFormRegister } from "./InputsFormRegister";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormRegister = () => {
    const { control , handleSubmit, formState: { errors } } = useForm<FormDataRegister>({
        resolver: zodResolver(schemaFormRegister),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        mode: "onTouched",
      });

      const onSubmit = (data: FormDataRegister) => {
        console.log(data);
      }
        
    return (
        <div className='container-register flex flex-col items-center justify-center h-[80vh] w-full bg-gray-900 rounded-lg shadow-lg p-4 m-4  shadow-gray-800'>
            <div className='back-to-home__register mb-4'>
                <a href="/" className='text-white font-bold hover:text-blue-500 transition-all duration-300 bg-gray-900 border-2 border-white rounded-lg p-2'>Back to home</a>
            </div>
            <h2 className='text-5xl font-bold text-center text-white mb-4'>Register</h2>

           <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(onSubmit)}>
            <InputsFormRegister label="Name" name="name" type="text" error={errors.name} control={control} />   
            <InputsFormRegister label="Email" name="email" type="email" error={errors.email} control={control} />
            <InputsFormRegister label="Password" name="password" type="password" error={errors.password} control={control} />
            <InputsFormRegister label="Confirm Password" name="confirmPassword" type="password" error={errors.confirmPassword} control={control}  />

            <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300'>Register</button>
           </form>
        </div>
    )
  
    }

