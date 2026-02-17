import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Publications } from "./pages/Publications";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "experience", Component: Experience },
      { path: "publications", Component: Publications },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
    ],
  },
]);
