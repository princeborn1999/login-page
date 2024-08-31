import "styles/CheckListComponent.css";

interface CheckListProps {
  password: string;
}

const CheckList: React.FC<CheckListProps> = ({ password }) => {
  const hasMinLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  return (
    <div className="checklist">
      <div className="item">
        <span className={`check-icon ${hasMinLength ? 'completed' : ''}`}>&#10003;</span>
        <span className={`text ${hasMinLength ? 'completed' : ''}`}>8 Characters min.</span>
      </div>
      <div className="item">
        <span className={`check-icon ${hasNumber ? 'completed' : ''}`}>&#10003;</span>
        <span className={`text ${hasNumber ? 'completed' : ''}`}>One number</span>
      </div>
    </div>
  );
};

export default CheckList;