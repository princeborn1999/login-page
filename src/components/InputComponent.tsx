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
    error?: string; // 错误信息
}

const InputComponent: React.FC<InputComponentProps> = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    required = false,
    customClass = '', // 默認為空字符串
    error,
  }) => {
    const [hasContent, setHasContent] = useState(!!value);
    const handleChange = (event: any) => {
        const newValue = event.target.value;
        setHasContent(!!newValue);
        if (onChange) onChange(event);
      };
    return(
        <div className={`input-container ${customClass}`}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
            />
            <label className={`floating-label ${hasContent ? 'has-content' : ''}`}>
                {placeholder}
            </label>
        </div>
    )
}
export default InputComponent;
