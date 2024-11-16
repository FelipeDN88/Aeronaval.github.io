import { validateForm } from './validateForm';
import Swal from 'sweetalert2';

export const validateAndGenerateErrorMessages = (name: string, email: string, message: string) => {
    // Handle with the error messages depending on the validation,
    // add on the below if statement the fields that you want to validate.
    // You'll need to adjust the validateForm.ts file to add the validation.
    const errors = validateForm(name, email, message);
    const errorMessages = Object.entries(errors)
        .filter(([_key, value]) => value !== '')
        .map(([key, value]) => `${value} ${key === 'email' && 'format' ? 'is incorrect' : 'are empty'}`)
        .join(' and ');

    return errorMessages;
};

export const displayErrorAlert = (errorMessage: string) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        confirmButtonColor: '#4A62FF',
        width: 400,
    });
};