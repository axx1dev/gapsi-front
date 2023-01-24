import Home from "./pages/home/Home";
import Suppliers from "./pages/suppliers/Suppliers";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
    id: "home"
  },
  {
    name: "Lista de proveedores",
    path: "/list-suppiers",
    element: <Suppliers />,
    id: "list-supplier"
  },
];

export default routes;
