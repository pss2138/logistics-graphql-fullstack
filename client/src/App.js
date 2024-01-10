import { Provider } from "react-redux";
import MyRouter from "./routes/Router";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { StyledToast } from "./style/global";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_DOMAIN,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <MyRouter />
            <StyledToast limit={4} />
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
