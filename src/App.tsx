import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Swiper from "./components/Swiper";
import WorkCalendar from "./components/WorkCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkCalendar />,
  },
  {
    path: "/swiper",
    element: <Swiper />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
