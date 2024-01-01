const Modal = ({ isOpen, closeModal, children, className }) => {
  if (!isOpen) return null;
  return (
    <div
      className="w-full flex items-center justify-center "
    >
      <div
        className={` fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center cursor-pointer overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        id="wrapper"
      >
        <div className={`${className ? className : ""}`}>
          <div className="bg-white md:py-4 md:px-8  p-4 rounded-lg shadow-custom-light">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
