import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInputs } from "./ContactInputs";
import { ContactType } from "./ContactType";
import { MessageArea } from "./MessageArea";
import { FormData, formSchema } from "../../Schemas/SchemaForms";



export const FormContact = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      contactType: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="form-contact bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="form-contact__title text-4xl font-bold text-center mb-4">Contact Us</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="form-contact__description text-center text-gray-500 mt-4">We are here to help you. Please fill out the form below and we will get back to you as soon as possible.</p>

      <form className="form-contact__form flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <ContactInputs label="Full Name" name="name" type="text" error={errors.name} control={control} placeholder="Full Name" />
        <ContactInputs label="Email" name="email" type="email" error={errors.email} control={control} placeholder="Email" />
        <ContactInputs label="Phone" name="phone" type="tel" error={errors.phone} control={control} placeholder="Phone" />
        <ContactType control={control} error={errors.contactType} />
        <MessageArea control={control} error={errors.message} label="Message" placeholder="Message" />
        
        <button 
          type="submit" 
          className="form-contact__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:text-white font-bold"
        >
          Send
        </button>
      </form>
    </div>
  )
}
