import valid from 'card-validator';

// Ejemplo de validación de número de tarjeta
export const validateCardNumber = (number: string) => {
    const validation = valid.number(number);
    
    return {
        isValid: validation.isValid,
        cardType: validation.card?.type || 'unknown',
        maxLength: validation.card?.lengths || [],
        gaps: validation.card?.gaps || [],
        message: validation.isValid ? 'Número de tarjeta válido' : 'Número de tarjeta inválido'
    };
};

// Ejemplo de validación de fecha de vencimiento
export const validateExpiryDate = (expiry: string) => {
    const validation = valid.expirationDate(expiry);
    
    return {
        isValid: validation.isValid,
        month: validation.month,
        year: validation.year,
        message: validation.isValid ? 'Fecha válida' : 'Fecha inválida o expirada'
    };
};

// Ejemplo de validación de CVV
export const validateCVV = (cvv: string, cardNumber?: string) => {
    const validation = valid.cvv(cvv, cardNumber ? valid.number(cardNumber).card?.code?.size : undefined);
    
    return {
        isValid: validation.isValid,
        maxLength: 3, // Longitud estándar para CVV
        message: validation.isValid ? 'CVV válido' : 'CVV inválido'
    };
};

// Ejemplo de validación de nombre del titular
export const validateCardholderName = (name: string) => {
    const validation = valid.cardholderName(name);
    
    return {
        isValid: validation.isValid,
        message: validation.isValid ? 'Nombre válido' : 'Nombre inválido'
    };
};

// Ejemplo de uso combinado
export const validateCompleteCard = (cardData: {
    number: string;
    expiry: string;
    cvv: string;
    name: string;
}) => {
    const numberValidation = validateCardNumber(cardData.number);
    const expiryValidation = validateExpiryDate(cardData.expiry);
    const cvvValidation = validateCVV(cardData.cvv, cardData.number);
    const nameValidation = validateCardholderName(cardData.name);

    return {
        isValid: numberValidation.isValid && 
                expiryValidation.isValid && 
                cvvValidation.isValid && 
                nameValidation.isValid,
        details: {
            number: numberValidation,
            expiry: expiryValidation,
            cvv: cvvValidation,
            name: nameValidation
        }
    };
}; 