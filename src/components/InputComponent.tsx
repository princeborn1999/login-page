import React, { useState } from 'react';
import 'styles/InputComponent.css';

interface InputComponentProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasError?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    hasError,
  }) => {
    const [hasContent, setHasContent] = useState(!!value);
    const [showPassword, setShowPassword] = useState(type === 'password');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setHasContent(!!newValue);
        onChange(event);
    };

    /**
     * Toggles the visibility of the password field.
     */
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return(
        <div className={'input-container'}>
            <input
                type={showPassword ? 'text' : type}
                name={name}
                value={value}
                onChange={handleChange}
                className={hasError ? 'input-error' : 'input-normal'}
            />
            {type === 'password' && (
                <span className = {`toggle-password ${showPassword ? 'visible' : ''}`} 
                    onClick={togglePasswordVisibility}
                >
                    <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye'}`}></i>
                </span>
            )}
            <label className={`floating-label ${hasContent ? 'has-content' : ''}`}>
                {placeholder}
            </label>
        </div>
    )
}
export default InputComponent;
