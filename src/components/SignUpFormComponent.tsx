import React, { useState } from "react";
import { validateEmail, validatePassword } from 'utils/validators';
import "styles/SignUpFormComponent.css";
import InputComponent from "components/InputComponent";

const SignUpFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // 其他字段的错误信息
  });
  
  const validateForm = () => {
    let formErrors: Record<string, string> = {};

    // 使用导入的验证函数
    const emailError = validateEmail(formData.email);
    if (emailError) formErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) formErrors.password = passwordError;

    // 其他字段的验证逻辑

    return formErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const clickToSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="back-section">
        <button className="back-link">← Back</button>
      </div>
      <div className="form-section">
        <div className="text-wrap">
          <h2 className="start-text">Start from free</h2>
          <h1 className="create-text">Create an account</h1>
        </div>
        <div className="signup-btn-wrap">
          <button className="google-btn">Sign up with Google</button>
          <button className="facebook-btn">Sign up with Facebook</button>
        </div>
        <div className="registration-text">
          <p>Or use your email for registration</p>
        </div>
        <form onSubmit={clickToSubmit} className="signup-form">
          <div className="input-row">
            <InputComponent
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <InputComponent
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-row">
            <InputComponent
              type="text"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-row">
            <InputComponent
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <small>8 Characters min. • One number</small>

          <div className="checkbox-row">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label className="">
              By creating an account, you agree to accept our Privacy Policy,
              Terms of Service and Notification settings.
            </label>
          </div>
          <button type="submit" className="signup-btn">Create a Free Account!</button>
        </form>
        <div className="account-login-prompt-wrap">
          <p className="account-login-prompt">Already have an account?</p>
          <a href="#">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormComponent;
