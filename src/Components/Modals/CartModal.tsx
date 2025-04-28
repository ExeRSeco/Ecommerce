import { useEffect, useRef } from "react"
import { AppRouterProps } from "../../Types/types"
import { createPortal } from "react-dom"
import { useModalContext } from "../../Contexts/ModalContext"





export const CartModal = ({children}: AppRouterProps) => {
    const eventListener = "keydown"

    const modalRef = useRef<HTMLDivElement>(null)
    const {state, setState} = useModalContext()
    
    const closeModal = () => {
        setState(false)
    }
    const modalRoot = document.getElementById('cart-modal')

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {      
   e.stopPropagation()
    }

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if(e.key === 'Escape') {
                closeModal()
            }
        }
        if(state) {
            document.addEventListener(eventListener, handleEscape)
        }
        return () => {
            document.removeEventListener(eventListener, handleEscape)
        }
    }, [state, setState])

    
    if(!state || !modalRoot) {
        return null
    }


    return createPortal(
        <div  className="overlay bg-black/50 fixed top-0 left-0 w-full h-full z-10" onClick={closeModal}>
            <div className="cart-modal-container bg-white rounded-md p-4 w-full max-w-3xl min-h-[200px] max-h-[90vh] shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 fixed overflow-y-auto" onClick={handleContentClick} ref={modalRef}>
                {children}

            </div>
        </div>,
        modalRoot as Element
    )
        
    
}
