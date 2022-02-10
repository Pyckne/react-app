export const validateEmail = (email) => {
    const validateEmail = /\S+@\S+\.\S+/
    return validateEmail.test(email);
};

export const validateName = (name) => {
    const validateName = /^[a-zA-Z]+$/
    return validateName.test(name);
};

export const validateLastName = (lastName) => {
    const validateLastName = /^[a-zA-Z]+$/
    return validateLastName.test(lastName);
};

export const validatePhone = (phone) => {
    const validatePhone = /^\d{10}$/
    return validatePhone.test(phone);
};

export const initialState = {
    name: '',
    lastname: '',
    phone: '',
    email1: '',
    email2: '',
};