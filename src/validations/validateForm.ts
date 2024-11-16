export const validateForm = (name: string, email: string, message: string) => {
    const errors: { [key: string]: string } = {};

    // Add here any field that you want to validate.
    // You'll need to adjust the errorHandling.ts file to display the error message
    // and the send-email.ts file to handle the error message.

    if (!name && !email && !message) {
        errors.name = 'Name';
        errors.email = 'Email';
        errors.message = 'Message';
    } else {
        if (!name) {
            errors.name = 'Name';
        }
        if (!email) {
            errors.email = 'Email field';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email format';
        }
        if (!message) {
            errors.message = 'Message';
        }
    }

    return errors;
};