import "styles/CheckListComponent.css";

const CheckList = () => {
  return (
    <div className="checklist">
      <div className="item">
        <span className="check-icon completed">&#10003;</span>
        <span className="text completed">8 Characters min.</span>
      </div>
      <div className="item">
        <span className="check-icon">&#10003;</span>
        <span className="text">One number</span>
      </div>
    </div>
  );
};

export default CheckList;