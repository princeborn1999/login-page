export const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? null : 'Invalid email format';
};
  
export const validatePassword = (password: string): string | null => {
    const passwordRegex = /^(?=.*[0-9])(?=.{8,})/;
    return passwordRegex.test(password) ? null : 'Password must be at least 8 characters and contain at least one number';
};

export const validateName = (name: string): string | null => {
    const nameRegex = /^[A-Za-z][A-Za-z\s-]*[A-Za-z]$/;
    return nameRegex.test(name) && name.length >= 2 ? null : 'Name must be at least 2 characters long and contain only letters, spaces, or hyphens';
};