export const validate = (name: string, value: string) => {
    switch (name) {
        case 'firstName':
            return /^[A-Za-z\u4e00-\u9fff]+$/.test(value) ? '' : 'First Name must contain only English or Chinese characters.';        
        case 'lastName':
            return /^[A-Za-z\u4e00-\u9fff]+$/.test(value) ? '' : 'Last Name must contain only English or Chinese characters.';
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address.';
        case 'password':
            return value.length >= 8 ? '' : 'Password must be at least 8 characters long.';
        default:
            return '';
    }
};