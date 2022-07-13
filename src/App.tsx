import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from './app/store';
import "./App.scss";
import AppHeader from "./components/commons/header/header";

const App: FC = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <AppHeader />
        </div>
      </Provider>
  );
};
export default App;
