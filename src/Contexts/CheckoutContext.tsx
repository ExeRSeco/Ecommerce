import { createContext, useContext } from "react"

type CheckoutContextType = {
    isCheckout: boolean
}

const CheckoutContext = createContext<CheckoutContextType>({
    isCheckout: false
})

export const useCheckout = () => {
    const context = useContext(CheckoutContext)
    if (!context) {
        throw new Error('useCheckout must be used within a CheckoutProvider')
    }
    return context
}

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <CheckoutContext.Provider value={{ isCheckout: true }}>
            {children}
        </CheckoutContext.Provider>
    )
} 