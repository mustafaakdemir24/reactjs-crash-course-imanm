function Popup({ title }) {
  return (
    <>
      <div className="popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            onClick={() => console.log(`Confirm button clicked`)}
            className="popup__btn"
          >
            Confirm
          </button>
          <button
            onClick={() => console.log(`Cancel button clicked`)}
            className="popup__btn popup__btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Popup;
