import React from 'react';
import 'styles/ErrorMessage.css';

const ErrorMessageComponent = () => {
    return (
        <div className="error-message">
            <span className="error-icon fas fa-exclamation-circle"></span>
            Please complete all the required fields to proceed.
        </div>
    );
};

export default ErrorMessageComponent;