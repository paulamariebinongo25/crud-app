import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.css";
import "bulma/css/bulma.css";

import userReducer from "./redux/user/userReducer";
import Navbar from "./components/header/Navbar";
import ListOfUsersToBeFollowedTable from "./components/tables/ListOfUsersToBeFollowedTable";
import AddUserForm from "./components/forms/AddUserForm";

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(userReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="columns">
          <div className="first-column container">
            <div className="column">
              <AddUserForm />
            </div>
          </div>
          <div className="second-column container">
            <ListOfUsersToBeFollowedTable />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
