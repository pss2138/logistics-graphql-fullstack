import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import OrderMngPage from "../pages/OrderMngPage";
import PaymentPage from "../pages/PaymentPage";

const MyRouter = () => {
  const generalRoutesList = [
    { path: "/", component: <OrderMngPage /> },
    { path: "/subscribe", component: <PaymentPage /> },
  ];

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
