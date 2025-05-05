import { ReactNode, ErrorInfo } from "react";
import { Control, FieldError} from "react-hook-form";
import { FormData } from "../Schemas/SchemaForms";
import { SchemaFormCheckout } from "../Schemas/SchemaFormCheckout";
//INTERFACES FOR CONTACT FORM
interface AppRouterProps {
    children: ReactNode;
}

interface ContactInputsProps {
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    error?: FieldError;
    control: Control<FormData>;
}
interface ContactTypeProps {
    control: Control<FormData>;
    error?: FieldError;
  }
interface TextAreaProps {
    control: Control<FormData>;
    error?: FieldError;
    label: string;
    placeholder?: string;
}

//INTERFACES FOR PRODUCTS

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    thumbnail?: string;
    images?: string[];
    quantity: number;
}


interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    cartItems: CartItem[]
}

interface CartAction {
    type: string
    payload: CartItem
}

interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}

interface CreditCardInputsProps {
    label: string;
    name: keyof SchemaFormCheckout;
    type?: string;
    placeholder?: string;
    error?: FieldError;
    control: Control<SchemaFormCheckout>;
}   

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export type { AppRouterProps, ContactInputsProps, ContactTypeProps, TextAreaProps, Product, CartState, CartAction, CartItem, CartContextType, CreditCardInputsProps, ErrorBoundaryProps, ErrorBoundaryState}
