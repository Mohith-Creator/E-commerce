import "./Buttons.css";

function Buttons({ onShowMore }) {
  return (
    <div className="buttons">
      <button onClick={onShowMore}>
        VIEW ALL <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Buttons;
