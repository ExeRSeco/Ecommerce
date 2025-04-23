import { createContext, useContext, useState } from "react";


export const ModalContext = createContext<{
   state: boolean;
   setState: React.Dispatch<React.SetStateAction<boolean>>
}>({
   state: false,
   setState: () => null
}) 

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
   const [state, setState] = useState<boolean>(false)

   return (
              <ModalContext.Provider value={{state, setState}}>
                  {children}
              </ModalContext.Provider>
   )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if(!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

