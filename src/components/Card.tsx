import { useContext } from "react";
import { PostContext } from "../context/post-context.tsx";
import * as React from "react";
import { IData } from "../pages/Home.tsx";

interface CardProps {
  blog:{
    id: number;
    title: string;
    body: string;
    author: string;
    date: string;
  }
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSingleViewModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditId: React.Dispatch<React.SetStateAction<number>>;
  setViewId: React.Dispatch<React.SetStateAction<number>>;
}
const Card = ({
  blog,
  setShowModal,
  setEditId,
  setViewId,
  setShowSingleViewModal,
}: CardProps) => {
  const [data, setData] = useContext(PostContext);
  function handleDelete() {
    const newData = data.filter((entry: IData) => entry.id !== blog.id);
    setData(newData);
  }

  function handleUpdate() {
    setShowModal(true);
    setEditId(blog.id);
  }

  function handleView() {
    setShowSingleViewModal(true);
    setViewId(blog.id);
  }

  return (
    <div className="bg-white mb-4 w-full max-w-[600px] p-5 rounded cursor-pointer">
      <h1 className="font-bold pb-2">{blog.title}</h1>
      <p className="line-clamp-3 ">{blog.body}</p>
      <p className="font-semibold text-sm pt-1.5 pb-1">{blog.author}</p>
      <p className="text-xs">{blog.date}</p>
      <div className="flex flex-row justify-end items-center gap-x-2">
        <button onClick={handleView}>View</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
