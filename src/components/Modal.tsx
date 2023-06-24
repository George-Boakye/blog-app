import * as React from "react";

interface IModal {
  children: React.ReactNode;
  setShowModal: () => void;
}
const Modal = ({ children, setShowModal }: IModal) => {
  return (
    <div className="backdrop-blur-md  bg-transparent flex items-center justify-center fixed w-full h-full top-0 left-0">
      <div className=" relative flex items-center justify-center bg-white rounded p-5 py-10 max-w-[700px] w-full ">
        <div
          onClick={() => setShowModal()}
          className="cursor-pointer absolute top-[10px] right-[20px] text-2xl"
        >
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
