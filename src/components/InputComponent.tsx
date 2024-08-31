import React, { useState } from 'react';
import 'styles/InputComponent.css';

interface InputComponentProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    width?: string; // 新增寬度設置
    customClass?: string;
    hasError?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    required = false,
    customClass = '', // 默認為空字符串
    hasError,
  }) => {
    const [hasContent, setHasContent] = useState(!!value);
    const [showPassword, setShowPassword] = useState(type === 'password' ? false : true);
    const handleChange = (event: any) => {
        const newValue = event.target.value;
        setHasContent(!!newValue);
        if (onChange) onChange(event);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return(
        <div className={`input-container ${customClass}`}>
            <input
                type={showPassword ? 'text' : type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
                className={hasError ? 'input-error' : 'input-normal'}
            />
            {type === 'password' && (
            <span className = {`toggle-password ${showPassword ? 'visible' : ''}`} 
                  onClick={togglePasswordVisibility}>
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
