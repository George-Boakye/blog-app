import Navbar from "../components/Navbar.tsx";
import Card from "../components/Card.tsx";
import Form from "../components/Form.tsx";
import { useContext, useState } from "react";
import { PostContext } from "../context/post-context.tsx";
import Modal from "../components/Modal.tsx";
import ViewSingle from "../components/ViewSingle.tsx";

export interface IData {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
}
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSingleViewModal, setShowSingleViewModal] = useState(false);
  const [editId, setEditId] = useState<number>(0);
  const [viewId, setViewId] = useState<number>(0);
  const [data] = useContext(PostContext);

  function handleFormModal() {
    setShowModal((prevState) => !prevState);
  }

  function handleViewSingleModal() {
    setShowSingleViewModal((prevState) => !prevState);
  }

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <main className="bg-transparent p-5 md:px-28 flex flex-col items-center justify-center md:py-10 py-5">
        {data.map((blog: IData) => (
          <Card
              key={blog.id}
            setShowSingleViewModal={setShowSingleViewModal}
            setViewId={setViewId}
            setEditId={setEditId}
            setShowModal={setShowModal}
            blog={blog}
          />
        ))}
      </main>
      {showModal ? (
        <Modal setShowModal={handleFormModal}>
          <Form editId={editId} setEditId={setEditId} />
        </Modal>
      ) : null}
      {showSingleViewModal ? (
        <Modal setShowModal={handleViewSingleModal}>
          <ViewSingle viewId={viewId} />
        </Modal>
      ) : null}
    </>
  );
};

export default Home;
