import React from 'react';
import 'styles/ErrorMessageComponent.css';

/**
 * @property {string}
 */
interface ErrorMessageComponentProps {
    message?: string;
}

const ErrorMessageComponent: React.FC<ErrorMessageComponentProps> = ({
    message = '',
}) => {
    return (
        <div className="error-message">
            <span className="error-icon fas fa-exclamation-circle"></span>
            {message}
        </div>
    );
};

export default ErrorMessageComponent;