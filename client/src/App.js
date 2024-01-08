import { Provider } from "react-redux";
import MyRouter from "./routes/Router";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRouter />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
