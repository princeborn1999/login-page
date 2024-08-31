import React from "react";
import "styles/CheckListComponent.css";

interface CheckListProps {
  password: string;
}

const CheckList: React.FC<CheckListProps> = ({ password }) => {
  const hasMinLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);

  const getItemClassName = (condition: boolean) => condition ? 'completed' : '';

  return (
    <div className="checklist">
      <div className="checklist-item">
        <span className={`check-icon ${getItemClassName(hasMinLength)}`}>&#10003;</span>
        <span className={`checkbox-label-text ${getItemClassName(hasMinLength)}`}>8 Characters min.</span>
      </div>
      <div className="checklist-item">
        <span className={`check-icon ${getItemClassName(hasNumber)}`}>&#10003;</span>
        <span className={`checkbox-label-text ${getItemClassName(hasNumber)}`}>One number</span>
      </div>
    </div>
  );
};

export default CheckList;