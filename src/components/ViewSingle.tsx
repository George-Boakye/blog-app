import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/post-context.tsx";
import { IData } from "../pages/Home.tsx";

interface IViewSingle {
  viewId: number;
}
const ViewSingle = ({ viewId }: IViewSingle) => {
  const [data] = useContext(PostContext);
  const [blog, setBlog] = useState<IData>({
    id: 0,
    title: "",
    body: "",
    author: "",
    date: "",
  });

  useEffect(() => {
    const res = data.find((blog: IData) => blog.id === viewId);
    setBlog(res);
  }, [viewId, data]);

  return (
    <div className="text-left w-full">
      <h1 className="font-bold pb-2">{blog?.title}</h1>
      <p className=" ">{blog?.body}</p>
      <p className="font-semibold text-sm pt-1.5 pb-1">{blog?.author}</p>
      <p className="text-xs">{blog?.date}</p>
    </div>
  );
};

export default ViewSingle;
