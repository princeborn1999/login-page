import React from 'react';
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
    width = '100%', // 默認寬度
    customClass = '', // 默認為空字符串
    error,
  }) => {
    return(
        <>
         {/* <div className={`input-container ${customClass}`}> */}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                style={{ width }} // 動態設置寬度
                className="input-field"
            />
            {error && <div className="error-message">{error}</div>} {/* 显示错误信息 */}
        {/* </div> */}
        </>
    )
}
export default InputComponent;
