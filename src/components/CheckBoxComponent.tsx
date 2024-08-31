import React from "react";
import "styles/CheckBoxComponent.css";
interface FormData {
    agreeToTerms: boolean;
}
interface CheckBoxComponentProps {
    formData: FormData;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hasError?: boolean;
}
const CheckBoxComponent: React.FC<CheckBoxComponentProps> = ({ formData, handleChange, hasError }) => {
  return (
    <div className="checkbox-container">
        <div>
            <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className={`checkbox-input ${hasError ? 'checkbox-error' : ''}`}
            />
        </div>
       
        <label className="checkbox-label">
            By creating an account, you agree to accept our Privacy Policy,
            Terms of Service and Notification settings.
        </label>
    </div>
  );
};

export default CheckBoxComponent;