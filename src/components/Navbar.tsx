import React, { useContext } from "react";
import { PostContext } from "../context/post-context.tsx";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ setShowModal }: Props) => {
  const [data] = useContext(PostContext);

  function handleClick() {
    setShowModal(true);
  }

  return (
    <nav className="bg-white p-5 flex flex-row justify-between items-center md:px-12">
      <div>
        <h1>{`Blogs(${data.length})`}</h1>
      </div>
      <button onClick={handleClick}>New post</button>
    </nav>
  );
};

export default Navbar;
