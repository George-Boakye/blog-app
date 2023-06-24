import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import PostProvider from "./context/post-context.tsx";

function App() {
  return (
    <>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
    </>
  );
}

export default App;
