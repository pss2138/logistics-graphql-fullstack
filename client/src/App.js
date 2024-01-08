import { Provider } from "react-redux";
import MyRouter from "./routes/Router";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { StyledToast } from "./style/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRouter />
          <StyledToast limit={4} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
