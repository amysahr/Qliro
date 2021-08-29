import React from "react";
import { useSelector } from "react-redux";

import { AppHeader, InformationContainer, OrderRows, Help } from "./components";
import { PaginationContextProvider } from "./context/Pagination.context";

import "@fontsource/metropolis";

import "./App.css";

function App() {
  const state = useSelector((state) => state.staticContent);
  return (
    <div className="App">
      <AppHeader />
      <InformationContainer />
      <Help />
      <div className="orderText">
        <h3>{state.firstName}'s orders</h3>
      </div>
      <PaginationContextProvider>
        <OrderRows orders={state.orders} />
      </PaginationContextProvider>
    </div>
  );
}

export default App;
