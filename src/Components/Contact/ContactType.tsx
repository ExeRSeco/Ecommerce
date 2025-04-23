import { Controller } from "react-hook-form";
import { ContactTypeProps } from "../../Types/types";

export const ContactType = ({ control, error }: ContactTypeProps) => {
  return (
    <div className="form-contact__group">
      <Controller 
        control={control} 
        name="contactType" 
        render={({ field }) => (
          <div className="form-contact__form flex flex-col gap-4 mt-4">
            <label htmlFor="contactType" className="form-contact__label text-gray-500 font-bold ">
              Reason For Contact
            </label>
            <select 
              id="contactType" 
              className={`form-contact__input border-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              {...field}
            >
              <option value="">Select a reason</option>
              <option value="consulta">General Inquiry</option>
              <option value="soporte">Technical Support</option>
              <option value="ventas">Sales</option>
              <option value="reclamos">Complaints</option>
              <option value="sugerencias">Suggestions</option>
              <option value="otros">Other</option>
            </select>
            {error && <p className="form-contact__error text-red-500">{error.message}</p>}
          </div>
        )} 
      />
    </div>
  );
};
