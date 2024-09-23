import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import TermPage from "./pages/TermPage/TermPage";
import SubmitWord from "./pages/SubmitWord/SubmitWord";
import Admin from "./pages/Admin/Admin";

export const routes = [
  {
    id: 1,
    path: "*",
    name: "Not Found",
    component: NotFound,
  },
  {
    id: 2,
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    id: 3,
    path: "/dictionary/:term",
    name: "Term Page",
    component: TermPage,
  },
  {
    id: 4,
    path: "/submit-word",
    name: "Submit Word",
    component: SubmitWord,
  },
  {
    id: 5,
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];
