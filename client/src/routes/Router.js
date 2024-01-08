import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import OrderMngPage from "../pages/OrderMngPage";

const MyRouter = () => {
  const generalRoutesList = [{ path: "/", component: <OrderMngPage /> }];

  return (
    <>
      <NavBar />

      <Routes>
        {generalRoutesList.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
};

export default MyRouter;
