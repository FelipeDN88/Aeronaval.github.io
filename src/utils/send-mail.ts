import { send } from 'emailjs-com';
import Swal from 'sweetalert2';
import { displayErrorAlert, validateAndGenerateErrorMessages } from '../validations/errorHandle';

export const handleSubmit = async (
  e: React.FormEvent,
  name: string,
  email: string,
  message: string
): Promise<boolean> => {
  e.preventDefault();

  const errorMessages = validateAndGenerateErrorMessages(name, email, message);

  if (errorMessages) {
    displayErrorAlert(errorMessages);
    return false;
  }

  const formValues = {
    from_name: name,
    reply_to: email,
    message: message,
  };

  try {
    const response = await send(
      'service_tya7vsj',  // Service ID
      'template_vxk31i4', // Template ID
      formValues, // Values to be sent
      'HkpAl6CvxAIoTzRl5' // Public key from emailJS
    );
    console.log('Email successfully sent!', response.status, response.text);
    Swal.fire({
      icon: 'success',
      title: 'Email successfully sent!',
      confirmButtonColor: '#4A62FF',
      width: 400,
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to send email',
      confirmButtonColor: '#4A62FF',
      width: 400,
    });
    console.log('Failed to send email', error);
    return false;
  }
};
