import { Provider } from "react-redux";
import MyRouter from "./routes/Router";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { StyledToast } from "./style/global";
import "react-toastify/dist/ReactToastify.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  const userState = JSON.parse(localStorage.getItem("persist:root")).userState;
  const token = JSON.parse(userState).token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
