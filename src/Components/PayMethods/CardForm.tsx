import React, { useState } from 'react';
import { validateCompleteCard } from '../../utils/cardValidation';

export const CardForm = () => {
    const [formData, setFormData] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    });

    const [validation, setValidation] = useState<any>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Validar en tiempo real
        const result = validateCompleteCard({
            ...formData,
            [name]: value
        });
        setValidation(result);

        // Si todos los campos son válidos, puedes proceder con el pago
        if (result.isValid) {
            console.log('Tarjeta válida:', {
                ...formData,
                [name]: value
            });
            // Aquí puedes agregar la lógica para proceder con el pago
        }
    };

    const [isFocused, setIsFocused] = useState(false);

    const focus = () => {
        setIsFocused(true);
    }

    const blur = () => {
        setIsFocused(false);
    }

    return (
        <form className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md w-[500px] transition-all duration-500 ease-in-out">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none ${isFocused ? 'border-blue-500' : 'border-gray-300'} transition-all duration-500 ease-in-out`}
                    placeholder="1234 5678 9012 3456"
                    onFocus={focus}
                    onBlur={blur}
                />
                {validation?.details.number && (
                    <p className={`text-sm mt-1 ${validation.details.number.isValid ? 'text-green-600' : 'text-red-600'}`}>
                        {validation.details.number.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Fecha de vencimiento</label>
                <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none ${isFocused ? 'border-blue-500' : 'border-gray-300'} transition-all duration-500 ease-in-out`}  
                    placeholder="MM/AA"
                    onFocus={focus}
                    onBlur={blur}
                />
                {validation?.details.expiry && (
                    <p className={`text-sm mt-1 ${validation.details.expiry.isValid ? 'text-green-600' : 'text-red-600'}`}>
                        {validation.details.expiry.message}
                    </p>    
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none ${isFocused ? 'border-blue-500' : 'border-gray-300'} transition-all duration-500 ease-in-out`}
                    placeholder="123"
                    onFocus={focus}
                    onBlur={blur}
                />
                {validation?.details.cvv && (
                    <p className={`text-sm mt-1 ${validation.details.cvv.isValid ? 'text-green-600' : 'text-red-600'}`}>
                        {validation.details.cvv.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nombre del titular</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded focus:outline-none    ${isFocused ? 'border-blue-500' : 'border-gray-300'} transition-all duration-500 ease-in-out`}
                    placeholder="JUAN PEREZ"
                    onFocus={focus}
                    onBlur={blur}
                />
                {validation?.details.name && (
                    <p className={`text-sm mt-1 ${validation.details.name.isValid ? 'text-green-600' : 'text-red-600'}`}>
                        {validation.details.name.message}
                    </p>
                )}
            </div>
        </form>
    );
}; 