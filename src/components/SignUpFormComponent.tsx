import React, { useState } from "react";
import { validateEmail, validatePassword } from 'utils/validators';
import "styles/SignUpFormComponent.css";
import InputComponent from "components/InputComponent";
import CheckListComponent from "components/CheckListComponent";
import CheckBoxComponent from "components/CheckBoxComponent";
import ErrorMessageComponent from "./ErrorMessageComponent";

const SignUpFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  const [hasEmpty, setHasEmpty] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const clickToSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hasEmptyField: boolean = Object.values(formData).some(value => 
        typeof value === 'string' ? value.trim() === '' : !value
      );
    if(hasEmptyField || formData.agreeToTerms === false){
      setHasEmpty(true)
    }else{
      setHasEmpty(false)
    }
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
          {hasEmpty && <div className="err-text-wrap">
            <ErrorMessageComponent />
          </div>}
          <div className="signup-btn-wrap">
            <button className="google-btn"> 
              <i className="fab fa-google "></i>Sign up with Google
            </button>
            <button className="facebook-btn">
              <i className="fab fa-facebook-f"></i>Sign up with Facebook
            </button>
          </div>
          <div className="registration-text">
            <p>Or use your email for registration</p>
          </div>
          <form className="signup-form" onSubmit={clickToSubmit}>
            <div className="input-row">
              <InputComponent
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                hasError={hasEmpty && formData.firstName.trim() === ''}
              />
              <InputComponent
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                hasError={hasEmpty && formData.lastName.trim() === ''}
              />
            </div>
            <div className="input-row">
              <InputComponent
                type="text"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                hasError={hasEmpty && formData.email.trim() === ''}
              />
            </div>
            <div className="input-row">
              <InputComponent
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                hasError={hasEmpty && formData.password.trim() === ''}
              />
            </div>
            <div className="">
              <CheckListComponent password={formData.password}/>
            </div>
            <div className="checkbox-row">
              <CheckBoxComponent 
                formData={formData} 
                handleChange={handleChange} 
                hasError={hasEmpty && formData.agreeToTerms === false}
              />
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
