interface FormData {
    firstName: string;
  }
  
  interface FormErrors {
    firstName?: string;
  }
  
  export const validateForm = (formData: FormData): FormErrors => {
    let formErrors: FormErrors = {};
  
    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
    } else if (formData.firstName.length < 2) {
      formErrors.firstName = 'First Name must be at least 2 characters long';
    }
  
    return formErrors;
};