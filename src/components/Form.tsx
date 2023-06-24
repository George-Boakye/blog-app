import { useContext, useEffect, useState } from "react";
import * as React from "react";
import { PostContext } from "../context/post-context.tsx";
import { IData } from "../pages/Home.tsx";
import { nanoid } from "nanoid";
import * as dayjs from "dayjs";
interface IForms {
  editId?: number | null;
  setEditId: React.Dispatch<React.SetStateAction<number>>;
}

const Form = ({ editId, setEditId }: IForms) => {
  const [blogData, setBlogData] = useState({
    id: null,
    title: "",
    body: "",
    author: "",
  });
  const [data, setData] = useContext(PostContext);

  useEffect(() => {
    const entryToEdit = data.find((entry: IData) => entry.id === editId);
    if (entryToEdit) {
      setBlogData(entryToEdit);
    }
  }, [editId, data]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const userId = nanoid(5);
    const currentDate = dayjs(new Date()).format("YYYY-MM-DD");

    if (!editId) {
      const updatedBlogData = [
        ...data,
        { ...blogData, id: userId, date: currentDate },
      ];
      setData(updatedBlogData);
      setBlogData({ id: null, title: "", body: "", author: "" });
      return;
    }
    const updatedBlogData = data.map((entry: IData) => {
      if (entry.id === editId) {
        return { ...blogData, date: currentDate };
      }
      return entry;
    });
    setData(updatedBlogData);
    setBlogData({ id: null, title: "", body: "", author: "" });
    setEditId(0);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogData((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogData((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[450px] w-full">
      <label className="block" htmlFor="">
        Title: <br />
        <input
          value={blogData.title}
          name="title"
          onChange={handleChange}
          className=""
          type="text"
        />
      </label>
      <label className="block" htmlFor="">
        Body: <br />
        <textarea
          value={blogData.body}
          name="body"
          onChange={handleTextAreaChange}
          className="w-full p-1 border-2 rounded border-black"
          id=""
          cols={30}
          rows={10}
          placeholder="Type your content here "
        ></textarea>
      </label>
      <label className="block" htmlFor="">
        Author: <br />
        <input
          type="text"
          value={blogData.author}
          name="author"
          onChange={handleChange}
        />
      </label>
      <button className="mt-3">Submit</button>
    </form>
  );
};
export default Form;
