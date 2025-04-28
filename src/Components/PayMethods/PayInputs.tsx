import { PaymentInputsContainer } from 'react-payment-inputs';
import { useState } from 'react'; 

export default function PaymentInputs() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    }
    const handleChangeExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryDate(e.target.value);
    }
    const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvc(e.target.value);
    }   

  return (
    <PaymentInputsContainer>
      {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
        <div className='flex flex-col gap-2 w-[500px]'>
          <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} className='border-2 border-gray-300 rounded-md p-2' />
          <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} className='border-2 border-gray-300 rounded-md p-2' />
          <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} className='border-2 border-gray-300 rounded-md p-2' />
          {meta.isTouched && meta.error && <span className='text-red-600'>Error: {meta.error}</span>}
        </div>
      )}
    </PaymentInputsContainer>
  );
}

