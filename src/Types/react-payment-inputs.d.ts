declare module 'react-payment-inputs' {
    export interface usePaymentInputsData {
        elements: {
            cardNumber: React.RefObject<HTMLDivElement>;
            expiryDate: React.RefObject<HTMLDivElement>;
            cvc: React.RefObject<HTMLDivElement>;
        };
        getCardNumberProps: () => any;
        getExpiryDateProps: () => any;
        getCvcProps: () => any;
    }
    
    export function usePaymentInputs(): usePaymentInputsData;

    export interface PaymentInputsContainerProps {
        children: (props: {
            meta: {
                isTouched: boolean;
                error: string;
            };
            getCardNumberProps: (props?: any) => any;
            getExpiryDateProps: (props?: any) => any;
            getCVCProps: (props?: any) => any;
        }) => React.ReactNode;
    }

    export const PaymentInputsContainer: React.FC<PaymentInputsContainerProps>;
} 